import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import useTodoViewModel from '../view-models/useTodoViewModel';

const useNewTodoViewController = () => {
  const navigation = useNavigation();
  const [todoText, setTodoText] = useState<string>('');
  const {createTodo, creatingTodo} = useTodoViewModel();

  const onChangeText = (text: string) => {
    setTodoText(text);
  };

  const onClickCreate = () => {
    createTodo(todoText);
    navigation.goBack();
  };

  return {todoText, onChangeText, onClickCreate};
};

export default useNewTodoViewController;
