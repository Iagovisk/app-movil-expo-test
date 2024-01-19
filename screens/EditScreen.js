import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { editTask } from "../features/task/taskSlices";
import { useNavigation } from "@react-navigation/native";

const EditScreen = () => {

    const route = useRoute();
    const dispatch = useDispatch();
    const taskId = route.params.id;
    const tasks = useSelector(state => state.tasks.find(t => t.id === taskId));
    const [task, setTask] = useState({
        title: '',
        description: ''
    });
    const navigation = useNavigation();

    useEffect(() => {
        setTask(tasks);
    }, [tasks]);

    const handleChange = (value, fieldName) => {
        setTask({
            ...task,
            [fieldName]: value
        });
    }

    const handleSubmit = () => {
        
        dispatch(editTask(task));
        navigation.navigate('Home');
    }

    return(
        <View>
            <Text style={styles.title}>
                Editar tarea
            </Text>

            <View style={styles.form}>
                <TextInput name='title' style={styles.input} placeholder='Titulo...' onChangeText={(value) => handleChange(value, 'title')} value={task.title}/>
                <TextInput name='description' style={styles.input} placeholder='Descripcion...' onChangeText={(value) => handleChange(value, 'description')} value={task.description}/>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Editar tarea</Text>
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

export default EditScreen;