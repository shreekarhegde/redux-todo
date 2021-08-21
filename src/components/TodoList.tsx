import TodoItem from './TodoItem'
import { useSelector } from 'react-redux';
import { RootState } from '../store';	
import { Todo } from '../models/todos.interface';
const TodoList = () => {
	const todos = useSelector((state: RootState) =>  state.todo.todos);
	return (
		<div>
			{
				<ul>		
				{
					todos.map((todo:Todo)  => {	
						return <TodoItem key={todo.id} id={todo.id} isCompleted={todo.isCompleted} text={todo.text} />
					})
				}
				</ul>
			}
		</div>
	)
}

export default TodoList
