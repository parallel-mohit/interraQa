import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text, StyleSheet } from 'react-native'
import Overview from './Overview'

import Bug from'./Bug'
import TestCycle from './TestCycle';
let Tab = createMaterialTopTabNavigator();
export default ProjectContainer  = () => {
return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:'#03A9F4',
        tabBarInactiveTintColor:'black',
        tabBarIndicatorStyle:{backgroundColor:'#03A9F4'},
        tabBarStyle:{backgroundColor:'#FAFAFA'}
        }}>
            <Tab.Screen name='Overview' component={Overview}/>
            <Tab.Screen name='TestCycle' component={TestCycle}/>
            <Tab.Screen name='Bugs' component={Bug}/>
    </Tab.Navigator>
        
   
    )
}

let styles = StyleSheet.create({
    container:{},
})