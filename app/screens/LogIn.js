import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'

export default LogIn = (props) => {
    let handleAuthentication =()=>{
        props.navigation.navigate('MAinBottomTab')
    }
    return (
        <SafeAreaView style={{flex:1,backgroundColor: '#F5F5F5'}}>
        <StatusBar hidden />
            <View style={styles.container}>
                <Image source={require('../images/Logo.png')}
                    style={{ width: 180, height: 68 }} />
                <Image source={require('../images/QA-Logo.png')}
                    style={{ width: 300, height: 172, marginHorizontal: 56, marginTop: 231 }} />
                <TouchableOpacity onPress={handleAuthentication}>
                <View style={{ flexDirection: 'row', backgroundColor: '#03A9F4', width: 268, height: 40, marginLeft: 76, marginTop: 50, borderRadius: 3 }}>
                    <Image source={require('../images/1.png')}
                        style={{ marginLeft: 30, marginTop: 9, width: 22, height: 22 }} />
                    <Text style={styles.SignInText}>Sign in with Microsoft</Text>

                </View>
                </TouchableOpacity>
                <View style={{flex:1, justifyContent: 'flex-end', }}>
                    <Text style={styles.txt}>Illustrations from “www.vecteezy.com” & Icons from " www.flaticon.com "</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

let styles = StyleSheet.create({
    container: {
        flex:1,
        
        paddingHorizontal: 10,
        paddingVertical: 10,
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