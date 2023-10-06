import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

// import { TextInput } from 'react-native-paper'

export default Comments = ({ data }) => {
    return (
        <View style={styles.container}>

            <Text style={{
                color: '#616161',
                fontSize: 14,
            }}>COMMENTS</Text>
            
            <View style={{}}>
                <Text style={{

                    fontSize: 10,
                    marginTop: 20
                }}>Employee Name - Thu, 05 May 2022 / 2:43 PM</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        backgroundColor: '#FFFFFF',
                        maxWidth: '50%',
                        borderWidth: 1,
                        borderColor: '#BDBDBD',
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5
                    }}>
                        <Text style={{ fontSize: 14, color: '#212121' }}>hii</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <Image source={require('../images/dots.png')} style={{ height: 18, width: 4, tintColor: '#616161' }} />
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={{

                    fontSize: 10,
                    marginTop: 20
                }}>Employee Name - Thu, 05 May 2022 / 2:43 PM</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                        <Image source={require('../images/dots.png')} style={{ height: 18, width: 4, tintColor: '#616161' }} />
                    </View>
                    <View style={{
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        backgroundColor: '#FFFFFF',
                        maxWidth: '50%',
                        borderWidth: 1,
                        borderColor: '#BDBDBD',
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5
                    }}>
                        <Text style={{ fontSize: 14, color: '#212121' }}>hii</Text>
                    </View>

                </View>
            </View>
            {
                data === 1 ?
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{

                            width: '85%',
                            backgroundColor: '#FFFFFF',
                            height: 50,
                            borderRadius: 25,
                            borderColor: '#BDBDBD',
                            borderWidth: 2,
                            paddingHorizontal: 14,
                            justifyContent: 'center',
                        }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextInput
                                    style={{
                                        fontSize: 16,
                                        color: '#212121',
                                        width: '80%',
                                        maxWidth: "80%",

                                    }} ></TextInput>
                                <Image source={require('../images/attachment.png')} style={{ height: 22, width: 22, tintColor: '#BDBDBD', }} />
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{
                                justifyContent: 'center', alignItems: 'center',
                                height: 44, width: 44, borderRadius: 22, backgroundColor: '#03A9F4',
                            }}>
                                <Image source={require('../images/Send.png')} style={{ height: 20, width: 20, tintColor: 'white' }} />
                            </TouchableOpacity>
                        </View>
                    </View> : null
            }
        </View>
    )
}

let styles = StyleSheet.create({
    container: {},

})