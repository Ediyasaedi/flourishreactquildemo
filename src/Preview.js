import React from "react";
import { useTaskContext } from "./TaskProvider";
import parse from "html-react-parser";

export default function Preview() {
    const { contents } = useTaskContext();

    let generateContent = (contentStr) => {
        if (contentStr.includes("<blockquote>")) {
            let result = [];
            let arrStr = contentStr.split("<blockquote>");
            for (let i = 0; i < arrStr.length; i++) {
                if (i == 0) {
                    result.push(<div dangerouslySetInnerHTML={{ __html: arrStr[i] }}></div>)
                } else {
                    let temp = arrStr[i].split("</blockquote>");
                    result.push(<div dangerouslySetInnerHTML={{ __html: parse(temp[0]) }}></div>);
                    result.push(<div dangerouslySetInnerHTML={{ __html: temp[1] }}></div>);
                }
            }
            return (
                result
            )
        } else {
            return (
                <div dangerouslySetInnerHTML={{ __html: contentStr }}></div>
            )
        }
    }

    return (
        <>
            {
                generateContent(contents)

            }
        </>
    )
}