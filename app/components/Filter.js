import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import FilterModal from './FilterModal'
import BugFilter from './BugFilter'

export default Filter = ({ data }) => {
    let [flag, setFlag] = useState(false)
    let [bug, setBug] = useState(false)
    let hideModal = () => setFlag(!flag);
    let hideModal1 = () => setBug(!Bug);
    let onPress = () => {
        if (data === 1) {
            setBug(!bug)
        } else {
            setFlag(!flag)
        }
    }
    return (
        
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' ,marginVertical:20}}>
                <TouchableOpacity onPress={onPress}>
                    <Image source={require('../images/Filter.png')}
                        style={{
                            width: 22,
                            height: 22,
                        }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.filterTxt}>Filter</Text>
                </TouchableOpacity>
            </View>
            {
                flag ? <FilterModal visible={flag} hideModal={hideModal} /> : null
            }
            {
                bug?<BugFilter visible={bug} hideModal={hideModal1}/>:null
            }
        </View>
       
    )
}

let styles = StyleSheet.create({
    container: {flex:1,},
    filterTxt: {
        fontSize: 16,
        color: '#03A9F4',
        marginLeft: 10
    },
})