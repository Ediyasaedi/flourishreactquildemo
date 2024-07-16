import React, { useState, createContext, useContext, } from "react";
const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [contents, setContent] = useState("");
    const modifyContent = (newContent) => setContent(newContent);
    return (
        <TaskContext.Provider value={{contents, modifyContent}}>
            {children}
        </TaskContext.Provider>
    )
}

const useTaskContext = () => useContext(TaskContext);

export { TaskProvider, useTaskContext };