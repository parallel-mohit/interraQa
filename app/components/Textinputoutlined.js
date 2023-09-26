import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
export default Textinputoutlined = ({ label, outlinecolor }) => {
    const [text, setText] = useState("");
    let da = ["o", "s"]
    // console.log(lable)
    return (
        <View style={styles.container}>
            <TextInput

                mode='outlined'
                activeOutlineColor='#BDBDBD'
                outlineColor={outlinecolor || '#BDBDBD'}
                numberOfLines={6}
                label={label}
                value={text}
                onChangeText={text => setText(text)}

            ><SelectDropdown

                    data={da}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }} />

            </TextInput>
        </View>
    )
}

let styles = StyleSheet.create({
    container: {},
})