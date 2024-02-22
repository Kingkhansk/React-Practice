import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // This will run after every render
    console.log('Effect ran!');

    // Cleanup function
    return () => {
      console.log('Cleanup function ran!');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App
