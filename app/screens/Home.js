import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'

export default Home = () => {
    let users=[{id:1},{id:2},{id:3},{id:4},{id:5}]
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../images/QA-Logo.png')} style={{
                    width: 52.73,
                    height: 30,
                    marginLeft: 44,
                    marginTop: 12
                }} />
                <TouchableOpacity>
                    <Image source={require('../images/Search.png')} style={{
                        width: 24,
                        height: 24,
                        marginRight: 10,
                        marginTop: 16,

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
                
                renderItem={({item})=><View style={styles.list}>
                    <View>
                        
                    </View>
                </View>}/>
            </View>
        </View>

    )
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 56,
        backgroundColor: '#FAFAFA',
    },
    filterTxt: {
        fontSize: 16,
        color: '#03A9F4',
        marginLeft: 10
    },
    list:{
        width:'1005',
        height:166,
        backgroundColor:'white',
        marginTop:10,
        marginBottom:10,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#E0E0E0'
    }
})