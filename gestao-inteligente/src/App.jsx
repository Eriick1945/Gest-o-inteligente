import { useState } from 'react'
import Taskform from './components/Taskform'
import TaskItens from './components/TaskItens'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

const adicionarTask = (Text) => {
  const novaTask = {
    id: crypto.randomUUID(),
    text,
    completed: false,
  };
  setTasks([novaTask,...tasks])
};

const alterarTask = (id) =>{
setTasks(tasks.map(task=>task.id=== id? {task,completed: !task.completed}: task));
};

const removerTask= (id) => {
  setTasks(task.filter(task=>task.id !== id));
};
return (
<div className='container'>
  <h1>Minhas tarefas</h1>
  <Taskform onAdd={addTask}/>
  <TaskList tasks={tasks} onToogle= {alterarTask} onremove={removerTask} />
  
</div>
);


 
}

export default App
