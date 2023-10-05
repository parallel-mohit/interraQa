import { View, Text, StyleSheet } from 'react-native'
import { Divider } from 'react-native-paper'

export default Status = ({backgroundColor,status}) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 21 }}>
                <View style={{ width: 4, height: 22, backgroundColor: backgroundColor, }}/>
                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                    <Text style={{ color: '#212121', marginBottom: 5 }}>{status}</Text>
                </View>
            </View>
           <Divider style={{marginTop:10}}/>
           {/* <View style={{ borderWidth: 0.5, borderColor: 'black', marginTop: 10 }} /> */}
        </View>
    )
}

let styles = StyleSheet.create({
    container: {},
})