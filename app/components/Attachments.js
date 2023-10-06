import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';

export default Attachments = () => {
    let [image, setImage] = useState([]);
    let [display, setDisplay] = useState(false)

    let handleImagePicker = async () => {

        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {

            let imageData = [...image, result.assets[0].uri]
            setImage(imageData);
            
            setDisplay(true)

        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={{ borderWidth: 1, borderColor: '#BDBDBD', marginTop: 20 }} />
            <Text style={{ fontSize: 14, color: '#616161', fontWeight: '600' ,marginTop:20}}>ATTACHMENTS</Text>
            <TouchableOpacity onPress={handleImagePicker}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    backgroundColor: '#03A9F4', height: 40, width: 170, borderRadius: 5, marginTop: 20
                }} >
                    <AntDesign name='camera' size={20} color={'white'} style={{ marginLeft: 20 }} />
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '700', marginLeft: 10 }}>ATTACH FILE</Text>
                </View>

            </TouchableOpacity>
            {display ?
                <FlatList
                    scrollEnabled={false}
                    data={image}
                    renderItem={({ item }) => 
                        <View style={{ flexDirection: 'row' ,marginTop:10}}>

                            <Image source={require('../images/file.png')} style={{ width: 40, height: 45, marginTop: 10 }} />
                            <View style={{ marginLeft: 20, flex: 1 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <View style={{ marginTop:10 }}>
                                        <Text style={{ fontSize: 14, fontWeight: '600' }}>Home Screen.png</Text>
                                        <Text style={{ fontSize: 12, marginTop: 3 }}>21 KB</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <AntDesign name='close' size={30} color={'red'} />
                                    </View>
                                </View>
                                <View style={{
                                    marginTop:5,
                                    borderWidth: 1,
                                    borderColor: 'green',
                                }} />
                            </View>

                            {/* <Image source={{ uri: item }} style={{ width: 200, height: 200, marginTop: 10,marginLeft:10 }} /> */}
                        </View>

                    
                    } /> : null}
        </ScrollView>
    )
}

let styles = StyleSheet.create({
    container: {},
})