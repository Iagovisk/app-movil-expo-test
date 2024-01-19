import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useSelector} from "react-redux";

function TasksList(){
    const tasks = useSelector(state => state.tasks);
    console.log(tasks);

    return(
        <View>
            <Text>TasksList</Text>
        </View>
    );
}

export default TasksList;