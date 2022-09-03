import { useState } from "react"
import "./styles.css"

export default function App() {
  const [message, setMessage] = useState("")
    const [number, setNumber] = useState(0)
    const [show, setShow] = useState(false)


  return (
    <div className="App">
      <h1>Hello Anastasia</h1>
      <h2>Hi zomg</h2>
      <Hello hi={"hello"} god={"mode"}/> <br/>
      <div>
        <button onClick={() => setMessage("Pressed button 1")}>Button1</button>
        <button onClick={() => setMessage("Pressed button 2")}>Button2</button>
      </div>
      <div >
        <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>Add 1</button>
        <button onClick={() => setNumber(prevNumber => prevNumber - 1)}>Substract 1</button>
      </div>
      
      <p>{message}</p>
      <p>{number}</p>
      <button onClick={() => setShow(prevShow => !prevShow)}>Toggle show</button>
      <Popup show={show}/>
    </div>
  )
}

const Hello = (props) => {
  return JSON.stringify(props, null, 2)
}

const Popup = ({ show }) => show && <p>Lol showing</p>