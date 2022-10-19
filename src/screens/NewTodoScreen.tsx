import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './UpdateTodoScreen.styles';
import useNewTodoViewController from '../view-controllers/useNewTodoViewController';

const NewTodoScreen = () => {
  const {todoText, onChangeText, onClickCreate} = useNewTodoViewController();

  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Todo </Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={todoText}
          style={styles.input}
          placeholder="Enter new todo here"
          onChangeText={(text: string) => onChangeText(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={onClickCreate}>
          <Text style={styles.btnText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewTodoScreen;
