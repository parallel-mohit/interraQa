import { View, Text, StyleSheet, Image,Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
let width=Dimensions.get('window').width

export default Splash = () => {
    console.log(width)
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#F5F5F5', '#4FC3F7']}
                style={styles.linearGradient}
            >
                <View style={{flex:1}}>
                    <Image source={require('../images/QA-Logo.png')}
                        style={{marginHorizontal:56, width: 300, height: 172,  marginTop: 109 }} />
                </View>
                <View style={{flex:1}}>
                    <Image source={require('../images/Illustration.png')}
                        style={{ paddingHorizontal:26,width: 360, height: 206, marginTop: 92 }} />
                </View>
            </LinearGradient>

        </View>
    )
}



// Later on in your styles..
var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems:'center',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});