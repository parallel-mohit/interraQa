import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Textinputoutlined from '../components/Textinputoutlined'
import Textdropdown from '../components/Textdropdown';
import { Divider } from 'react-native-paper';
import Attachments from '../components/Attachments';
import Comments from '../components/Comments';


export default EditBugsDetail = () => {
    let da = ['open', 'close']
    return (
        <ScrollView >
            <View style={styles.container}>
            <View style={styles.inputbtn}>
                <Textinputoutlined label={'Issue'} />
            </View>
            <View style={styles.inputbtn}>
                <Textinputoutlined label={'Description'} />
            </View>
            <Textdropdown label={'Status'} da={da} />
            <Divider style={{  borderWidth: 1, borderColor: '#BDBDBD', marginBottom: 20 }} />
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
            <Divider style={{ marginTop: 20, borderWidth: 1, borderColor: '#BDBDBD', marginBottom: 20 }} />
            <Comments data={1}/>
            <Attachments/>
            </View>
        </ScrollView>
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