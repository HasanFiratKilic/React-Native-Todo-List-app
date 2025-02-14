import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = ({ todos, toggleTodo, removeTodo }) => {
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => toggleTodo(todos.id)}
            onLongPress={() => removeTodo(todos.id)}
        >
            <Text style={[styles.todoText, todos.isDone && styles.todoTextDone]}>
                {todos.todo}
            </Text>
        </TouchableOpacity>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 8,
        margin: 5,
    },
    todoText: {
        fontSize: 18,
        color: "white",
    },
    todoTextDone: {
        textDecorationLine: "line-through",
        color: "gray",
    }
});