import React from 'react'
import { increment,decrement,reset } from '../redux2/counterSlice'
import { useDispatch,useSelector } from 'react-redux'
const Counter = () => {
    const dispatch=useDispatch()
    const count=useSelector(state=>state.counter.value)
    const handleMinus=()=>{
        if(count<=0)return 0;
        dispatch(decrement())
    }
  return (
    <div>
        <h1>Counter</h1>
        <h3>{count}</h3>
        <button onClick={()=>dispatch(increment())}>Add</button>
        <button onClick={handleMinus}>Minus</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter