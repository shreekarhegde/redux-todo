import { createSlice } from '@reduxjs/toolkit';
import { Todo, Todos } from '../models/todos.interface';

const initialState: Todos = {
	todos: [],
	original: [],
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo: Todo = action.payload;
			console.log('todo', todo);
			state.original.push(todo);
			state.todos.push(todo);
		},
		removeTodo: (state, action) => {
			state.original = state.todos = state.original.filter((todo) => todo.id !== action.payload);
			console.log('state remove', state.todos);
		},
		toggleTodo: (state, action) => {
			state.original = state.todos = state.original.map((todo) =>
				todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
			);
		},
		getAllTodos: (state, action) => {
			state.todos = state.original.slice();
			console.log('state after get all', state.todos);
		},
		getCompletedTodos: (state, action) => {
			state.todos = state.original.filter((todo: Todo) => todo.isCompleted);
		},
		getPendingTodos: (state, action) => {
			state.todos = state.original.filter((todo: Todo) => !todo.isCompleted);
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, toggleTodo, getCompletedTodos, getAllTodos, getPendingTodos } = todoSlice.actions;

export default todoSlice.reducer;
