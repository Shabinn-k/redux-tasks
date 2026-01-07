import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from '../redux/todoSlice'

const Todo = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.todo.items)
  const [text, setText] = useState("")
  const [editId, setEditId] = useState(null)
  const addOrEdit = () => {
    if (!text.trim()) return
    if (editId) {
      dispatch(editTodo({ id: editId, newText: text }))
      setEditId(null)
    } else {
      dispatch(addTodo(text))
    }
    setText("")
  }
  return (
    <div>
      <h1>TO DO APP</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}
        placeholder='Enter...' />
      <button onClick={addOrEdit}>{editId ? "Update" : "Add"}</button>

      <ul>
        {items.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => { setEditId(todo.id); setText(todo.text) }}>Edit</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo