export interface Todo {
	text: string;
	id: string;
	isCompleted: boolean;
}

export interface Todos {
	todos: Todo[];
	original: Todo[];
}
