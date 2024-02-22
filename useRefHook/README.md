# UseRef Hook:
The useRef hook is a utility hook in React that provides a way to create mutable object called a ref. Unlike state, changes to a ref do not trigger a re-render of the component. useRef is often used to persist values across renders without causing the component to re-render.

**Key Differences between `useRef` and Direct Variables:**

- **Persistence:** `useRef` values (`myRef` and `numbr`) persist between re-renders because they're stored in a shared mutable object attached to the component. Direct variables (`ref` and `no`) are recreated with each render.
- **Re-renders:** Changes to `myRef.current` and `numbr.current` **do not** trigger re-renders, while changes to `ref` and `no` cause re-renders as they mutate directly within the render function.
- **Purpose:** `useRef` is primarily used for:
    - **Accessing DOM elements directly:** Using a ref in `ref={btnref}` to style the button.
    - **Storing mutable values that don't require re-renders:** Holding a unique random number in `myRef` even on state changes.
    - **Managing timers or subscriptions:** Not used in this example.
    - **Persisting data across renders:** Keeping track of previous input values or scroll positions (not used here).
```jsx
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

```
**Explanation of My Code:**

1. **Initial Setup:**
   - `useState` creates a state variable `count` for stateful updates.
   - `useRef` creates two ref objects:
     - `myRef` holds a random number generated once upon initial render.
     - `numbr` also holds a random number, but its value persists between renders.
   - `ref` and `no` are direct variables, recreated with each render.
2. **Incrementing Values:**
   - `no` is directly incremented, triggering a re-render (useless here).
   - `numbr.current` is incremented without causing a re-render (more efficient).
3. **Styling Button:**
   - `useEffect` uses the `btnref` ref to access the button element and change its background color. This happens after the initial render due to the effect's timing.
