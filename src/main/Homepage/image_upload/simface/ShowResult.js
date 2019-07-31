import React from "react";
import Paper from "@material-ui/core/Paper";

function ViewFaceResult(props) {
    var refImagefile =
        "http://localhost:8000/media/similarFace/" +
        props.responseResult[0] +
        "/" +
        props.responseResult[0] +
        ".jpg";
    var comImagefile =
        "http://localhost:8000/media/similarFace/" +
        props.responseResult[0] +
        "/" +
        props.responseResult[1] +
        ".jpg";
    return (
        <div>
            <Paper>
                <div style={{ textAlign: "center" }}>
                    <img height="180" src={refImagefile} />
					<span>is similar with</span>
					{props.responseResult[1]!=="None" ? <img height="180" src={comImagefile}/>:" None"}

                </div>
            </Paper>
        </div>
    );
}

export default ViewFaceResult;
