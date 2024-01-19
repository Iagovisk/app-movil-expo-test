import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import { addTask } from "../features/task/taskSlices";

function generateUUID() {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

const SettingsScreen = () => {

    const dispatch = useDispatch();

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    const handleChange = (value, fieldName) => {
        setTask({
            ...task,
            [fieldName]: value
        });
    }

    const handleSubmit = () => {
        dispatch(addTask({
            ...task,
            id: generateUUID(),
        }));
    }

    return(
        <View>
            <Text style={styles.title}>
                Crear Tarea
            </Text>

            <View style={styles.form}>
                <TextInput name='title' style={styles.input} placeholder='Titulo...' onChangeText={(value) => handleChange(value, 'title')}/>
                <TextInput name='description' style={styles.input} placeholder='Descripcion...' onChangeText={(value) => handleChange(value, 'description')}/>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Crear</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
    },
    form:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'    
    },
    input:{
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    button:{
        backgroundColor: 'cyan',
        padding: 10,
        borderRadius: 10,
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        color: 'white'
    },
});

export default SettingsScreen;