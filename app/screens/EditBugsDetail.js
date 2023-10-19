import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

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
                <Textdropdown label={'Status'} da={da} value1={'Open'}/>
                <Divider style={{ borderWidth: 1, borderColor: '#BDBDBD', marginBottom: 20 }} />
                <Textdropdown label={'Created By'} da={da} value1={'Employee Name'}/>
                <Textdropdown label={'Assigned To'} da={da} value1={'Employee Name'}/>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Textdropdown label={'Type'} da={da} style={{ width: 150, }} value1={'UI'}/>
                    <Textdropdown label={'Device'} da={da} style={{ width: 150 }} value1={"Android"}/>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Textdropdown label={'Priority'} da={da} style={{ width: 150, }} value1={'Medium'} />
                    <Textdropdown label={'Severity'} da={da} style={{ width: 150 }} value1={'Medium'} />
                </View>
                <Divider style={{ marginTop: 20, borderWidth: 1, borderColor: '#BDBDBD', marginBottom: 20 }} />
                <Comments data={1} />
                <Attachments />
                <View style={{ marginTop: 30 ,flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                    <TouchableOpacity style={{
                        width: '46%',
                        height: 40,
                        borderColor: '#03A9F4',
                        borderWidth: 2,
                        borderRadius: 6,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{color:'#03A9F4'}}>
                            CANCEL
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: '46%',
                        height: 40,
                      backgroundColor: '#03A9F4',
                       
                        borderRadius: 6,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{color:'white'}}>
                            SAVE
                        </Text>

                    </TouchableOpacity>
                </View>
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