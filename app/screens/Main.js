import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, StyleSheet } from 'react-native'
import LogIn from './LogIn';
import MainBottomTab from './MainBottomTab';

let Stack =  createNativeStackNavigator();
export default Main  = () => {
return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='LogIn' component={LogIn}/>
            <Stack.Screen name='MAinBottomTab' component={MainBottomTab}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

let styles = StyleSheet.create({
    container:{flex:1,
    justifyContent:'center',
alignItems:'center'},
})