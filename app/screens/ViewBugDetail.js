import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-paper'
// import { Button } from 'react-native-paper'

export default ViewBugDetail = (props) => {
    let handleNavigatoion = () => {
        props.navigation.navigate('Edit Bugs Details')
    }
    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                        color: '#616161',
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>ID: 3452</Text>

                    <Text style={{
                        color: '#616161',
                        fontSize: 12,
                        marginBottom: 5,

                    }}>STATUS</Text>
                </View>
                <View style={{ alignItems: 'flex-end', marginTop: 5 }}>
                    <View style={[styles.btn, { backgroundColor: '#FFC107', width: 58 }]} >
                        <Text>OPEN</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 12, color: "#616161" }}>ISSUE</Text>
                <Text style={{ fontSize: 14, color: '#212121', marginTop: 5, fontWeight: '800' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Text style={{ fontSize: 12, color: '#616161', marginTop: 10 }}>DESCRIPTION</Text>
                <Text style={{ fontSize: 14, color: '#212121', marginTop: 5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Divider style={{ marginTop: 20, borderWidth: 0.2, marginBottom: 20 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                        color: '#616161',
                        fontSize: 12
                    }}>CREATED ON</Text>


                    <Text style={{
                        color: '#616161',
                        fontSize: 12
                    }}>DAYS OLD</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <Text style={{
                        color: '#212121',
                        fontSize: 14
                    }}>Fri, 15 Apr 2022</Text>
                    <View style={[styles.btn, { backgroundColor: '#FFC107', width: 42 }]} >
                        <Text style={{ fontSize: 11 }}>05</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 14 }}>
                    <Text style={{
                        color: '#616161',
                        fontSize: 12
                    }}>CREATED BY</Text>


                    <Text style={{
                        color: '#616161',
                        fontSize: 12
                    }}>ASSIGNED TO</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <Text style={{
                        color: '#212121',
                        fontSize: 14
                    }}>Employee Name</Text>

                    <Text style={{
                        color: '#212121',
                        fontSize: 14
                    }}>Employee Name</Text>

                </View>
                <Divider style={{ marginTop: 20, borderWidth: 0.2, marginBottom: 20 }} />
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={{
                            color: '#616161',
                            fontSize: 12
                        }}>TYPE</Text>
                        <View style={[styles.btn, { backgroundColor: '#2196F3', width: 42 }]} >
                            <Text style={{ fontSize: 11, color: '#FFFFFF' }}>UI</Text>
                        </View>

                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{
                            color: '#616161',
                            fontSize: 12
                        }}>DEVICE</Text>
                        <View style={[styles.btn, { backgroundColor: '#4CAF50', width: 72 }]} >
                            <Text style={{ fontSize: 11, color: '#FFFFFF' }}>ANDROID</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{
                            color: '#616161',
                            fontSize: 12
                        }}>PRIORITY</Text>
                        <View style={[styles.btn, { backgroundColor: '#FFC107', width: 74 }]} >
                            <Text style={{ fontSize: 11, color: '#FFFFFF' }}>ANDROID</Text>
                        </View>

                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{
                            color: '#616161',
                            fontSize: 12
                        }}>SEVERITY</Text>
                        <View style={[styles.btn, { backgroundColor: '#2196F3', width: 74 }]} >
                            <Text style={{ fontSize: 11, color: '#FFFFFF' }}>MEDIUM</Text>
                        </View>

                    </View>
                </View>
                <Divider style={{ marginTop: 20, borderWidth: 0.2, marginBottom: 20 }} />
                <Text style={{
                    color: '#616161',
                    fontSize: 14,
                    marginBottom: 20
                }}>COMMENTS</Text>
                <Text style={{

                    fontSize: 10,
                    marginBottom: 20
                }}>Employee Name - Thu, 05 May 2022 / 2:43 PM</Text>
                <Divider style={{ marginTop: 20, borderWidth: 0.2, marginBottom: 20 }} />
                <Text style={{
                    color: '#616161',
                    fontSize: 14,
                    marginBottom: 20
                }}>
                    ATTACHMENTS
                </Text>
                <TouchableOpacity style={{backgroundColor:'green',width:'40%',height:'4%',borderRadius:20,justifyContent:'center',alignItems:'center'}} onPress={()=>handleNavigatoion()}>
                    <Text>EDit</Text>
                </TouchableOpacity>

            </View >
        </View >
    )
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        height: 23,
        width: 70,
        borderRadius: 30,


        justifyContent: 'center',
        alignItems: 'center',
    },
})