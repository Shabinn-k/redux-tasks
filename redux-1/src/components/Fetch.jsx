import React, { useEffect } from 'react'
import { fetchProducts } from '../redux3/titleSlice'
import { useSelector,useDispatch } from 'react-redux'

function Fetch() {
    const dispatch=useDispatch()
    const items=useSelector(state=>state.title.items)
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
  return (
    <div>
        {items.map((item,index)=>(
            <div key={index}>
                <h3>{item}</h3>
            </div>
        ))}
    </div>
  )
}

export default Fetch