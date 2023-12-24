import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Task from '../screens/Task';
import SingleTask from '../screens/SingleTask';
import Teams from '../screens/Teams';
import CreateTeams from '../screens/CreateTeams';
import Profile from '../screens/Profile';
import CreateTask from '../screens/CreateTask';

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="CreateTask" component={CreateTask} />
                <Stack.Screen name="Task" component={Task} />
                <Stack.Screen name="SingleTask" component={SingleTask} />
                <Stack.Screen name="Teams" component={Teams} />
                <Stack.Screen name="CreateTeams" component={CreateTeams} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;