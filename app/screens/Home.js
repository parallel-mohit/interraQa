import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import RoundIconBtn from '../components/RoundIconBtn'

export default Home = (props) => {
    let users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    let hanldeProjects = () => {
        props.navigation.navigate('Projects')
    }
   
    return (
        <>
            <ScrollView style={styles.container}>

                <View style={styles.mainContainer}>
                    <View style={styles.lstContainer}>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={{
                                fontSize: 14,
                                
                                // fontFamily:'OpenSans-Regular',
                                marginLeft: 10
                            }}>MY PROJECTS</Text>
                            <FlatList data={users}
                                scrollEnabled={false}
                                renderItem={({ item }) => <View style={styles.list}>
                                    <View>
                                        <View style={{ marginHorizontal: 10, marginTop:20 }}>
                                            <Text style={{
                                                fontSize: 16,
                                                fontWeight:'bold',
                                            }}>PROJECT NAME</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10,marginTop:10
                                        }}>
                                            <Text style={{ color: '#616161', fontSize: 12 }}>CLIENT</Text>
                                            <Text style={{ color: '#616161', fontSize: 12 }}>END DATE</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 5
                                        }}>
                                            <Text style={{ color: '#212121', fontSize: 14 }}>Client Name</Text>
                                            <Text style={{ color: '#FF5722', fontSize: 14 }}>Thu, 4 Aug 2022</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 10
                                        }}>
                                            <Text style={{ color: '#616161', fontSize: 12 }}>BUGS</Text>

                                        </View>
                                        <View style={{
                                            flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 5
                                        }}>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',

                                        }}>
                                            <View style={[styles.btn, { backgroundColor: '#FF5722' }]}>
                                                <Text style={{color:'white',fontSize:11}}>11 High</Text>
                                            </View>
                                            <View style={[styles.btn, { backgroundColor: '#FF5722' }]}>
                                                <Text style={{color:'white',fontSize:11}}>16 Critical</Text>
                                            </View>
                                            <View style={[styles.btn, { backgroundColor: '#FFC107' }]}>
                                                <Text style={{color:'#616161',fontSize:11}}>4 Major</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>} />

                        </View>

                    </View>
                    <View style={styles.diagramView}>
                        <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                            <Text style={{ color: '#616161', fontSize: 14, marginBottom: 20 }}>BUG STATUS</Text>
                            <View style={{ alignItems: 'center' }}>
                                <View style={[styles.circle, { justifyContent: 'center', alignItems: 'center' }]}>
                                    <Text style={{ fontSize: 12, marginBottom: 3, opacity: 0.5 }}>Total BUGS</Text>
                                    <Text>372</Text>
                                </View>
                            </View>

                            <Status backgroundColor={'#2196F3'} status={'Open'} />
                            <Status backgroundColor={'#FFC107'} status={'In-Progess'} />
                            <Status backgroundColor={'#4CAF50'} status={'Fixed'} />
                            <Status backgroundColor={'#1B5E20'} status={'Close'} />
                            <Status backgroundColor={'#E64A19'} status={'Rejected'} />
                            <Status backgroundColor={'#673AB7'} status={'Differed'} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15, marginBottom: 20 }}>
                            <TouchableOpacity>
                                <Text style={{ color: '#03A9F4', fontWeight: '600' }}>
                                    SEE ALL
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.diagramView}>
                        <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                            <Text style={{ color: '#616161', fontSize: 14, marginBottom: 20 }}>PROJECT STATUS</Text>
                            <View style={{ alignItems: 'center' }}>
                                <View style={[styles.circle, { justifyContent: 'center', alignItems: 'center' }]}>
                                    <Text style={{ fontSize: 12, marginBottom: 3, opacity: 0.5 }}>Total Projects</Text>
                                    <Text>10</Text>
                                </View>
                            </View>
                            <Status backgroundColor={'#2196F3'} status={'Completed Projects'} />
                            <Status backgroundColor={'#4CAF50'} status={'Active Projects'} />
                            <Status backgroundColor={'#E64A19'} status={'Inactive Projects'} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                            <TouchableOpacity onPress={hanldeProjects}>
                                <Text style={{ color: '#03A9F4', fontWeight: '600' }}>
                                    SEE ALL
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>

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
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center', marginBottom: 20
    }, btnTxt: {
        fontSize: 11,
        color: '#FFFFFF'
    }, diagramView: {
        width: '100%',

        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#E0E0E0',

    }, circle: {
        height: 200,
        width: 200,
        borderWidth: 5,
        borderRadius: 100,
        borderColor: '#EEEEEE',
        borderTopColor: '#03A9F4',



    }

})