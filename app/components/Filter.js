import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native'

export default Filter = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Image source={require('../images/Filter.png')}
                        style={{
                            width: 22,
                            height: 22,

                        }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.filterTxt}>Filter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

let styles = StyleSheet.create({
    container: {},
    filterTxt: {
        fontSize: 16,
        color: '#03A9F4',
        marginLeft: 10
    },
})