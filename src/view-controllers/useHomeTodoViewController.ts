import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {TodoItemType} from '../types/genericTypes';
import useTodoViewModel from '../view-models/useTodoViewModel';

import {screenMap} from '../navigation/screenMap';

const useHomeTodoViewController = () => {
  const navigation = useNavigation();
  const {todos, fetchingTodos} = useTodoViewModel();

  const onPressTodoItem = (todoItem: TodoItemType) => {
    navigation.navigate(screenMap.UpdateTodo, {todoItem});
  };

  const onPressCreate = () => {
    navigation.navigate(screenMap.NewTodo);
  };

  return {
    todos,
    fetchingTodos,
    onPressTodoItem,
    onPressCreate,
  };
};

export default useHomeTodoViewController;