import React, { useState } from "react";
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import 'react-quill/dist/quill.snow.css';
import { useTaskContext } from './TaskProvider.js';


export default function Form() {
    const [input, setInput] = useState("");
    const { modifyContent } = useTaskContext();
    const handlePreview = () => {
        if (input.trim() !== '') {
            modifyContent(input)
        }
    };
    const handleReset = () => {
        setInput("")
    };
    return (
        <div>
            <h2>Text Editor</h2>
            <EditorToolbar toolbarId={'t1'} />
            <ReactQuill theme="snow" value={input} onChange={setInput} placeholder={"Write something awesome..."} modules={modules('t1')} formats={formats} />
            <div className="row">
                <button onClick={handleReset} className="preview-button">Reset</button>
                <button onClick={handlePreview} className="preview-button">Preview</button>
            </div>
        </div>
    )
}