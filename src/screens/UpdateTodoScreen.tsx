import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {TodoItemType} from '../types/genericTypes';
import useUpdateTodoViewController from '../view-controllers/useUpdateTodoViewController';

import styles from './UpdateTodoScreen.styles';

interface UpdateTodoScreenProps {
  route: {params: {todoItem: TodoItemType}};
}

const UpdateTodoScreen = (props: UpdateTodoScreenProps) => {
  const {todoItem} = props.route.params;

  const {todoText, onChangeText, onClickDelete, onClickUpdate} =
    useUpdateTodoViewController(todoItem);

  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Todo</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={todoText}
          style={styles.input}
          onChangeText={(text: string) => onChangeText(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={() => onClickUpdate()}>
          <Text style={styles.btn}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => onClickDelete()}>
          <Text style={styles.btn}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateTodoScreen;
