import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, StyleSheet ,Image} from 'react-native'
import Bugs from './Bugs';
import Projects from './Projects';
import Home from './Home';
import Settings from './Settings';

let bTab = createBottomTabNavigator();
export default MainBottomTab = () => {
    return (

        <bTab.Navigator initialRouteName='Home' screenOptions={{
             headerShown: false ,
             tabBarInactiveTintColor:'#FFFFFF80',
             tabBarActiveTintColor:'white',
             
             tabBarStyle:{backgroundColor:'#03A9F4',height:56,paddingBottom:6},
            //  tabBarActiveTintColor:''
             }}>
            <bTab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../images/Home.png')}
                        style={{
                            tintColor: focused ? 'white' : '#FFFFFF80', 
                            width: 24,
                            height: 24,
                        }}
                    />
                ),
            }} />
            <bTab.Screen name='Projects' component={Projects} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../images/1.png')}
                        style={{
                            tintColor: focused ? 'white' : '#FFFFFF80', 
                            width: 24,
                            height: 24,
                        }}
                    />
                ),
            }} />
            <bTab.Screen name='Bugs' component={Bugs} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../images/bugs.png')}
                        style={{
                            tintColor: focused ? 'white' : '#FFFFFF80', 
                            width: 24,
                            height: 24,
                        }}
                    />
                ),
            }} />
            <bTab.Screen name='Settings' component={Settings} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../images/setting.png')}
                        style={{
                            tintColor: focused ? 'white' : '#FFFFFF80', 
                            width: 24,
                            height: 24,
                        }}
                    />
                ),
            }}/>
        </bTab.Navigator>

    )
}

let styles = StyleSheet.create({
    container: {},
})