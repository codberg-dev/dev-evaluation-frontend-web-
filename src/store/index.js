import { configureStore, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    currentMode : "",
    todo: [
        // {title: "example", content: "example content"}
    ]
}

const toDoManager = createSlice({
    name: 'manager', initialState, reducers: {
        setCurrentMode(state, action){
            state.currentMode = action.payload
        },
        addSchedule(state, action) {
            state.todo = [...state.todo, action.payload]
        },
        delSchedule(state, action){
            state.todo = action.payload
            // const index = state.todo.findIndex((t) => t.id === action.payload)
            // state.todo.splice(index, 1)
            
        },
        modSchedule(state, action){
            state.todo = action.payload
        }
    } 
})

export const { authReducer, setCurrentMode, addSchedule, delSchedule, modSchedule } = toDoManager.actions;

export default configureStore({
    reducer: {
        toDoManager: toDoManager.reducer
    }
})