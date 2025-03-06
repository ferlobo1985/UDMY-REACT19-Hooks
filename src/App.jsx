import { useState, useEffect } from 'react'

const App = () => {
  let [count,setCount] = useState(0);
  let [animal,setAnimal] = useState('dog');

  const addOne = () => setCount(count+1);
  const subtOne = () => setCount(count-1);
  const reset = () => setCount(0);

  const doSomething = () => {
    console.log('do something')
  }

  useEffect(()=>{
    console.log('run once')
  },[])


  useEffect(()=>{
    console.log(count)
  },[count])

  useEffect(()=>{
    console.log(animal)
  },[animal])

  return(
    <>
      <h3>Count:{count}</h3>
      <button onClick={addOne}>+1</button>
      <button onClick={subtOne}>-1</button>
      <button onClick={reset}>Set to cero</button>
      <hr/>
      <h3>{animal}</h3>
      <button onClick={()=>setAnimal('cat')}>
        Change animal
      </button>
    </>
  )
}

export default App;