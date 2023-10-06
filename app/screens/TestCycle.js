import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ViewTestCycleDetails from './ViewTestCycleDetails'
import TestCaseId from './TestCaseId'
import Filter from '../components/Filter'

export default TestCycle = (props) => {
    let users = [{ id: 'TCY001', Status: 'Completed', totalExecuted: { pass: 12, fail: 10 }, result: 'Fail' }, { id: 'TCY002', Status: 'In-Progress' }]
    let [isStatus, setIsStatus] = useState('Completed')
    let handleTestCycleList = (item) => {
        console.log(item.Status)
        if (item.Status === 'In-Progress') {
            props.navigation.navigate('View Test Cycles Details', item)
        }
    }
    return (
        <>
        <ScrollView>
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 10 }}>
                <Filter />
                <FlatList
                    scrollEnabled={false}
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
                                    {item.Status === 'Completed' ?
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
                                                    <View style={[styles.btn, { backgroundColor: '#FF5722' }]} >
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
            </ScrollView>
            <RoundIconbtn name={'plus'} color={'#FFFFFF'} size={16} style={styles.addbtn} />
        </>
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
       marginBottom:10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E0E0E0'
    },
    btn: {
        height: 23,
       paddingHorizontal:15,
        borderRadius: 30,
        marginLeft: 10,

        justifyContent: 'center',
        alignItems: 'center', marginBottom: 20
    },
    addbtn: {
        position: 'absolute',
        bottom: 56,
        right: 30,
        width: 56,
        height: 56,
        textAlign: 'center',
        verticalAlign: 'middle'
    }
})
