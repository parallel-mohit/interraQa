import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import LogIn from './LogIn';
import MainBottomTab from './MainBottomTab';
import ProjectContainer from './ProjectContainer';

let Stack = createNativeStackNavigator();
export default Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitle: '', headerLeft: () => (
                    <Image source={require('../images/QA-Logo.png')} style={{
                        width: 52.73,
                        height: 30,
                    }} />
                ),
                headerRight: () => (
                    <TouchableOpacity>
                        <Image source={require('../images/Search.png')} style={{
                            width: 24,
                            height: 24,
                        }} /></TouchableOpacity>
                )
            }}>
                <Stack.Screen name='LogIn' component={LogIn} options={{ headerShown: false }} />
                <Stack.Screen name='MAinBottomTab' component={MainBottomTab} />
                <Stack.Screen name='projectContainer' component={ProjectContainer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})