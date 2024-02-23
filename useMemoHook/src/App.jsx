import { useState,useMemo } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0);
  const excalc = ()=>{
    const num = new Array(20_000_000).fill(0).map((_,i)=>{return{
      index: i,
      isMagical: i === 19_000_000
    }
    });
    const magical =  num.find((n)=>n.isMagical); //expensive Calculation
    return magical.index
  }
  const momorized = useMemo(()=>excalc() , [])
  return (
    <>
      I am Magical {momorized}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
