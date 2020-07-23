import React,{useContext,useState} from 'react';
import {TaskContext} from '../context/TaskContext';
import { Card, CardBody, CardText } from 'reactstrap';

const Task = ({task}) => {
    const {removeTask, findItem,modifyStatus} = useContext(TaskContext);
    const [style, setStyle] = useState('none');
    const [status, setStatus] = useState(false);
    const handleChange = () => {
        modifyStatus(task.id);
        const temp = !status;
        setStatus(temp);
        if(temp){
            // console.log("Test");
            setStyle('line-through');
        }else{
            setStyle('none');
        }
    };
    return (
        <li>
            {/*  justify-content-center */}
            <div className="row justify-content-center">  

            <div className="col-12 col-md-7 ml-1 mr-1">
                <Card className="box-shadow-hover pointer">
                    <CardBody>
                        
                        <div className="row ">
                            
                            <div className="col-12 col-md-8">
                                
                                    <input  name="status" type = "checkbox" onChange={handleChange} className="mr-3 checkbox-round"
                                    />
                                
                                    <span style={{textDecoration:style}} className="font task-title">{task.title}</span>
                                
                            </div>
                        
                    
                    
                            <div className="col-12 col-md-3 offset-1">
                                <div className="row">
                                <div className="col-12 col-md-1">
                                {
                                    (!status)?(
                                        <button onClick = {() => findItem(task.id)} className="btn btn-edit">
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                    ) : <></>
                                
                                }
                                </div>
                                <div className="col-12 col-md-1">
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
