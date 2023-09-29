import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import LogIn from './LogIn';
import MainBottomTab from './MainBottomTab';
import ProjectContainer from './ProjectContainer';
import Projects from './Projects';
import TestCycle from './TestCycle';
import ViewBugDetail from './ViewBugDetail';
import EditBugsDetail from './EditBugsDetail';
import { BackHandler } from 'react-native';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

let Stack = createNativeStackNavigator();
export default Main = () => {
    let Icon =  require('../images/angle-left.png') 
   

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
                headerBackImageSource:Icon,
                headerTintColor:'#03A9F4',
                headerStyle: {},
                headerLeft: () => (
                    <Text style={{ color: '#03A9F4', fontSize: 18, }}>Project Title</Text>
                ),

            }} />
            {/* <Stack.Screen name='TestCycle' component={TestCycle} /> */}
            <Stack.Screen name='View Test Cycles Details' component={ViewTestCycleDetails} options={{

                headerShadowVisible: false,
                headerBackImageSource:Icon,
                headerTintColor:'#03A9F4',

                headerStyle: {},
                headerLeft: () => (
                    <Text style={{ color: '#03A9F4', fontSize: 18, }}>Project Title</Text>
                ),
                headerRight: () => <View></View>

            }} />

            <Stack.Screen name='Test Case Id' component={TestCaseId} options={{

                headerShadowVisible: false,
                headerBackImageSource:Icon,
                headerTintColor:'#03A9F4',
                headerStyle: {},
                headerLeft: () => (
                    <Text style={{ color: '#03A9F4', fontSize: 18, }}>Project Title</Text>
                ),
                headerRight: () => <View></View>

            }} />

            <Stack.Screen name='View Bug Details' component={ViewBugDetail} options={{

                headerShadowVisible: false,
                headerBackImageSource:Icon,
                headerTintColor: '#03A9F4',

                headerBackVisible: true,

                headerStyle: {},
                headerLeft: () => (
                    <View style={{ flexDirection: 'row' }}>
                        {/* <TouchableOpacity onPress={BackHandler}> */}
                        {/* 
                            <Image source={require('../images/back.png')}

                                style={{ width: 14, height: 20, tintColor: '#03A9F4' }} /> */}
                        {/* </TouchableOpacity> */}
                        <Text style={{ color: '#03A9F4', fontSize: 18, }}>View Bug Details</Text>
                    </View>
                ),
                headerRight: () => <View></View>

            }} />

            <Stack.Screen name='Edit Bugs Details' component={EditBugsDetail} options={{

                headerShadowVisible: false,
                headerBackImageSource: Icon ,
                headerTintColor:'#03A9F4',
                headerStyle: {},
                headerLeft: () => (
                    <Text style={{ color: '#03A9F4', fontSize: 18, }}>Edit Bugs Details</Text>
                ),
                headerRight: () => <View></View>

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