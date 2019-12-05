import React, { useState, useEffect } from 'react'
import {
    Table, Button
} from 'reactstrap';

import * as athleteAPI from 'API/athlete.js'
import { useHistory, useRouteMatch } from 'react-router-dom'

const AthleteList = () => {
    let history = useHistory()
    let match = useRouteMatch()
    const [athletesData, setathletesData] = useState([]);
    const [deleteSuccess, setdeleteSuccess] = useState([null, ""]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await athleteAPI.getAthletes();
            setathletesData(result);
        };
        fetchData();
    }, [deleteSuccess]);
    const viewAthlete = (e) => {
        history.push(`${match.path}/` + parseInt(e.currentTarget.getAttribute("id")))
    }

    const deleteAthlete = (e) => {
        const deleteData = async (e) => {
            debugger;
            const result = await athleteAPI.deleteAthlete(parseInt(e.currentTarget.getAttribute("id")));
            if (result) {
                setdeleteSuccess([true, "success"]);
            }
            else {
                setdeleteSuccess([false, result]);
            }
        };
        deleteData(e);
    }

    return (
        <React.Fragment>
            <div className="content">
                <h3 className="athlete_heading">Athletes</h3>
                <div className="heading_margin">
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>AGE</th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                athletesData.map(athlete => {
                                    return <tr>
                                        <td>{athlete.name}</td>
                                        <td>{athlete.age}</td>
                                        <td>{athlete.city + ", " + athlete.province}</td>
                                        <td><Button id={athlete.athleteid} onClick={(e) => viewAthlete(e)} color="link">View</Button> <Button id={athlete.athleteid} onClick={(e) => deleteAthlete(e)} color="link">Delete</Button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
            {
                deleteSuccess[0] == true ? <div style={{ display: "flex", justifyContent: "center", color: "green" }}>
                    Athlete Delete successfully
                </div> : deleteSuccess[0] == false ? <div style={{ display: "flex", justifyContent: "center", color: "red" }}>
                        Athlete Delete Failed {deleteSuccess[1]}
                    </div> : ''
            }
        </React.Fragment>
    )
}

export default AthleteList