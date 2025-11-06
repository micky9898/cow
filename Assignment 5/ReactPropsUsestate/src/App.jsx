import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayMyName from './Component.jsx'
import Card from './components/card.jsx'

function PrintProps(prop){
  return <h1 style={{color:"red"}}>My name is {prop.name} {prop.age} using props</h1>
}

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('username')

  const surname = "userLastname"
  

  return (
    <>
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       <h1>Name is {name} {surname}</h1>
       <button>New </button>
      
      <DisplayMyName />
      <Card />
      <PrintProps name="nameofuser" surname="surnameofuser" age={20} />
      </div>
          <button onClick={() => setCount((count) => count + 1)}>increment</button>
        <button onClick={() => setCount((count) => count - 1)}>decrement</button>
          count is {count}
    </>
  )
}

export default App
