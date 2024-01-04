import { useState } from "react";

function MyButton({count, onClick}) {
  return(
    <button onClick={onClick}>
      Counter : {count}
    </button>
  );
}

export default function App() {
  const [count, setCounter] = useState(0);

  const addValue = ()=>{
    setCounter(count+1);
  }

  return(
    <>
      <MyButton count={count} onClick={addValue}/>
    </>
  );
}
