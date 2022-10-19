
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#fff',
      paddingVertical: 8,
      paddingHorizontal: 8,
    },
    heading: {
      fontSize: 28,
      fontWeight: '500',
    },
    headingView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    btn: {
      padding: 8,
      borderRadius: 8,
      backgroundColor: '#e7e7e7',
    },
    btnText: {
      fontSize: 16,
      fontWeight: '400',
      paddingHorizontal: 8,
    },
    todoList: {
      marginVertical: 24,
    },
  });

  export default styles;