import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Todo = {
    id: string, 
    title: string, 
    date: string,
    completed: boolean,
    description: string
}

type TodoState = {
    todos: Todo[], 
    loading: boolean, 
    error: string | null
}

const initialState: TodoState = {
    todos: [],
    loading: false, 
    error: null
}

const TodoSlice = createSlice({
    name: 'todos',
    initialState, 
    reducers: {
        addTask(state, actions: PayloadAction<string>) {
            state.todos.push({
                id: new Date().toISOString(),
                title: actions.payload,
                date: new Date().toDateString(),
                completed: false, 
                description: ''
            })
        },
        removeTask(state, actions: PayloadAction<string>) {
            state.todos = state.todos.filter(todo => todo.id !== actions.payload)
        },
        toggleTask(state, actions: PayloadAction<string>) {
            const toggler = state.todos.find(todo => todo.id === actions.payload)
            if (toggler) {
                toggler.completed = !toggler.completed
            }
        },
        updateDescript(state, actions) {
            const obj = actions.payload
            let upTodo = state.todos.find(todo => todo.id === obj.id)
            if (upTodo) {
                upTodo.description = obj.description
            }
        }

    }
})

export const {addTask, removeTask, toggleTask, updateDescript} = TodoSlice.actions

export default TodoSlice.reducer