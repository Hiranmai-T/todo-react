import React from 'react';
import TaskListContextProvider from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header'
import './App.css';
// import CreateItem from './components/CreateItem';

function App() {
  return (
    <TaskListContextProvider>
        <div className="container">      
          <div className="main">  
            <Header />  
            <TaskForm />
            <TaskList />
            </div>  
        </div> 
          
       
          
      
    </TaskListContextProvider>
  );
}

export default App;
