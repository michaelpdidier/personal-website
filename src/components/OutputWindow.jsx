import React from "react";
import Editor from "./Editor";

const OutputWindow = ({editorDocument}) => {

    return (
        <div className="ouput-window">
            <iframe width={1000} height={500} srcDoc={editorDocument}></iframe>
        </div>
    );
}

export default OutputWindow;
