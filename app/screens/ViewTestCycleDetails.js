import { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

export default ViewTestCycleDetails = (props) => {
    let users = props.route.params
    let handleTestCycleList = (item) => {
        props.navigation.navigate('Test Case Id', item.id)
    }
    let [isResult, setIsResult] = useState('Failed')
    let usersCaseId = [{ id: 'TC001', result: 'Failed' }, { id: 'TC002', result: 'Passed' }, { id: 'TC003', result: 'Failed' }, { id: 'TC004', result: '' }]

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={{ 
                    flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 ,
                    marginHorizontal:10
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>ID:</Text>
                        <Text>{props.route.params.id}</Text>
                    </View>
                    <View style={{}}>
                        <View style={{alignItems:'flex-end' }}>
                            <Text style={{ fontSize: 12, color: '#616161', marginLeft: 16, marginBottom: 5 }}>STATUS</Text>
                        </View>
                        <View style={[styles.btn, { backgroundColor: '#FFC107' }]} >
                            <Text style={{ color: '#212121', fontSize: 12 }}>{props.route.params.Status}</Text>
                        </View>
                    </View>
                </View>
                <FlatList
                    data={usersCaseId}
                    renderItem={({ item }) =>
                        <View>
                            <TouchableOpacity style={styles.list} onPress={() => handleTestCycleList(item)}>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 12
                                }}>
                                    <Text style={{ color: '#616161', fontSize: 12 }}>TEST CASE ID</Text>
                                    {item.result!==''?<Text style={{ color: '#616161', fontSize: 12 }}>STATUS</Text>:null}
                                </View>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 12
                                }}>
                                    <Text style={{ color: '#212121', fontSize: 16 }}>{item.id}</Text>
                                    {isResult === item.result ?
                                        <View style={[styles.btn, { backgroundColor: '#FF5722' }]} >

                                            <Text style={{ color: 'white', fontSize: 12 }}>{item.result}</Text>
                                        </View>
                                        : item.result !== '' ? <View style={[styles.btn, { backgroundColor: '#4CAF50' }]} >
                                            <Text style={{ color: 'white', fontSize: 12 }}>{item.result}</Text>
                                        </View> : null
                                    }
                                </View>

                            </TouchableOpacity>
                        </View>} />
            </View>

        </View>
    )
}

let styles = StyleSheet.create({
    container: {},
    btn: {
        height: 23,
        paddingHorizontal: 15,
        borderRadius: 30,

        justifyContent: 'center',
        alignItems: 'center',

    },
    list: {
        width: '100%',

        backgroundColor: 'white',
        paddingBottom: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E0E0E0',
    },

})