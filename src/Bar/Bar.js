import 'react-native-get-random-values';
import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { v4 as uuidv4 } from 'uuid';

const Bar = ({ todos, setTodos }) => {
    const [text, setText] = React.useState("");

    const addTodo = () => {
        if (text) {
            setTodos({ id: uuidv4(), todo: text, isDone: false });
            setText("");
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput}
                value={text}
                onChangeText={setText}
            />

            <TouchableOpacity onPress={addTodo} style={styles.button} >
                <Text style={styles.buttonText} >Ekle</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Bar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#443D3D",
        padding: 10,
        marginBottom: 5,
        borderRadius: 8,
    },
    textInput: {
        borderColor: "#282424",
        borderBottomWidth: 1,
        fontSize: 14,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "orange",
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 17,
        color: "white",
        textAlign: "center",
    }
});