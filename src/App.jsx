import Popup from "./Components/popup/Popup"
import './App.css'
import { useState } from "react"

function App() {
  const [display, setDisplay] = useState(false);
  const [Mdisplay, setMDisplay] = useState(true);
  return (
    <>
      {Mdisplay && <div className="mainclass">
        <h1>Hello everyone</h1>
        <button onClick={() => { setDisplay(true), setMDisplay(false) }}>Click Me</button>
      </div>}

      {display && <Popup onClose={() => { setDisplay(false); setMDisplay(true) }} />}
    </>
  )
}


export default App
