import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import LogIn from './LogIn';
import MainBottomTab from './MainBottomTab';
import ProjectContainer from './ProjectContainer';
import Projects from './Projects';
import TestCycle from './TestCycle';

let Stack = createNativeStackNavigator();
export default Main = () => {
    let Icon =

        <Image source={require('../images/back.png')} style={{ width: 12, height: 10 }} />
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
                <Stack.Screen name='MAinBottomTab' component={MainBottomTab} options={{
                    headerTitle: '', headerLeft: () => (
                        <Image source={require('../images/QA-Logo.png')} style={{
                            width: 52.73,
                            height: 30,
                        }} />),
                    headerRight: () => (
                        <TouchableOpacity>
                            <Image source={require('../images/Search.png')} style={{
                                width: 24,
                                height: 24,
                            }} /></TouchableOpacity>
                    )
                }} />
                <Stack.Screen name='Projects' component={Projects} />
                <Stack.Screen name='ProjectContainer' component={ProjectContainer} options={{
                    
                    headerShadowVisible: false,
                    headerBackImageSource: () => (<Icon width={12} height={10} />),

                    headerStyle: {},
                    headerLeft: () => (
                        <Text style={{ color: '#03A9F4', fontSize: 18, }}>Project Title</Text>
                    ),
                    
                }} />
                {/* <Stack.Screen name='TestCycle' component={TestCycle} /> */}
                <Stack.Screen name='View Test Cycles Details' component={ViewTestCycleDetails} options={{

                    headerShadowVisible: false,
                    headerBackImageSource: () => (<Icon width={12} height={10} />),

                    headerStyle: {},
                    headerLeft: () => (
                        <Text style={{ color: '#03A9F4', fontSize: 18, }}>Project Title</Text>
                    ),
                    headerRight:()=><View></View>

                }} />

                <Stack.Screen name='Test Case Id' component={TestCaseId} options={{

                    headerShadowVisible: false,
                    headerBackImageSource: () => (<Icon width={12} height={10} />),

                    headerStyle: {},
                    headerLeft: () => (
                        <Text style={{ color: '#03A9F4', fontSize: 18, }}>Project Title</Text>
                    ),
                   headerRight:()=><View></View>

                }} />

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