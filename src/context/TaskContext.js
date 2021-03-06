import React,{createContext,useState,useEffect} from 'react';
import {v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    console.log(localStorage.getItem('tasks'));
    var initialState = [];
    if(JSON.parse(localStorage.getItem('tasks')) && JSON.parse(localStorage.getItem('tasks')).length>0){
        initialState = JSON.parse(localStorage.getItem('tasks'));
    }else{
        initialState = [{title:"Your first task!",id:uuidv4(),status:false}];
    }
    
    const [tasks,setTasks]  = useState(initialState);

    const [editItem, setEditItem ] = useState(null);

    useEffect(() => {
        localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks]);

    const addTask = (title) =>{
        setTasks([...tasks,{title,id:uuidv4(),status:false}]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task)=> task.id!==id));
    };

    const clearTasks = () => {
        setTasks([]);
    };

    const findItem = (id) => {
        const item = tasks.find((task) => task.id===id);
        console.log("Hello");
        setEditItem(item);
    };

    const editTask = (title,id) => {
        const newTasks = tasks.map((task) => (task.id===id)? {title,id,status:false} : task );
        setTasks(newTasks);
        setEditItem(null);
    };

    const modifyStatus = (id) => {
        const newTasks = tasks.map((task) => (task.id===id)? {title:task.title,id,status:!task.status} : task);
        setTasks(newTasks);
    };

    const clearComplete = () => {
        const newTasks = tasks.filter((task) => task.status===false);
        setTasks(newTasks)
    }

    return(
        <TaskContext.Provider value={{
            tasks, 
            addTask, 
            removeTask, 
            clearTasks, 
            findItem, 
            editTask, 
            editItem,
            modifyStatus,
            clearComplete
            }}>

            {props.children}

        </TaskContext.Provider>
    );
};

export default TaskContextProvider;