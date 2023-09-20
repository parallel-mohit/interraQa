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

        <bTab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false ,tabBarStyle:{backgroundColor:'#03A9F4'}}}>
            <bTab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../images/Home.png')}
                        style={{
                            tintColor: focused ? 'red' : 'black', 
                            width: 24,
                            height: 24,
                        }}
                    />
                ),
            }} />
            <bTab.Screen name='Projects' component={Projects} />
            <bTab.Screen name='Bugs' component={Bugs} />
            <bTab.Screen name='Settings' component={Settings} />
        </bTab.Navigator>

    )
}

let styles = StyleSheet.create({
    container: {},
})