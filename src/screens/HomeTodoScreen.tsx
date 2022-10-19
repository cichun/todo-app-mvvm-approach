import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import {TodoItem} from '../components';
import useHomeTodoController from '../view-controllers/useHomeTodoViewController';
import {TodoItemType} from '../types/genericTypes';

import styles from './HomeTodoScreen.styles';

const HomeTodoScreen = () => {
  const {todos, onPressTodoItem, onPressCreate} = useHomeTodoController();

  const renderTodoList = ({item}: {item: TodoItemType}) => {
    return (
      <TodoItem title={item.title} onPress={() => onPressTodoItem(item)} />
    );
  };

  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Todo</Text>
        <TouchableOpacity style={styles.btn} onPress={onPressCreate}>
          <Text style={styles.btnText}>Create</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todoList}>
        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={renderTodoList}
        />
      </View>
    </View>
  );
};

export default HomeTodoScreen;
