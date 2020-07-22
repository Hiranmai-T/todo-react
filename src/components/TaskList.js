import React,{useContext} from 'react';
import {TaskContext} from '../context/TaskContext';
import Task from './Task';

const TaskList = () => {
    const {tasks} = useContext(TaskContext);
    return(
        
        <div>
            {tasks.length ? (
                <ul className="list ">
                    {tasks.map(
                        (task) => {
                            return(
                                <Task task = {task} key={task.id}/>
                            )
                        }
                    )}
                </ul>
            ) : (
                <div className="row justify-content-center">
                <p>No tasks</p>
                </div>
            )}
        </div>
       
        
    );
};

export default TaskList;