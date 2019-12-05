export const getAthletes = () => {
    return fetch('http://localhost:9000/api/athletes', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer'
    })
        .then(response => response.json())
        .catch(err => {
            return err;
        });

}

export const getAthlete = (id) => {
    debugger;
    return fetch(`http://localhost:9000/api/athletes/${id}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer'
    })
        .then(response => response.json())
        .catch(err => {
            return err;
        });
}

export const deleteAthlete = (id) => {
    debugger;
    return fetch(`http://localhost:9000/api/athletes/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer'
    })
        .then(response => response.json())
        .catch(err => {
            return err;
        });
}

export const uploadAthleteJSON = (file) => {
    fetch('http://localhost:9000/api/uploadjsonathlete', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrer: 'no-referrer',
            body: file,
        })
            .then(response => response.json())
            .then(success => {
                // Do something with the successful response
            })
            .catch(error => console.log(error)
            );
}