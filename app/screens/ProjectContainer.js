import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text, StyleSheet } from 'react-native'
import Overview from './Overview'
import TestCycle from './TextCycle'
let Tab = createMaterialTopTabNavigator();
export default ProjectContainer  = () => {
return (
    <Tab.Navigator>
            <Tab.Screen name='Overview' component={Overview}/>
            
            <Tab.Screen name='Test Cycles' component={TestCycle}/>
    </Tab.Navigator>
        
   
    )
}

let styles = StyleSheet.create({
    container:{},
})