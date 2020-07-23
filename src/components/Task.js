import React,{useContext,useState,useEffect} from 'react';
import {TaskContext} from '../context/TaskContext';
import { Card, CardBody } from 'reactstrap';

const Task = ({task}) => {
    const {removeTask, findItem,modifyStatus} = useContext(TaskContext);
    const [style, setStyle] = useState('none');
    const [op,setOp] = useState(1);
    const [status, setStatus] = useState(task.status);
    const [color,setColor] = useState('white');

    useEffect(()=>{
        if(status){
            setOp(0.3);
            setStyle('line-through');
            setColor('rgba(175, 47, 47, 0.45)');
        }else{
            setOp(1);
            setStyle('none');
            setColor('white');
        }
    },[status]);

    const handleChange = () => {
        modifyStatus(task.id);
        const temp = !status;
        
        setStatus(temp);
        // if(temp){
        //     // console.log("Test");
        //     setOp(0.3);
        //     setStyle('line-through');
        // }else{
        //     setOp(1);
        //     setStyle('none');
        // }
    };
    
    return (
        <li>
            {/*   */}
            <div className="row  justify-content-center">  
            {/*   */}
            <div className="col-12 task-row">
                <Card className="box-shadow-hover pointer">
                    <CardBody>
                        
                        <div className="row ">
                            
                            <div className="col-12 col-md-7">
                                
                                    <input  name="status" type = "checkbox" onChange={handleChange} style={{backgroundColor:color}}className="mr-3 my-auto checkbox-round"
                                    />
                                
                                    <span style={{textDecoration:style,opacity:op}} className="font task-title">{task.title}</span>
                                
                            </div>
                        
                    
                    
                            <div className="col-12 col-md-2">
                                <div className="row">
                                <div className="col-2 col-md-1">
                                {
                                    (!status)?(
                                        <button onClick = {() => findItem(task.id)} className="btn btn-edit">
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                    ) : <></>
                                
                                }
                                </div>
                                <div className="col-2 col-md-1">
                                    <button onClick = {() => removeTask(task.id)} className="btn btn-delete">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                                </div>
                            </div>
                            
                        </div>    
                        
                    </CardBody>
                </Card>
            </div>
            </div> 
        </li>
    )
}

export default Task
