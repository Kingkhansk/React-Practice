# useState Hook in React

The `useState` hook is a fundamental part of React, allowing functional components to manage state. It is particularly useful for handling stateful logic in components without the need for class components.

## How to Use

### Import the Hook

```jsx
import { useState } from 'react';
```
### Declare State Variable
``` jsx
const [state, setState] = useState(0); 
```

- `state:` The current state value.
- `setState:` A function to update the state.
By default set to 0.
### Update State Variable
``` jsx
setState(21); 
//or
setState(state + 1); 
```