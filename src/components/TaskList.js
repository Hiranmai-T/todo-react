import React,{useContext,useEffect,useState} from 'react';
import {TaskContext} from '../context/TaskContext';
import Task from './Task';

const TaskList = () => {
    const {tasks} = useContext(TaskContext);
    const [count, setCount] = useState(null);
    useEffect(()=>{
        const countTemp = tasks.filter((task)=>task.status===false).length;
        setCount(countTemp);
    },[tasks]);
    return(
        <div>
            <div className="paper">
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
                    <p className="font">No tasks</p>
                    </div>
                )}
            </div>
            {/* <div className="row justify-content-center">
                <div className="paper">
                   <p>Hi</p>
                </div>
            </div> */}
            <div className="row justify-content-center"> 
                <p className="font">You have {count} active task(s) to complete</p>
            </div>
       </div>
        
    );
};

export default TaskList;