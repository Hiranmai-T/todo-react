import React, {useContext, useState, useEffect} from 'react';
import {TaskContext} from '../context/TaskContext';

const TaskForm = () => {
    const {addTask,clearTasks, editItem, editTask} = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editItem===null){
            addTask(title);
            setTitle('');
        }else{
            editTask(title,editItem.id);
            // setTitle('');
        }
        
    };

    const handleChange = (e) => {
        setTitle(e.target.value);
        
    };

    useEffect(()=>{
        if(editItem!==null){
            setTitle(editItem.title);
        }else{
            setTitle('');
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="row justify-content-center mb-3">
                <input onChange = {handleChange} value={title} className="col-4 ml-3 task-input" type="text" placeholder="Add Task" required/>
    
                <button type="submit" className="btn btn-success col-1 ml-1 add-btn">
                   {editItem? "Edit Task" : "Add Task"}
                </button>
                <button type="submit" onClick= {()=>clearTasks()} className="btn btn-danger col-1 ml-1 clear-btn">Clear</button>
            </div>
        </form>
    )
}

export default TaskForm
