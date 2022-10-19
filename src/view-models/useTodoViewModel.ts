
import {useSelector, useDispatch} from 'react-redux'
import { todoActions } from '../store/todoSlice';
import { StoreType, TodoStateType } from '../types/stateTypes';

const useTodoViewModel = () => {
    const dispatch = useDispatch();

    const {
        fetchingTodos,
        todos,

        creatingTodo,
        createTodoError,
        createTodoSuccess,

        updatingTodo,
        updateTodoError,
        updateTodoSuccess,

        deletingTodo,
        deleteTodoError,
        deleteTodoSuccess
    }: TodoStateType = useSelector((state: StoreType)=>state.todo)

    const {createTodo, updateTodo, deleteTodo} = todoActions;

    return {
        todos,
        fetchingTodos,

        createTodo: (title:string) => dispatch(createTodo({title})),
        creatingTodo,
        createTodoError,
        createTodoSuccess,

        updateTodo: (payload: {id:string, title:string}) => dispatch(updateTodo(payload)),
        updatingTodo,
        updateTodoError,
        updateTodoSuccess,

        deleteTodo: (id:string) => dispatch(deleteTodo({id})),
        deletingTodo,
        deleteTodoError,
        deleteTodoSuccess

    }
}

export default useTodoViewModel