import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons'
export default Textdropdown = ({label,da,style,value}) => {
    // console.log()
    return (
        <View style={styles.container}>
            <TextInput
                style={{  backgroundColor: '#FFFFFF' , ...style }}
                outlineStyle={{ borderWidth: 2 }}
                mode='outlined'
                activeOutlineColor='#BDBDBD'
                outlineColor={'#BDBDBD'}
                label={label}
                value=' '  

                onChangeText={text => setText(text)}
                render={props =>

                    <SelectDropdown

                        dropdownIconPosition={'right'}
                        // defaultButtonText='open'
                        renderDropdownIcon={isOpened => {
                            return <AntDesign name={isOpened ? 'up' : 'down'} color={'#BDBDBD'} size={18} />;
                        }}
                        data={da}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        buttonStyle={[styles.dropdown1BtnStyle, ] }
                    />} />


        </View>
    )
}

let styles = StyleSheet.create({
    container: {marginBottom:20},
    dropdown1BtnStyle: {
        width: '100%',
        backgroundColor:'white',


    },txt:{
      
        width:'100%'
    }
})