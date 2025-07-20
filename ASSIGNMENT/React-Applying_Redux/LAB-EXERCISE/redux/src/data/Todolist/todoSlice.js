import { createSlice } from "@reduxjs/toolkit";

const initialState ={
        todos : ["Harsh","Harshad"]
}


export const todoSlice = createSlice({
    name : "todos",
    initialState,
    reducers :{
        addTodo : (state,action)=>{
            state.todos.push(action.payload)
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((data,index)=> index !== action.payload)
        },
        upadtetodo : (state,action)=>{
            state.todos = state.todos.filter((index,data)=> data === action.payload)
        }
    }
    
})

export const {addTodo,removeTodo,upadtetodo} = todoSlice.actions;

export default todoSlice.reducer;