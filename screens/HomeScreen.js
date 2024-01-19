import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import { deleteTask } from "../features/task/taskSlices";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    }

    const handleEdit = (id) => {
        navigation.navigate('EditScreen', {id});
    }


    return(
        <View>
            <Text style={styles.title}>
                Tareas
            </Text>
            <View style={styles.backgroundList}>
                {tasks.map(task =>(
                    <View key={task.id}>
                        <Text>{task.title}</Text>
                        <Text>{task.description}</Text>
                        <TouchableOpacity style={styles.button} onPress={() =>handleDelete(task.id)}>
                            <Text>Eliminar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonEdit} onPress={() =>handleEdit(task.id)}>
                            <Text>Editar</Text>
                        </TouchableOpacity>
                    </View>
                ))}
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
    backgroundList:{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        elevation: 5
    },
    button:{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        color: 'white',
        textAlign: 'center'
    },
    buttonEdit:{
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        color: 'white',
        textAlign: 'center'
    }
});

export default HomeScreen;

