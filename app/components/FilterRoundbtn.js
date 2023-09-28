import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default FilterRoundbtn = ({style,name,style1,onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={style} onPress={onPress}>
                <Text style={style1}>
                   {name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

let styles = StyleSheet.create({
    container: {},
})