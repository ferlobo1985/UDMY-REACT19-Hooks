import { useState, useEffect } from 'react'
import BlocksComponent from './blocks';

const UseEffectComponent = () => {
  let [count,setCount] = useState(0);
  let [animal,setAnimal] = useState('dog');
  let [block,setBlock] = useState(false);

  const addOne = () => setCount(count+1);
  const subtOne = () => setCount(count-1);
  const reset = () => setCount(0);

  const doSomething = () => {
    console.log('do something')
  }

  // useEffect(()=>{
  //   console.log('run once')
  // },[])


  useEffect(()=>{
    console.log(count)

    return ()=>{
      console.log('Use effect count')
    }
  },[count])

  // useEffect(()=>{
  //   console.log(animal)
  // },[animal])

  return(
    <>
      <h3>Count:{count}</h3>
      <button onClick={addOne}>+1</button>
      <button onClick={subtOne}>-1</button>
      <button onClick={reset}>Set to cero</button>
      {/* <hr/>
      <h3>{animal}</h3>
      <button onClick={()=>setAnimal('cat')}>
        Change animal
      </button> */}
      {/* <hr/>
      { block ?
        <BlocksComponent/>
        :null  
      }
      <button onClick={()=> setBlock(!block)}>Block</button> */}
    </>
  )
}

export default UseEffectComponent;