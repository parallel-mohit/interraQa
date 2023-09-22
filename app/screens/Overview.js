import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default Overview = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={{
                        color: '#212121',
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>PROJECT NAME</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 10
                }}>
                    <Text style={{ fontSize: 12, color: '#616161' }}>CLIENT</Text>
                    <Text style={{ fontSize: 12, color: '#616161' }}>PROJECT MANAGER</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 5
                }}>
                    <Text style={{ fontSize: 14, color: '#212121' }}>CLIENT NAME</Text>
                    <Text style={{ fontSize: 14, color: '#212121' }}>Donna Spencer</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 10
                }}>
                    <Text style={{ fontSize: 12, color: '#616161' }}>START DATE</Text>
                    <Text style={{ fontSize: 12, color: '#616161' }}>END DATE</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 5
                }}>
                    <Text style={{ color: '#212121', fontSize: 14 }}>Sun, 3 Apr 2022</Text>
                    <Text style={{ color: '#212121', fontSize: 14 }}>Thu, 4 Aug 2022</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 12, color: '#616161', marginBottom: 5 }}>DESCRIPTION</Text>
                    <Text style={{ color: '#212121', fontSize: 14 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo vel. Bibendum neque egestas congue quisque egestas diam in.</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: 'black', marginTop: 21, marginBottom: 20 }}></View>
                <View>
                    <Text style={{ color: '#616161', fontSize: 14, marginBottom: 20 }}>REALEASE STATUS</Text>
                    <View style={{ alignItems: 'center' }}>
                        <View style={[styles.circle, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ fontSize: 12, marginBottom: 3, opacity: 0.5 }}>Total</Text>
                            <Text>123 Days</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 21 }}>
                    <View style={{ width: 4, height: 42, backgroundColor: '#03A9F4', }}></View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: '#212121', marginBottom: 5 }}>Current Release (1)</Text>
                        <Text style={{ color: '#212121' }}>86 Days Left</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 0.5, borderColor: 'black', marginTop: 21, marginBottom: 20 }}></View>
                <Text>TEST CYCLE </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>TCY001</Text>
                    <View style={{ marginLeft: '40%', flexDirection: 'row' }}>
                        <View style={[styles.btn, { backgroundColor: '#FF5722' }]} />


                        <View style={[styles.btn, { backgroundColor: '#4CAF50' }]} />

                    </View>

                </View>
                <View style={{ borderWidth: 0.5, borderColor: 'black', marginTop: 21, marginBottom: 20 }} />
                <View>
                    <Text style={{ color: '#616161', fontSize: 14, marginBottom: 20 }}>BUGS</Text>
                    <View style={{ alignItems: 'center' }}>
                        <View style={[styles.circle, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ fontSize: 12, marginBottom: 3, opacity: 0.5 }}>Total BUGS</Text>
                            <Text>372</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 21 }}>
                    <View style={{ width: 4, height: 22, backgroundColor: '#03A9F4', }}></View>
                    <View style={{ marginLeft: 10 ,justifyContent:'center'}}>
                        <Text style={{ color: '#212121', marginBottom: 5 }}>Open</Text>
                       
                    </View>
                </View>
                <View style={{ borderWidth: 0.5, borderColor: 'black', marginTop: 10 }} />
                <View style={{ flexDirection: 'row', marginTop: 21 }}>
                    <View style={{ width: 4, height: 22, backgroundColor: '#FF5722', }}></View>
                    <View style={{ marginLeft: 10 ,justifyContent:'center'}}>
                        <Text style={{ color: '#212121', marginBottom: 5 }}>In-Progress</Text>
                       
                    </View>
                </View>
                <View style={{ borderWidth: 0.5, borderColor: 'black', marginTop: 10,  }} />
                <View style={{ flexDirection: 'row', marginTop: 21 }}>
                    <View style={{ width: 4, height: 22, backgroundColor: '#616161', }}></View>
                    <View style={{ marginLeft: 10 ,justifyContent:'center'}}>
                        <Text style={{ color: '#212121', marginBottom: 5 }}>Fixed</Text>
                       
                    </View>
                </View>
                <View style={{ borderWidth: 0.5, borderColor: 'black', marginTop: 10 }} />
                <View style={{ flexDirection: 'row', marginTop: 21 }}>
                    <View style={{ width: 4, height: 22, backgroundColor: '#8BC34A', }}></View>
                    <View style={{ marginLeft: 10 ,justifyContent:'center'}}>
                        <Text style={{ color: '#212121', marginBottom: 5 }}>Close</Text>
                       
                    </View>
                </View>
                <View style={{ borderWidth: 0.5, borderColor: 'black', marginTop: 10 }} />
                <View style={{ flexDirection: 'row', marginTop: 21 }}>
                    <View style={{ width: 4, height: 22, backgroundColor: '#FFC107', }}></View>
                    <View style={{ marginLeft: 10 ,justifyContent:'center'}}>
                        <Text style={{ color: '#212121', marginBottom: 5 }}>Rejected</Text>
                       
                    </View>
                </View>
                <View style={{ borderWidth: 0.5, borderColor: 'black', marginTop: 10 }} />
                <View style={{ flexDirection: 'row', marginTop: 21 }}>
                    <View style={{ width: 4, height: 22, backgroundColor: 'orange', }}></View>
                    <View style={{ marginLeft: 10 ,justifyContent:'center'}}>
                        <Text style={{ color: '#212121', marginBottom: 5 }}>Differed</Text>
                       
                    </View>
                </View>
            </View>

        </ScrollView >
    )
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        paddingTop: 20

    }, circle: {
        height: 200,
        width: 200,
        borderWidth: 5,
        borderRadius: 100,
        borderColor: '#EEEEEE',
        borderTopColor: '#03A9F4',



    }, btn: {
        height: 23,
        width: 70,
        borderRadius: 30,
        marginLeft: 10,

        justifyContent: 'center',
        alignItems: 'center', marginBottom: 20
    }
})