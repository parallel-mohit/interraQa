import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react';
import { TextInput } from 'react-native-paper';

export default Textinputoutlined = ({ label, outlinecolor }) => {
    const [text, setText] = useState("");
    let da = ["o", "s"]
    // console.log(lable)
    return (
        <View style={styles.container}>
            <TextInput
                style={{ backgroundColor: '#FFFFFF' }}
                outlineStyle={{ borderWidth: 2 }}
                mode='outlined'
                activeOutlineColor='#BDBDBD'
                outlineColor={outlinecolor || '#BDBDBD'}
                numberOfLines={6}
                label={label}
                value={text}
                onChangeText={text => setText(text)}

            >

            </TextInput>
        </View>
    )
}

let styles = StyleSheet.create({
    container: {},
})