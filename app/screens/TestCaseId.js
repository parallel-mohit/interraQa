import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


export default TestCaseId = () => {
    let handleImagePicker = async () => {
        let result = await launchImageLibrary({ mediaType: 'photo', quality: 0 });
        // console.log(result.assets)
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container} >
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                }}>
                    <Text style={{ fontSize: 12, color: '#616161' }}>TEST CASE ID</Text>
                    <Text style={{ fontSize: 12, color: '#616161' }}>USE CASE ID</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 5
                }}>
                    <Text style={{ fontSize: 14, color: '#212121' }}>TC004</Text>
                    <Text style={{ fontSize: 14, color: '#212121' }}>UC004</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 10
                }}>
                    <Text style={{ fontSize: 12, color: '#616161' }}>TYPE</Text>
                    <Text style={{ fontSize: 12, color: '#616161' }}>TEST BEHAVIOUR</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 10
                }}>
                    <View style={[styles.btn, { backgroundColor: '#2196F3', width: 42 }]} >
                        <Text style={{ color: '#FFFFFF', fontSize: 12 }}>UI</Text>
                    </View>
                    <View style={[styles.btn, { backgroundColor: '#4CAF50' }]} >
                        <Text style={{ color: '#ffffff', fontSize: 12 }}>POSITIVE</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 0.4, borderColor: '#BDBDBD', marginBottom: 20 }}></View>

                <Text style={{ fontSize: 12, color: "#616161" }}>PRE CONDITION</Text>
                <Text style={{ fontSize: 14, color: '#212121', marginTop: 5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Text style={{ fontSize: 12, color: '#616161', marginTop: 10 }}>TEST SUMMARY</Text>
                <Text style={{ fontSize: 14, color: '#212121', marginTop: 5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Text style={{ fontSize: 12, color: "#616161", marginTop: 10 }}>STEPS</Text>
                <Text style={{ fontSize: 14, color: '#212121', marginTop: 5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Text style={{ fontSize: 12, color: "#616161", marginTop: 10 }}>EXPECTED RESULTS</Text>
                <Text style={{ fontSize: 14, color: '#212121', marginTop: 5 }}>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <View style={{ borderWidth: 1, borderColor: '#BDBDBD', marginBottom: 20, marginTop: 20 }}></View>
                <Text style={{ color: '#616161', fontSize: 12 }}>RESULTS</Text>
                <View style={{
                    flexDirection: 'row', marginTop: 10
                }}>
                    <View style={[styles.btn, { backgroundColor: '#4CAF50', height: 40, width: 80, borderRadius: 5 }]} >
                        <Text style={{ color: 'white', fontSize: 12 }}>PASS</Text>
                    </View>
                    <View style={[styles.btn, { backgroundColor: '#FF5722', height: 40, width: 80, marginLeft: 20, borderRadius: 5 }]} >
                        <Text style={{ color: 'white', fontSize: 12 }}>FAIL</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 12, color: "#616161", marginTop: 10 }}>ACTUAL RESULT</Text>
                <TextInput style={styles.input} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
                    d tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TextInput>
                <View style={{ borderWidth: 0.4, borderColor: '#BDBDBD', marginBottom: 20, marginTop: 20 }}></View>
                <Text style={{ fontSize: 14, color: '#616161', fontWeight: '600' }}>ATTACHMENTS</Text>
                <TouchableOpacity onPress={handleImagePicker}>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        backgroundColor: '#03A9F4', height: 40, width: 170, borderRadius: 5, marginTop: 10
                    }} >
                        <AntDesign name='camera' size={20} color={'white'} style={{ marginLeft: 20 }} />
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '700', marginLeft: 10 }}>ATTACH FILE</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

let styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    btn: {
        height: 23,
        width: 70,
        borderRadius: 30,

        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    }, input: {

        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 20,
        paddingHorizontal: 20
    }
})