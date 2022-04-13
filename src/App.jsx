import { useState } from 'react'
import { AddTask } from './components/AddTask';
import { Tasks } from './components/Tasks';
import { v4 as uuidv4} from 'uuid';

import './App.css'

function App() {

  const [ tasks, setTasks ] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Estudar React',
      completed: true,
    },
    {
      id: '3',
      title: 'Exercícios de JS',
      completed: false,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map( task => {
      if(task.id === taskId) return { ...task, completed: !task.completed }
      
      return task;
    });

    setTasks(newTasks)
  }
  
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, { // recriando o array de task adicionado as que já tem e a nova.
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTasks);
  } 

  return (
    <>
      <div className='container'>
        <h2>Minhas Tarefas</h2>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      </div>
    </>
  ) 
}

export default App
