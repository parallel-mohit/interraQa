import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Status from '../components/Status'
import { Divider } from 'react-native-paper'

export default Overview = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={{
                        color: '#212121',
                        fontSize: 16,
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
                    <Text style={{ fontSize: 14, color: '#212121' }}>Client Name</Text>
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
                <Divider  style={{marginTop: 21, marginBottom: 20,borderWidth:1,borderColor:'#BDBDBD'}}/>
                <View>
                    <Text style={{ color: '#616161', fontSize: 14, marginBottom: 20 }}>REALEASE STATUS</Text>
                    <View style={{ alignItems: 'center' }}>
                        <View style={[styles.circle, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ fontSize: 12, marginBottom: 3, opacity: 0.5 }}>Total</Text>
                            <Text>123 Days</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 4, height: 42, backgroundColor: '#03A9F4', }}></View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: '#212121', marginBottom: 5, fontSize: 14 }}>Current Release (1)</Text>
                            <Text style={{ color: '#212121', fontSize: 12 }}>86 Days Left</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text>37(12%)</Text>
                    </View>
                </View>
                {/* <View style={{ borderWidth: 0.5, borderColor: 'black', marginTop: 20, marginBottom: 20 }}></View> */}
                <Divider style={{marginTop: 20, borderWidth:1,borderColor:'#BDBDBD'}}/>
                <Text style={{ fontSize: 14, color: '#616161' ,marginTop:20}}>TEST CYCLE </Text>
                <View style={{ flexDirection: 'row', marginTop: 23 ,justifyContent:'space-between'}}>
                    <Text>TCY001</Text>
                    <View style={{  flexDirection: 'row' }}>
                        <View style={[styles.btn, { backgroundColor: '#FF5722' }]} >
                            <Text style={{color:'white',fontSize:12}}>Fail</Text>
                        </View>
                        <View style={[styles.btn, { backgroundColor: '#4CAF50' }]} >
                            <Text style={{color:'white',fontSize:12}}>Completed</Text>
                        </View>
                    </View>
                </View>
                <Divider style={{marginTop:20,borderWidth:1,borderColor:'#BDBDBD'}}/>
                {/* <View style={{ borderWidth: 0.5, borderColor: 'black', marginTop: 21, marginBottom: 20 }} />
                 */}
                 
                 <View style={{ flexDirection: 'row',justifyContent:'space-between',marginTop:20}}>
                    <Text>TCY002</Text>
                    <View style={{ }}>
                        <View style={[styles.btn, { backgroundColor: '#FFC107' }]} >
                            <Text style={{color:'white',fontSize:12}}>In-Progress</Text>
                        </View>
                        
                    </View>
                </View>
                <Divider style={{marginTop:20,borderWidth:1,borderColor:'#BDBDBD'}}/>
                <View>
                    <Text style={{ color: '#616161', fontSize: 14, marginBottom: 20 ,marginTop:20}}>BUGS</Text>
                    <View style={{ alignItems: 'center' }}>
                        <View style={[styles.circle, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ fontSize: 12, marginBottom: 3, opacity: 0.5 }}>Total BUGS</Text>
                            <Text>372</Text>
                        </View>
                    </View>
                </View>

                <Status backgroundColor={'#2196F3'} status={'Open'} />
                <Status backgroundColor={'#FFC107'} status={'In-Progess'} />
                <Status backgroundColor={'#4CAF50'} status={'Fixed'} />
                <Status backgroundColor={'#1B5E20'} status={'Close'} />
                <Status backgroundColor={'#E64A19'} status={'Rejected'} />
                <Status backgroundColor={'#673AB7'} status={'Differed'} />

            </View>

        </ScrollView >
    )
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20

    }, circle: {
        height: 200,
        width: 200,
        borderWidth: 5,
        borderRadius: 100,
        borderColor: '#EEEEEE',
        borderTopColor: '#03A9F4',



    }, btn: {
       paddingVertical:4,
       
        paddingHorizontal:15,
        borderRadius: 30,
        marginLeft: 10,

        justifyContent: 'center',
        alignItems: 'center',
    }
})