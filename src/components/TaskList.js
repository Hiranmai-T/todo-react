import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks,clearComplete } = useContext(TaskContext);
  const [count, setCount] = useState(null);
  const [completeCount, setCompleteCount ] = useState(0);
  const [viewTasks, setViewTasks] = useState([]);

  useEffect(() => {
    const countTemp = tasks.filter((task) => task.status === false).length;
    const countTemp2 = tasks.filter((task) => task.status===true).length;
    setViewTasks(tasks);
    setCompleteCount(countTemp2);
    setCount(countTemp);
  }, [tasks]);
  
  

  const displayAll = () => {
     setViewTasks(tasks);
  };

  const displayActive = () => {
     const newTasks = tasks.filter((task) => task.status===false);
     setViewTasks(newTasks);
  };

  const displayCompleted = () => {
     const newTasks = tasks.filter((task) => task.status===true);
     setViewTasks(newTasks);
  };

  return (
    <div>
      {/*className="row justify-content-center" */}
      <div className="row justify-content-center">
        {" "}
        {/*className="col-12 col-md-7 paper" */}
        {/* {viewTasks.length===0 ? setViewTasks(tasks) : console.log("Non Empty")} */}
        {tasks.length ? (
          <>
            {/* <div className=""> */}
            <ul className="col-12 col-md-7 mx-auto list paper">
              {viewTasks.map((task) => {
                return <Task task={task} key={task.id} />;
              })}
              <li className="row justify-content-center dev">
                <div className="col-3">
                  {count > 0 ? (
                    <div className="row  justify-content-center">
                      <p className="font task-count">{count} task(s) left</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="col-5 my-auto">
                  <button className="btn banner-button" onClick = {()=> displayAll()}>All</button>
                  <button className="btn banner-button" onClick={()=>displayActive()}>Active</button>
                  <button className="btn banner-button" onClick={()=>displayCompleted()}>Completed</button>
                </div>
                <div className="col-4  my-auto">
                    {completeCount > 0 ? (
                        <button className="btn banner-button" onClick={()=>clearComplete()}>Clear Completed</button>
                    ) : (<></>)}
                </div>
              </li>
            </ul>
            {/* </div> */}
          
          </>
          
        ) : (
          <div className="row justify-content-center">
            <p className="font no-tasks">No tasks</p>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default TaskList;
