const dbQuery = require('../db/queries.js')
let middleware = {}
const fs = require('fs');


middleware.getAllAthletes = async () => {
    let queryStr = `SELECT athleteid, name, age, location.city, location.province, location.country
    FROM athlete
    INNER JOIN location
    ON athlete.locationid = location.locationid;`
    let athletes = await dbQuery.selectOrDeleteQuery(queryStr).catch(error => {
        throw new Error("Error while querying in getAllAthlete")
    });
    return athletes;
}

middleware.getSingleAthlete = async (athleteId) => {
    let queryStr = `SELECT athleteid, name, age, location.city, location.province, location.country
    FROM athlete
    INNER JOIN location
    ON athlete.locationid = location.locationid
    where athlete.athleteid='${athleteId}'`
    let athletes = await dbQuery.selectOrDeleteQuery(queryStr).catch(error => {
        log.error(error)
        throw new Error("Error while querying in getSingleAthlete");
    });
    return athletes;

}

middleware.addAthlete = async (data) => {
    let queryStr = `SELECT * from location where city = '${data.location.city}' && province='${data.location.province}' && country='${data.location.country}'`
    let values = {
        city: data.location.city,
        province: data.location.province,
        country: data.location.country
    }
    let locationResult = await dbQuery.insertQuery(queryStr, "location", values).catch(error => {
        throw new Error("Location Insert error");
    });
    if (locationResult) {
        let queryStr = `SELECT * from athlete where name = '${data.name}' && age='${data.age}' && locationid=${locationResult[0] == undefined ? locationResult : locationResult[0].locationid}`
        let values = {
            name: data.name,
            age: data.age,
            locationid: locationResult[0] == undefined ? locationResult : locationResult[0].locationid
        }
        let AthleteResult = await dbQuery.insertQuery(queryStr, "athlete", values).catch(error => {
            log.error(error)
            throw new Error("Athlete insert error");
        });
        if (AthleteResult) {
            return true;
        }
    }
}


middleware.deleteAthlete = async (athleteId) => {
    let queryStr = `Delete from athlete where athleteid=${athleteId}`
    let athletes = await dbQuery.selectOrDeleteQuery(queryStr).catch(error => {
        log.error(error)
        throw new Error("Error in deleteing Athlete");
    });
    if (athletes) {
        return true;
    }
}

middleware.getJSONFile = async (file) => {
    try {
        let img = fs.readFileSync(file.path);
        var jsonString = Buffer.from(img).toString();
        jsonParse = JSON.parse(jsonString);
        if (jsonParse.length == undefined) {
            if (validateJson(jsonParse)) {
                const result = await middleware.addAthlete(jsonParse);
                return result;
            }
            else {
                "Invalid JSON File"
            }
        }
        else {
            jsonParse.forEach(async (each) => {
                if (validateJson(each)) {
                    const result = await middleware.addAthlete(validateJson(each));
                    return result;
                }
                else {
                    "Invalid JSON File"
                }
            })
        }
    }
    catch (error) {
        return error;
    }

}

const validateJson = (json) => {
    if (json.name && json.age && json.location && json.location.city && json.location.province && json.location.country != undefined) {
        return true
    }
    else {
        return false
    }
}

module.exports = middleware;