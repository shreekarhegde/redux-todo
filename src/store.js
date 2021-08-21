import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';

// import reducer from './components/reducers';
import todoSlice from './components/todoSlice';
export const store = configureStore({
	reducer: {
		todo: todoSlice,
	},
});

// export const store = createStore(reducer);

//Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
