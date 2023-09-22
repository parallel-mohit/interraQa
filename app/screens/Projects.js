import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, FlatList, Button, ScrollView } from 'react-native'
import ProjectContainer from './ProjectContainer'

export default Projects = (props) => {
   
    let users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    let handleProjectlst = () => {
        props.navigation.navigate('ProjectContainer')
    }
    return (
        <ScrollView >
            <View style={styles.container}>
                
                <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image source={require('../images/Filter.png')}
                                style={{
                                    width: 22,
                                    height: 22,

                                }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.filterTxt}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList data={users}
                        scrollEnabled={false}
                        renderItem={({ item }) => <TouchableOpacity style={styles.list} onPress={()=>handleProjectlst()}>
                            <View style={{ marginHorizontal: 10, paddingVertical: 20 }}>
                                <Text style={{
                                    fontSize: 16,
                                }}>PROJECT NAME</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10
                            }}>
                                <Text>CLIENT</Text>
                                <Text>CURRENT RELEASE</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 5
                            }}>
                                <Text style={{ color: '#212121' }}>Client Name</Text>
                                <Text style={{ color: '#212121' }}>2</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 12
                            }}>
                                <Text style={{ color: '#212121', fontSize: 12 }}>START DATE</Text>
                                <Text style={{ color: '#212121', fontSize: 12 }}>END DATE</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 5
                            }}>
                                <Text style={{ color: '#212121', fontSize: 14 }}>Sun, 3 Apr 2022</Text>
                                <Text style={{ color: '#212121', fontSize: 14 }}>Thu, 4 Aug 2022</Text>
                            </View>
                            <View>

                            </View>

                        </TouchableOpacity>} />
                </View>
            </View>
        </ScrollView>

    )
}
let Stack = createNativeStackNavigator();

// =() => {   
//     return (
//         <Stack.Navigator screenOptions={{headerShown:false,headerBackVisible:true}}>
//             <Stack.Screen name='Project' component={Project}  />
//             <Stack.Screen name='ProjectContainer' component={ProjectContainer} />
//         </Stack.Navigator>
//     )
// }



let styles = StyleSheet.create({
    container: {

    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 56,
        borderBottomColor: '#00000047',
        borderBottomWidth: 1,

        // backgroundColor: 'red',
    },
    filterTxt: {
        fontSize: 16,
        color: '#03A9F4',
        marginLeft: 10
    },
    list: {
        width: '100%',
        height: 166,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E0E0E0'
    }
})