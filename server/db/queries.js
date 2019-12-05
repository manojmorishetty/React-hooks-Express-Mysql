const mysql = require('mysql');

let queries = {}

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: "3306",
    user: 'root',
    password: '12345',
    database: 'resource',
    connectTimeout: 30000
});

queries.selectOrDeleteQuery = async (queryStr) => {
    return new Promise((resolve, reject) => {
        pool.query(queryStr, function (error, results, fields) {
            if (error) return reject(error);
            else {
                return resolve(results);
            }
        })
    })
}

queries.insertQuery = async (queryStr, tableName, values) => {
    return new Promise((resolve, reject) => {
        pool.query(queryStr, function (error, results, fields) {
            if (error) return reject(error);
            else {
                if (results.length == 0) {
                    let insertQueryString= `Insert into ${tableName} SET ?`;
                    pool.query(insertQueryString, values, function (err, res, fields) {
                        if (err) reject(err);
                        return resolve(res.insertId);
                    });
                }
                else{
                    return resolve(results);
                }
            }
        })
    })
}




module.exports = queries;





