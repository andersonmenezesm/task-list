import { useState } from 'react'
import './AddTask.css'
import { Button } from './Button'

export function AddTask({ handleTaskAddition }) {
  const [inputData, setInputData] = useState('') // inicializando estado do componente

  const handleInputChange = (e) => { // onChange propriedade que fica observando as mudanças
    setInputData(e.target.value); // valor do input que recebe as alterações
  }

  const handleAddTaskClick = () => { // é chamado quando o botão adicionar é clicado
    handleTaskAddition(inputData) // dispara o método para criar uma nova tarefa no App.jsx
    setInputData('') // quando add um nova tarefa limpa o input
  }

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  )
}