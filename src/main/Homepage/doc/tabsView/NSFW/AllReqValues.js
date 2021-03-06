import React from "react";
import Table from "react-bootstrap/Table";

function POSTReqTable() {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>file</td>
                        <td>image</td>
                        <td>Any image file</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

function POSTResTable() {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>classes</td>
                        <td>String</td>
                        <td>class having the maximum probability</td>
                    </tr>
                    <tr>
                        <td>probabilities</td>
                        <td>Dictionary</td>
                        <td>contains classes and corresponding probability</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

const POSTResExample = JSON.stringify(
    {
        classes: "Porn",
        probabilities: {
            Drawings: 0.00549643068,
            Hentai: 0.0385140628,
            Neutral: 0.408659965,
            Porn: 0.543233097,
            Sexy: 0.00409639906
        }
    },
    null,
    2
);

const POSTcurlValue =
    'curl -i -X POST -H "Content-Type: multipart/form-data " -F "file=@<path to image file> " http://127.0.0.1:8000/api/nsfw/';
const POSTpythonValue =
    "import requests \nimagePath = <path to image file> \nurl =  \"http://127.0.0.1:8000/api/nsfw/\" \nfiles = {'file': open(imagePath, 'rb') }\nresponse = requests.post(url, files=files)\nprint(response.text)";
const POSTnodeValue = "";

export {
    POSTResExample,
    POSTReqTable,
    POSTnodeValue,
    POSTpythonValue,
    POSTResTable,
    POSTcurlValue
};
