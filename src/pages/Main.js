import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import api from '../service/api';

import CheckBox from '../components/Checkbox';

function Main() {


    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');


    useEffect(() => {
        loadTasks()
    }, []);


    useEffect(() => {
        loadTasks()
    }, [tasks]);

    async function loadTasks() {
        const response = await api.get('/tasks');
        setTasks(response.data)
    }


    async function addTask() {
        if (newTask == '')
            return

        await api.post('/tasks', {
            content: newTask,
            done: false,
        });

        setNewTask('');
    };

    async function setCheck(task_id, checked) {
        await api.put(`/tasks/${task_id}`, {
            done: !checked
        })
    }

    async function removeTask(task_id) {
        await api.delete(`/tasks/${task_id}`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Digite uma task"
                    value={newTask}
                    onChangeText={setNewTask}
                    placeholderTextColor="#7159c1"
                />


                <TouchableOpacity style={styles.button} onPress={addTask}>
                    <Icon name="add" iconStyle={styles.buttonIcon} />
                </TouchableOpacity>

                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <CheckBox item={item} onCheckPress={setCheck} onButtonPress={removeTask} />}

                />


            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    input: {
        margin: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: '#7159c1',
        borderBottomColor: '#7159c1',
    },

    button: {
        position: 'absolute',
        top: 580,
        right: 10,
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#7159c1',
        zIndex: 1
    },

    buttonIcon: {
        color: '#fff',
        fontSize: 50,
        top: 25,
    },

})


export default Main;