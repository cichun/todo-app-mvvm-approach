import {useState} from 'react';

import { TodoItemType } from "../types/genericTypes";
import {useNavigation} from '@react-navigation/native';
import useTodoViewModel from '../view-models/useTodoViewModel';

const useUpdateTodoViewController = (todo: TodoItemType) => {
    const navigation = useNavigation();

    const {updateTodo, updatingTodo, deleteTodo} = useTodoViewModel();
    const [todoText, setTodoText] = useState<string>(todo.title);

    const onChangeText = (text:string) => {
        setTodoText(text);
    }

    const onClickUpdate = () => {
        const payload = {
            id: todo.id,
            title: todoText
        }
        updateTodo(payload);
        navigation.goBack();
    }

    const onClickDelete = () =>{
        deleteTodo(todo.id)
        navigation.goBack();
    }

    return {
        todoText,
        onChangeText,
        onClickUpdate,
        onClickDelete,
        updatingTodo 
    }
}

export default useUpdateTodoViewController;