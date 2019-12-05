import React, { useState, useEffect } from 'react'
import {
    Table, Button
} from 'reactstrap';
import { useHistory, useRouteMatch } from 'react-router-dom'

import * as athleteAPI from 'API/athlete.js'

const AthleteView = () => {
    let history = useHistory()
    let match = useRouteMatch()
    let athleteId = match.params.athleteId;
    const [athleteData, setathleteData] = useState({});
    const [deleteSuccess, setdeleteSuccess] = useState([null, ""]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await athleteAPI.getAthlete(parseInt(athleteId));
            setathleteData(result[0]);
        };
        fetchData();
    }, []);

    const deleteAthlete = (e) => {
        const deleteData = async (e) => {
            debugger;
            const result = await athleteAPI.deleteAthlete(parseInt(e.currentTarget.getAttribute("id")));
            if (result) {
                setdeleteSuccess([true, "success"]);
                debugger;
                history.goBack();
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
                <h3 className="athlete_heading">{athleteData.name}</h3>
                <div className="heading_margin">
                    <Table>
                        <tbody>
                            <tr>
                                <td style={{ fontWeight: "bold" }}>AGE</td>
                                <td>{athleteData.age}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold" }}>CITY</td>
                                <td>{athleteData.city}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold" }}>PROVINCE</td>
                                <td>{athleteData.province}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold" }}>Country</td>
                                <td>{athleteData.country}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div style={{ marginTop: "5px" }}>
                    <Button id={athleteData.athleteid} onClick={(e) => deleteAthlete(e)} block color="primary">Delete</Button>
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

export default AthleteView