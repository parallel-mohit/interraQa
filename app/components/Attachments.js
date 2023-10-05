import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';

export default Attachments = () => {
    let  [image, setImage] = useState([]);
    let [display,setDisplay] = useState(false)

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
            <View style={{ borderWidth: 1, borderColor: '#BDBDBD', marginBottom: 20, marginTop: 20 }}></View>
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
            {display?
            <FlatList
            scrollEnabled={false}
                data={image}
                renderItem={({ item}) =><View style={{flexDirection:'row'}}>
                
                <Image source={require('../images/file.png')} style={{width:40,height:45,marginTop:10}}/>
                
                    {/* <Image source={{ uri: item }} style={{ width: 200, height: 200, marginTop: 10,marginLeft:10 }} /> */}
                    </View>} />:null}
        </ScrollView>
    )
}

let styles = StyleSheet.create({
    container: {},
})