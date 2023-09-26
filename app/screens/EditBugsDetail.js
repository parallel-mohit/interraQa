import { View, Text, StyleSheet } from 'react-native'
import Textinputoutlined from '../components/Textinputoutlined'
import SelectDropdown from 'react-native-select-dropdown'

export default EditBugsDetail  = () => {
    let da=['open','close']
return (
    <View style={styles.container}>
        <View style={{marginBottom:20}}>
        <Textinputoutlined label={'Issue'} />
        </View>
        <View style={{marginBottom:20}}>
        <Textinputoutlined label={'Description'}/>
        </View>
        <Textinputoutlined label={'Status'}>
            
        </Textinputoutlined>
        
    </View>
    )
}

let styles = StyleSheet.create({
    container:{
        marginVertical:20,
        marginHorizontal:20
    },
})