
import { useState } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, FlatList, Button, ScrollView } from 'react-native'


export default Projects = (props) => {

    let users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    let [filterFlag, setFilterFlag] = useState(false)
    let handleProjectlst = () => {
        props.navigation.navigate('ProjectContainer')
    }

    return (
        <>
            <ScrollView >
                <View style={styles.container}>

                    <View style={{ paddingHorizontal: 10}}>

                        <Filter />
                        <FlatList data={users}
                            scrollEnabled={false}
                            renderItem={({ item }) => <TouchableOpacity style={styles.list} onPress={() => handleProjectlst()}>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Text style={{
                                        fontSize: 16,
                                        color: '#212121'
                                    }}>PROJECT NAME</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 10
                                }}>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#616161'
                                    }}>CLIENT</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#616161'
                                    }}>CURRENT RELEASE</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 5
                                }}>
                                    <Text style={{ color: '#212121', fontSize: 14 }}>Client Name</Text>
                                    <Text style={{ color: '#212121', fontSize: 14 }}>2</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 12
                                }}>
                                    <Text style={{ color: '#616161', fontSize: 12 }}>START DATE</Text>
                                    <Text style={{ color: '#616161', fontSize: 12 }}>END DATE</Text>
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
            <RoundIconbtn name={'plus'} color={'#FFFFFF'} size={16} style={styles.addbtn} />
        </>

    )
}


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
      
        backgroundColor: 'white',
        
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E0E0E0',
        paddingVertical:20,
    },
    addbtn: {
        position: 'absolute',
        bottom: 40,
        right: 25,
        width: 56,
        height: 56,
        textAlign: 'center',
        verticalAlign: 'middle'
    }
})