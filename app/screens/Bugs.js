import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import Filter from '../components/Filter'
import { AntDesign } from '@expo/vector-icons'
import RoundIconBtn from '../components/RoundIconBtn'


export default Bugs = (props) => {
    let users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    let handleNavigatoion = () => {
        props.navigation.navigate('View Bug Details')
    }
    return (
        <>
            <ScrollView >
                <View style={styles.container}>

                    <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                        <Filter data={1} />

                        <View style={{
                            width: '100%',
                            height: 62,
                            backgroundColor: 'white',
                            borderColor: '#E0E0E0',
                            paddingLeft: 10,
                            borderWidth: 1,
                            borderRadius: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center', marginTop: 10
                        }}>
                            <Text style={{ fontSize: 16 }}>PROJECT NAME</Text>

                            <AntDesign name={'plus'}
                                color={'#03A9F4'}
                                style={{
                                    height: 24,
                                    width: 24,
                                    borderColor: '#03A9F4',
                                    borderWidth: 2,
                                    padding: 4,
                                    borderRadius: 20,
                                    marginRight: 10

                                }}
                                size={15} />

                        </View>


                        <View style={styles.lstContainer}>
                            <View style={{ paddingVertical: 20 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{
                                        fontSize: 16,
                                        marginLeft: 10
                                    }}>PROJECT NAME</Text>
                                    <AntDesign name={'minus'}
                                        color={'#03A9F4'}
                                        style={{
                                            height: 24,
                                            width: 24,
                                            borderColor: '#03A9F4',
                                            borderWidth: 2,
                                            padding: 4,
                                            borderRadius: 20,
                                            marginRight: 10

                                        }}
                                        size={15} />
                                </View>
                                <FlatList data={users}
                                    scrollEnabled={false}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity style={styles.list} onPress={() => handleNavigatoion()}>
                                            <View style={{ marginHorizontal: 10, paddingTop: 20 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{
                                                        color: '#616161',
                                                        fontSize: 12
                                                    }}>ID</Text>
                                                    <View style={{ flexDirection: 'row' }}>

                                                        <Text style={{
                                                            marginRight: 25, color: '#616161',
                                                            fontSize: 12
                                                        }}>DAYS OLD</Text>

                                                        <Text style={{
                                                            color: '#616161',
                                                            fontSize: 12
                                                        }}>STATUS</Text>

                                                    </View>
                                                </View>

                                                <View style={{
                                                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 5
                                                }}>
                                                    <Text style={{
                                                        fontSize: 16, color: '#212121'
                                                    }}>34522</Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={[styles.btn, { backgroundColor: '#FFC107', width: 42 }]} >
                                                            <Text>05</Text>
                                                        </View>
                                                        <View style={[styles.btn, { backgroundColor: '#FF5722', width: 58 }]} >
                                                            <Text>05</Text>
                                                        </View>
                                                    </View>


                                                </View>

                                                <Text style={{
                                                    fontSize: 12, color: '#616161'
                                                }}>Issue</Text>
                                                <Text style={{
                                                    color: '#616161',
                                                    fontSize: 14, marginTop: 5
                                                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

                                                <View style={{
                                                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 14
                                                }}>
                                                    <Text style={{
                                                        color: '#616161',
                                                        fontSize: 12,
                                                    }}>ASSIGNED TO</Text>
                                                    <Text style={{
                                                        color: '#616161',
                                                        fontSize: 12
                                                    }}>PRIORITY</Text>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 5
                                                }}>
                                                    <Text style={{
                                                        color: '#616161',
                                                        fontSize: 14,
                                                        fontWeight: '800'
                                                    }}>Employee Name</Text>
                                                    <View style={[styles.btn, { backgroundColor: '#FFC107', height: 23 }]} >
                                                        <Text>MEDIUM</Text>
                                                    </View>
                                                </View>

                                            </View>

                                        </TouchableOpacity>} />
                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>
            <RoundIconBtn name={'plus'} color={'white'} size={20} style={styles.addbtn} />
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
    }, mainContainer: {
        marginHorizontal: 10
    },
    lstContainer: {

        marginTop: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },

    list: {
        width: '100%',

        backgroundColor: 'white',
        borderBottomWidth: 1,

        borderColor: '#BDBDBD'
    },
    lstHeader: {

    }, btn: {
        height: 23,
        width: 70,
        borderRadius: 30,
        marginLeft: 7,
        justifyContent: 'center',
        alignItems: 'center', marginBottom: 20
    }, btnTxt: {
        fontSize: 11,
        color: '#FFFFFF'
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

