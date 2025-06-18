import React from 'react'
import Clickbtn from './Task5/Clickbtn'
import Form from './Task5/Form'
import Hook1 from './Hooks/Hook1'
import Hook2 from './Hooks/Hook2'
import Task1 from './ListsAndKeys/Task1'
import Task2 from './ListsAndKeys/Task2'

function App() {
  return (
    <div>
      {/* Task-5 */}
      <Clickbtn />
      <Form />

      {/* Hooks */}
      <Hook1 />
      <Hook2 />

      {/* Listsand Keys */}
      <Task1 />
      <Task2 />
    </div>
  )
}

export default App