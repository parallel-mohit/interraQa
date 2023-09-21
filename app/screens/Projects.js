import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'

export default Projects = () => {
    let users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    let handleProjectlst = () =>{
        
    }
    return (
        <SafeAreaView >
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{
                        paddingLeft: 10,
                        marginTop: 16,
                    }}>
                        <Image source={require('../images/QA-Logo.png')} style={{
                            width: 52.73,
                            height: 30,
                        }} />
                    </View>
                    <TouchableOpacity style={{
                        marginRight: 10,
                        marginTop: 16,

                    }}>
                        <Image source={require('../images/Search.png')} style={{
                            width: 24,
                            height: 24,
                        }} />
                    </TouchableOpacity>

                </View>
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

                        renderItem={({ item }) => <TouchableOpacity style={styles.list} onPress={handleProjectlst}>
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
        </SafeAreaView>

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
        height: 166,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E0E0E0'
    }
})