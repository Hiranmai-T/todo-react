import React,{useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

const Task = ({task}) => {
    const {removeTask, findItem} = useContext(TaskContext);
    return (
        <li>
            <div className="row justify-content-center">
                <span className="col-4 m-2">{task.title}</span>
                <div >
                    <button onClick = {() => removeTask(task.id)} className="btn btn-delete task-btn col-2">
                        <i className="fa fa-trash"></i>
                    </button>
                    <button onClick = {() => findItem(task.id)} className="btn btn-edit task-btn col-2">
                        <i className="fa fa-pencil"></i>
                    </button>
                </div>
            </div>
            
        </li>
    )
}

export default Task
