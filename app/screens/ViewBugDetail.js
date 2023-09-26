import { View, Text, StyleSheet ,Button} from 'react-native'
// import { Button } from 'react-native-paper'

export default ViewBugDetail  = (props) => {
let handleNavigatoion=()=>{
    props.navigation.navigate('Edit Bugs Details')
}
return (
    <View style={styles.container}>
        <Button title='abc' onPress={handleNavigatoion}/>
    </View>
    )
}

let styles = StyleSheet.create({
    container:{},
})