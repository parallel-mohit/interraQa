import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import RoundIconBtn from '../components/RoundIconBtn'

export default Bug = (props) => {
    let users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    let handleProjectlst = () => {
        props.navigation.navigate('View Bug Details',{})
    }
    return (
        <>
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
                            renderItem={({ item }) => <TouchableOpacity style={styles.list} onPress={() => handleProjectlst()}>
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
                                            <View style={[styles.btn, { backgroundColor: '#FFC107', width: 42, height: 23, marginRight: 10 }]} >
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
    },
    filterTxt: {
        fontSize: 16,
        color: '#03A9F4',
        marginLeft: 10
    },
    list: {
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


        justifyContent: 'center',
        alignItems: 'center', marginBottom: 20
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