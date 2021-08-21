import { useDispatch } from 'react-redux';
import { Todo } from '../models/todos.interface';
import { removeTodo, toggleTodo } from './todoSlice';

const TodoItem = (props: Todo) => {
	console.log('props', props);
	const dispatch = useDispatch();

	const markAsCompleteHandler = () => {
		dispatch(toggleTodo(props.id))
	}

	const removeHandler = () => {
		dispatch(removeTodo(props.id));
	}

	return (
		<div>
			<li style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', margin: '10px' }}>
				{props.isCompleted ? 
					<p style={{textDecoration: 'line-through'}}>{props.text}</p>:
					 <p >{props.text}</p>}
				<button style={{marginLeft: '10px'}} onClick={markAsCompleteHandler}>Mark as {props.isCompleted ? 'Incomplete': 'Completed'} </button>
				<button style={{marginLeft: '10px'}} onClick={removeHandler}>Remove</button>
			</li>
		</div>
	)
}

export default TodoItem
