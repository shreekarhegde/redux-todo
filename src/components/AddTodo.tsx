import React from 'react';
import { useState } from "react";
import { Todo } from "../models/todos.interface";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, getAllTodos } from './todoSlice';
import { RootState } from '../store';

const AddTodo = () => {
	const dispatch = useDispatch();
	const [todoText, setTodoText] = useState('');
	const todos = useSelector((state: RootState) => state.todo.todos);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value);
	const submitHandler = (e:  React.FormEvent<HTMLFormElement>): void => {
		console.log('e', e);
		e.preventDefault();
		const todo: Todo = {
			text: todoText,
			id: Math.random().toString(),
			isCompleted: false
		}
		console.log('todo', todo);
		dispatch(getAllTodos(todos))
		dispatch(addTodo(todo));
	}
	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="addTodo">Add Todo</label>
			<input name="Add Todo" id="addTodo" onChange={handleChange}/>
			<input type="submit" />
		</form>
	)
}

export default AddTodo
