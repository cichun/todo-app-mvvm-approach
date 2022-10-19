import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import UpdateTodoScreen from '../screens/UpdateTodoScreen';
import HomeTodoScreen from '../screens/HomeTodoScreen';

import {screenMap} from './screenMap';
import NewTodoScreen from '../screens/NewTodoScreen';

const AppContainer = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screenMap.HomeTodo}
          component={HomeTodoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenMap.UpdateTodo}
          component={UpdateTodoScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name={screenMap.NewTodo}
          component={NewTodoScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
