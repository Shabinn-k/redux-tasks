import {createSlice} from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        items:[]
    },

    reducers:{
        addTodo:(state,action)=>{
            state.items.push({
                id:Date.now(),
                text:action.payload,
            })
        },
        deleteTodo:(state,action)=>{
            state.items=state.items.filter(
                todo=>todo.id!==action.payload
            )
        },
        editTodo:(state,action)=>{
          const {id,newText} =action.payload
          const todo=state.items.find(todo=>todo.id===id)
            if(todo){
                todo.text=newText;
            }
        }
    }
});


export const {
    addTodo,
    deleteTodo,
    editTodo
 }= todoSlice.actions;
export default todoSlice.reducer;