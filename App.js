import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './src/TodoList/TodoList';

export default function App() {
  return (
    <View style={style.container}>
      <TodoList/>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
   
  }
});
