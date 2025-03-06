import { useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0);

  const addOne = () => setCount(count+1);
  const subtOne = () => setCount(count-1);
  const reset = () => setCount(0);

  return(
    <>
      <h3>Count:{count}</h3>
      <button onClick={addOne}>+1</button>
      <button onClick={subtOne}>-1</button>
      <button onClick={reset}>Set to cero</button>
    </>
  )
}

export default App;