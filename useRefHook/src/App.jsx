import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myRef = useRef(Math.floor(Math.random() * 100));
  const ref = Math.floor(Math.random() * 100);
  
  let no = 3; // it become 3 every on every renders or state change 
  let numbr =  useRef(3); // persists between re-renders
  no++;
  numbr.current++;
  // changing element styles
  const btnref = useRef();
  useEffect(() => {
    btnref.current.style.backgroundColor = "maroon";
  })
  

  
  return (
    <>
      <p>i am random number with useRef <code>{myRef.current}</code> any state change will not effect me</p>
      <p>i am random number without useRef <code>{ref}</code></p>
      <p>i am with number without useRef <code>{no}</code></p>
      <p>i am number with useRef <code>{numbr.current}</code></p>
      <button onClick={() => setCount((count) => count + 1)} ref={btnref}>
        count is {count}
      </button>

    </>
  )
}

export default App
