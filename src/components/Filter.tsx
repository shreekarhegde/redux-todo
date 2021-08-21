import { useDispatch } from 'react-redux';
import { RootState } from '../store';
import { getCompletedTodos, getAllTodos, getPendingTodos } from './todoSlice';
import { useSelector } from 'react-redux';

const Filter = () => {

	const dispatch = useDispatch();
	const todos = useSelector((state: RootState) => state.todo.todos);

	console.log('todos: filter', todos);
	const copy = [...todos];
	console.log('copy: filter', copy);

	const getAllHandler = () => {
		console.log('clicked get all')
		dispatch(getAllTodos(copy))
	};

	const getCompletedHandler = () => {
		console.log('clicked getCompletedHandler')
		dispatch(getCompletedTodos(copy))
	}

	const getPendingHandler = () => {
		console.log('clicked getPendingHandler', copy);
		dispatch(getPendingTodos(copy))
	}

	return (
		<div>
			<button onClick={getAllHandler}>All</button>
			<button onClick={getCompletedHandler}>Completed</button>
			<button onClick={getPendingHandler}>Pending</button>
		</div>
	)
}

export default Filter
