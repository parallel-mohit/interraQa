import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, Image } from 'react-native'

import { Divider } from 'react-native-paper'
import Comments from '../components/Comments'
// import { Button } from 'react-native-paper'

export default ViewBugDetail = (props) => {
    let handleNavigatoion = () => {
        props.navigation.navigate('Edit Bugs Details')
    }
    return (

        <ScrollView style={styles.container}>

            <View style={{ marginHorizontal: 10, marginTop: 20, flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                        color: '#616161',
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>ID: 3452</Text>
                    <View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{
                                color: '#616161',
                                fontSize: 12,
                            }}>STATUS</Text>
                        </View>
                        <View style={[styles.btn, { backgroundColor: '#2196F3', marginTop: 5 }]} >
                            <Text style={{
                                color: '#FFFFFF',
                                fontSize: 11
                            }}>Open</Text>
                        </View>
                    </View>
                </View>



                <Text style={{ fontSize: 12, color: "#616161", marginTop: 10 }}>ISSUE</Text>
                <Text style={{ fontSize: 14, color: '#212121', marginTop: 5, fontWeight: '600' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Text style={{ fontSize: 12, color: '#616161', marginTop: 10 }}>DESCRIPTION</Text>
                <Text style={{ fontSize: 14, color: '#212121', marginTop: 5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Divider style={{ marginTop: 20, borderWidth: 1, borderColor: '#BDBDBD', marginBottom: 20, }} />
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
                    <View style={[styles.btn, { backgroundColor: '#FFC107' }]} >
                        <Text style={{ fontSize: 11 }}>05</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
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
                <Divider style={{ marginTop: 20, borderWidth: 1, borderColor: '#BDBDBD', marginBottom: 20 }} />
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={{
                            color: '#616161',
                            fontSize: 12
                        }}>TYPE</Text>
                        <View style={[styles.btn, { backgroundColor: '#2196F3', marginTop: 5 }]} >
                            <Text style={{ fontSize: 11, color: '#FFFFFF' }}>UI</Text>
                        </View>

                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{
                            color: '#616161',
                            fontSize: 12
                        }}>DEVICE</Text>
                        <View style={[styles.btn, { backgroundColor: '#4CAF50', marginTop: 5 }]} >
                            <Text style={{ fontSize: 11, color: '#FFFFFF' }}>ANDROID</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{
                            color: '#616161',
                            fontSize: 12
                        }}>PRIORITY</Text>
                        <View style={[styles.btn, { backgroundColor: '#FFC107', marginTop: 5 }]} >
                            <Text style={{ fontSize: 11, color: '#FFFFFF' }}>ANDROID</Text>
                        </View>

                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{
                            color: '#616161',
                            fontSize: 12
                        }}>SEVERITY</Text>
                        <View style={[styles.btn, { backgroundColor: '#2196F3', marginTop: 5 }]} >
                            <Text style={{ fontSize: 11, color: '#FFFFFF' }}>MEDIUM</Text>
                        </View>

                    </View>
                </View>
                <Divider style={{ marginTop: 20, borderWidth: 1, borderColor: '#BDBDBD', marginBottom: 20 }} />
               <Comments/>
                <Divider style={{ marginTop: 20, borderWidth: 1, borderColor: '#BDBDBD', marginBottom: 20 }} />
                <Text style={{
                    color: '#616161',
                    fontSize: 14,
                }}>
                    ATTACHMENTS
                </Text>
                <View style={{ marginTop: 20 }}>
                    <View  style={{flexDirection:'row'}}>
                        <View style={{
                            height: 60,
                            width: 62,
                            borderColor: '#03A9F4',
                            borderWidth: 2,
                            borderRadius: 4,
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <Image source={require('../images/eye.png')} />
                        </View>
                        <View style={{marginLeft:10,justifyContent:'center'}}>
                            <Text style={{fontSize:14,fontWeight:'600'}}>Home Screen.png</Text>
                            <Text style={{fontSize:12,marginTop:3}}>21 KB</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center',marginTop:20,marginBottom:30 }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#2196F3',
                        paddingHorizontal: 95,
                        paddingVertical: 10,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                        onPress={() => handleNavigatoion()}>
                        <Text style={{ color: 'white' }}>EDIT</Text>
                    </TouchableOpacity>
                </View>

            </View >

        </ScrollView >

    )
}
let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btn: {
        paddingVertical: 4,
        paddingHorizontal: 15,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})