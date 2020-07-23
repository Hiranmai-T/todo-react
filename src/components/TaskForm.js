import React, {useContext, useState, useEffect} from 'react';
import {TaskContext} from '../context/TaskContext';

const TaskForm = () => {
    const {addTask, editItem, editTask} = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editItem===null){
            addTask(title);
            setTitle('');
        }else{
            console.log(title);
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
    
    // var input = document.getElementById("taskInput");
    //     input.addEventListener(("keyup"),function(event){
    //         if(event.keyCode===13){
    //         event.preventDefault();
    //         document.getElementById("addTask").click();
    //     }
    // });
    
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className="row justify-content-center">
                <div className="col-12 col-md-7 ">
                    <input onChange = {handleChange} value={title} id="taskInput" className="col-12 task-input font" type="text" placeholder="What needs to be done?" required/>
        
                    <button type="submit" id="addTask" className="btn btn-success add-btn font" >
                    {/* {editItem? "Edit Task" : "Add Task"}  col-12 col-md-1 ml-2 mb-1 */}
                    </button>
                    {/* <button type="submit" onClick= {()=>clearTasks()} className="btn btn-danger col-12 col-md-1 mb-1 clear-btn font">Clear</button> */}
                </div>
            </div>
        </form>
    )
}

export default TaskForm
