import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ViewTestCycleDetails from './ViewTestCycleDetails'
import TestCaseId from './TestCaseId'

let TextCycles = (props) => {
    let users = [{ id: 'TCY001', Status: 'completed', totalExecuted: { pass: 12, fail: 10 }, result: 'fail' }, { id: 'TCY002', Status: 'in-Progress' }]
    let [isStatus, setIsStatus] = useState('completed')
    let handleTestCycleList = (item) => {
        console.log(item.Status)
        if (item.Status === 'in-Progress') {
            props.navigation.navigate('View Test Cycles Details', item)
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity >
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
                <FlatList
                    data={users}
                    renderItem={({ item }) =>
                        <View>
                            <TouchableOpacity style={styles.list} onPress={() => handleTestCycleList(item)}>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 12
                                }}>
                                    <Text style={{ color: '#616161', fontSize: 12 }}>ID</Text>
                                    <Text style={{ color: '#616161', fontSize: 12 }}>STATUS</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 12
                                }}>
                                    <Text style={{ color: '#212121', fontSize: 16 }}>{item.id}</Text>
                                    {item.Status === 'completed' ?
                                        <View style={[styles.btn, { backgroundColor: '#4CAF50' }]} >

                                            <Text style={{ color: 'white', fontSize: 12 }}>{item.Status}</Text>
                                        </View>
                                        : <View style={[styles.btn, { backgroundColor: '#FFC107' }]} >
                                            <Text style={{ color: '#212121', fontSize: 12 }}>{item.Status}</Text>
                                        </View>
                                    }
                                </View>
                                {

                                    (isStatus === item.Status) ? <View>
                                        <View style={{
                                            flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 11
                                        }}>
                                            <Text style={{ color: '#616161', fontSize: 12 }}>TOTAL EXECUTED</Text>
                                            <Text style={{ color: '#616161', fontSize: 12 }}>RESULT</Text>
                                        </View>
                                        <View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={[styles.btn, { backgroundColor: '#4CAF50' }]} >
                                                        <Text style={{ fontSize: 11, color: '#FFFFFF' }}>{`Pass ${item.totalExecuted.pass}`}</Text>
                                                    </View>


                                                    <View style={[styles.btn, { backgroundColor: '#FF5722' }]} >
                                                        <Text style={{ fontSize: 11, color: '#FFFFFF' }}>{`Fail ${item.totalExecuted.fail}`}</Text>
                                                    </View>

                                                </View>
                                                <View style={{ marginRight: 10 }}>
                                                    <View style={[styles.btn, { backgroundColor: '#4CAF50' }]} >
                                                        <Text style={{ fontSize: 11, color: '#FFFFFF' }}>Fail</Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </View> : null

                                }
                            </TouchableOpacity>
                        </View>
                    } />
            </View>
        </View>
    )
}
let Stack = createNativeStackNavigator();

export default TestCycle = () => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen name='Test Cycles' component={TextCycles} />
            <Stack.Screen name='View Test Cycles Details' component={ViewTestCycleDetails} />

            <Stack.Screen name='Test Case Id' component={TestCaseId}/>
        </Stack.Navigator>
    )
}

let styles = StyleSheet.create({
    container: {},
    filterTxt: {
        fontSize: 16,
        color: '#03A9F4',
        marginLeft: 10
    }, list: {
        width: '100%',

        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E0E0E0'
    },
    btn: {
        height: 23,
        width: 70,
        borderRadius: 30,
        marginLeft: 10,

        justifyContent: 'center',
        alignItems: 'center', marginBottom: 20
    }
})
