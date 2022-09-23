import React, { useState } from 'react';
import Button from '../components/Button';
import Editor from '../components/Editor';


function CodeEditor() {

    const [openedEditor, setOpenedEditor] = useState('html');
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    const onTabClick = (editorName) => {
        setOpenedEditor(editorName);
    };


    return (
        <div className="App">
            <p>Welcome to the editor!</p>
            <Editor />
            <div className="tab-button-container">
                <Button title="HTML" onClick={() => {
                    onTabClick('html')
                }} />

                <Button title="CSS" onClick={() => {
                    onTabClick('css')
                }} />
                <Button title="JavaScript" onClick={() => {
                    onTabClick('js')
                }} />
            </div>
            <div className="editor-container">
                {/* {
                    htmlEditorIsOpen ? (
                        <Editor
                            language="xml"
                            value={html}
                            setEditorState={setHtml}
                        />
                    ) : cssEditorIsOpen ? (
                        <Editor
                            language="css"
                            value={css}
                            setEditorState={setCss}
                        />
                    ) : (
                        <Editor
                            language="javascript"
                            value={js}
                            setEditorState={setJs}
                        />
                    )
                } */}
            </div>
        </div>
    );

}
export default CodeEditor;


