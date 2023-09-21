import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, FlatList, ScrollView } from 'react-native'

export default Home = (props) => {
    let users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    let handleSeeAll = ()=>{
        props.navigation.navigate('Projects')
    }
    return (
        // <SafeAreaView >
        <ScrollView style={styles.container}>
            
            <View style={styles.mainContainer}>
                <View style={styles.lstContainer}>
                    <View style={{ paddingVertical: 20 }}>
                        <Text style={{
                            fontSize: 16,
                            marginLeft: 10
                        }}>My Projects</Text>
                        <FlatList data={users}
                            scrollEnabled={false}
                            renderItem={({ item }) => <View style={styles.list}>
                                <View>
                                    <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
                                        <Text style={{
                                            fontSize: 16,
                                        }}>PROJECT NAME</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 12
                                    }}>
                                        <Text style={{ color: '#212121', fontSize: 12 }}>CLIENT</Text>
                                        <Text style={{ color: '#212121', fontSize: 12 }}>END DATE</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 5
                                    }}>
                                        <Text style={{ color: '#212121', fontSize: 14 }}>CLIENT NAME</Text>
                                        <Text style={{ color: '#212121', fontSize: 14 }}>Thu, 4 Aug 2022</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 5
                                    }}>
                                        <Text style={{ color: '#212121', fontSize: 14 }}>Bugs</Text>

                                    </View>
                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 5
                                    }}>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',

                                    }}>
                                        <View style={[styles.btn, { backgroundColor: '#FF5722' }]}>
                                            <Text>11 High</Text>
                                        </View>
                                        <View style={[styles.btn, { backgroundColor: '#FF5722' }]}>
                                            <Text>16 Critical</Text>
                                        </View>
                                        <View style={[styles.btn, { backgroundColor: '#FFC107' }]}>
                                            <Text>4 Major</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>} />

                    </View>

                </View>
                <View style={styles.diagramView}>
                    <View style={{marginHorizontal:10,marginVertical:20}}>
                        <Text style={{
                            color:'#616161',fontSize:14
                        }}>BUG STATUS</Text>
                    </View>

                </View>
                <View style={styles.diagramView}>
                    <View style={{marginHorizontal:10,marginVertical:20}}>
                        <Text style={{
                            color:'#616161',fontSize:14
                        }}>PROJECT STATUS</Text>
                        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>handleSeeAll()}>
                            <Text>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </ScrollView>
        // </SafeAreaView>

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
        height: 568,
        marginVertical:10,
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#E0E0E0',

    }
})