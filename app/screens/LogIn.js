import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'

export default LogIn = (props) => {
    let handleAuthentication = () => {
        props.navigation.navigate('MAinBottomTab')
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container}>
                <Image source={require('../images/Logo.png')}
                    style={{ width: 180, height: 68,marginTop:25 }} />
                <View style={{
                    marginTop:'54%',
                    alignItems: 'center'
                }}>
                    <Image source={require('../images/QA-Logo.png')}
                        style={{ width: 300, height: 172, }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleAuthentication} style={{
                        flexDirection: 'row',
                        backgroundColor: '#03A9F4',
                        width: 268,
                        height: 40,
                        marginTop: '15%',
                        borderRadius: 3,


                    }}>

                        <Image source={require('../images/microsoft.png')}
                            style={{ marginLeft: 30, marginTop: 9, width: 22, height: 22 }} />
                        <Text style={styles.SignInText}>Sign in with Microsoft</Text>


                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Text style={styles.txt}>Illustrations from “www.vecteezy.com” & Icons from " www.flaticon.com "</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical:10,
        backgroundColor:'#F5F5F5',
    }, SignInText: {
        paddingVertical: 9,
        fontSize: 16,
        color: 'white',
        paddingLeft: 20
    }, txt: {
        fontSize: 10,
        color: '#616161'

    }
})