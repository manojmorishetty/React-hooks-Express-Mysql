import React, { useState } from 'react'
import {
    Col, Row, Button, Input, Label, Collapse
} from 'reactstrap';

import * as athleteAPI from 'API/athlete.js'

const UploadAthlete = () => {
    const [jsonFile, setjsonFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [uploadSuccess, setUploadSuccess] = useState([null, ""]);
    const onChangeHandler = (event) => {
        debugger;
        let file = event.target.files[0];
        setFileName(file.name);
        if (file.type == "application/json") {
            setjsonFile(file);
        }
    }

    const onClickHandler = () => {
        const data = new FormData();
        data.append('file', jsonFile);
        const result = async (data) => {
            await athleteAPI.uploadAthleteJSON(data);
            if (result) {
                setUploadSuccess([true, "success"]);
            }
            else {
                setUploadSuccess([false, result]);
            }
        }
        result(data);
    };


    return (
        <React.Fragment>
            <div className="content">
                <h3 className="athlete_heading">Upload Athletes</h3>
                <div className="heading_margin">
                    <Label for="File">File</Label>
                    <Row>
                        <Col md={4} xl={4} xs={4}>
                            <Input type = "text" value={fileName} disabled/>
                            <Input type="file" name="file" id = "fileInput" style={{ display: "none" }} onChange={(e) => { onChangeHandler(e) }} />
                        </Col>
                        <Col md={2} xl={2} xs={2}>
                            <Button size="md" outline color="primary" onClick={() => {document.getElementById("fileInput").click()}}>Browse</Button>
                        </Col>
                    </Row>
                    <div style={{ marginTop: "5px" }}>
                        <Row >
                            <Col md={6} xl={6} xs={6}>
                                <Button block onClick={onClickHandler} color="primary">Upload File</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            {
                uploadSuccess[0] == true ? <div style={{ display: "flex", justifyContent: "center", color: "green" }}>
                    File uploaded successfully
                </div> : uploadSuccess[0] == false ? <div style={{ display: "flex", justifyContent: "center", color: "red" }}>
                        File uploaded Failed {uploadSuccess[1]}
                    </div> : ''
            }
        </React.Fragment>
    )
}

export default UploadAthlete