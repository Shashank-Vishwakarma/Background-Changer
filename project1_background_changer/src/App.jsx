import { useState } from "react"

function App() {
  const [color, setColor] = useState("#fff");

  return(
    <>
      <div className="container" style={{backgroundColor: color}}>
        <div className="btnContainer">
          <button className="btn" style={{backgroundColor: 'red', color: 'white'}} onClick={()=>setColor('red')}>Red</button>
          <button className="btn" style={{backgroundColor: 'blue', color: 'white'}} onClick={()=>setColor('blue')}>Blue</button>
          <button className="btn" style={{backgroundColor: 'green', color: 'white'}} onClick={()=>setColor('green')}>Green</button>
        </div>
      </div>
    </>
  )
}

export default App