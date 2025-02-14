import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";
import Bar from "../Bar/Bar";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, todo: "alışveriş", isDone: false },
        { id: 2, todo: "spor", isDone: true }
    ]);

    const [count, setCount] = useState(todos.filter(todo => !todo.isDone).length);

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                const updatedTodo = { ...todo, isDone: !todo.isDone };
                setCount(count + (updatedTodo.isDone ? -1 : 1));
                return updatedTodo;
            }
            return todo;
        }));
    };

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
        setCount(count + 1);
    };

    const removeTodo = (id) => {
        const todoToRemove = todos.find(todo => todo.id === id);
        if (todoToRemove && !todoToRemove.isDone) {
            setCount(count - 1);
        }
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <View style={styles.container}>
            <View style={styles.countTitleContainer}>
                <Text style={styles.countTitle}>Yapılacaklar</Text>
                <Text style={styles.countTitle}>{count}</Text>
            </View>

            <View style={styles.TodoList}>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => <ListItem todos={item} toggleTodo={toggleTodo} removeTodo={removeTodo} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>

            <View>
                <Bar todos={todos} setTodos={addTodo} />
            </View>
        </View>
    );
}

export default TodoList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#282424",
        flex: 1,
        marginTop: 55,
        padding: 7,
    },
    countTitle: {
        fontSize: 35,
        color: "orange",
    },
    countTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    TodoList: {
        flex: 1
    },
});