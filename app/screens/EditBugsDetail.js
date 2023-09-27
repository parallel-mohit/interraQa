import { View, Text, StyleSheet } from 'react-native'
import Textinputoutlined from '../components/Textinputoutlined'

import Textdropdown from '../components/Textdropdown';
import { Divider } from 'react-native-paper';
import Attachments from '../components/Attachments';


export default EditBugsDetail = () => {
    let da = ['open', 'close']
    return (
        <View style={styles.container}>
            <View style={styles.inputbtn}>
                <Textinputoutlined label={'Issue'} />
            </View>
            <View style={styles.inputbtn}>
                <Textinputoutlined label={'Description'} />
            </View>
            <Textdropdown label={'Status'} da={da} />
            <Divider style={{ borderWidth: 0.2, marginBottom: 21 }} />
            <Textdropdown label={'Created By'} da={da} />
            <Textdropdown label={'Assigned To'} da={da} />
            <View style={{flexDirection:'row',justifyContent:'space-between' }}>
                <Textdropdown label={'Type'} da={da} style={{width:150,}} />
                <Textdropdown label={'Device'} da={da} style={{width:150}} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between' }}>
                <Textdropdown label={'Type'} da={da} style={{width:150,}} />
                <Textdropdown label={'Device'} da={da} style={{width:150}} />
            </View>
            <Divider/>
            <Text>Comments</Text>
            <Attachments/>
        </View>
    )
}

let styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20
    }, inputbtn: {
        marginBottom: 20
    },
    dropdown1BtnStyle: {
        width: '100%',



    },
})