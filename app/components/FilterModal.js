
import { setStatusBarHidden, setStatusBarTranslucent } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Divider, Modal, Portal } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react';
import FilterRoundbtn from './FilterRoundbtn'
export default FilterModal = ({ visible, hideModal }) => {
    const containerStyle = { flex: 1 };
    let [flag1, setFlag1] = useState(false)
    let [flag2, setFlag2] = useState(false)
    let [flag3, setFlag3] = useState(false)
    let [flag4, setFlag4] = useState(false)
    let [flag5, setFlag5] = useState(false)
    let [flag6, setFlag6] = useState(false)
    let [flag7, setFlag7] = useState(false)
    let [flag8, setFlag8] = useState(false)
    let [flag9, setFlag9] = useState(false)

    return (
        
        <Portal>
            
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ }} >
            <ScrollView>
                <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    
                }}>
                    <View style={{ marginTop: 20, flexDirection: 'row', marginLeft: '42%' }}>
                        <Text style={{
                            fontSize: 14,
                            color: '#616161',
                            fontWeight: 'bold'
                        }}>FILTER</Text>
                        <AntDesign name='close' size={22} color={'#03A9F4'} style={{ marginLeft: '64%' }} onPress={hideModal} />
                    </View>

                    <View style={styles.mainContainer}>
                        <View style={{ marginTop: 8, flexDirection: 'row' }}>
                            <Text style={{
                                fontSize: 14,
                                color: '#616161',
                                fontWeight: 'bold'
                            }}>SORT BY</Text>
                            <AntDesign name='filter' size={18} color={'#03A9F4'} style={{ marginLeft: '2%' }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between',flexWrap:'wrap' }}>
                            <FilterRoundbtn style={[styles.roundedBtn, flag1 ? { borderColor: '#03A9F4' } : null]}
                                style1={[styles.btn, flag1 ? { color: '#03A9F4' } : null]}
                                onPress={() => setFlag1(!flag1)} name={'Project Name'} />
                            <FilterRoundbtn style={[styles.roundedBtn, flag2 ? { borderColor: '#03A9F4' } : null]} onPress={() => setFlag2(!flag2)}
                                style1={[styles.btn, flag2 ? { color: '#03A9F4' } : null]} name={'Client Project'} />
                            <FilterRoundbtn style={[styles.roundedBtn, flag3 ? { borderColor: '#03A9F4' } : null]} onPress={() => setFlag3(!flag3)}
                                style1={[styles.btn, flag3 ? { color: '#03A9F4' } : null]} name={'Start Date'} />
                        </View>
                        <FilterRoundbtn style={[styles.roundedBtn,flag4 ? { borderColor: '#03A9F4' } : null,
                        {  width: 91, marginTop: 10, paddingLeft: 0, paddingLeft: 0 }]}
                            style1={[styles.btn, flag4 ? { color: '#03A9F4' } : null]} name={'End Date'} onPress={()=>setFlag4(!flag4)} />
                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                            <TouchableOpacity style={[styles.roundedBtn,flag5 ? { borderColor: '#03A9F4' } : null, { paddingLeft: 0, paddingRight: 0 }]} onPress={()=>setFlag5(!flag5)}>
                                <View style={{ flexDirection: 'row', marginRight: 30 }}>
                                    <Image source={require('../images/list.png')}
                                        style={{ height: 18, width: 18, marginLeft: 30, marginRight: 18,tintColor:flag5?'#03A9F4':'#BDBDBD' }} />
                                    <Text style={[styles.btn, flag5 ? { color: '#03A9F4' } : null]}>
                                        Ascending
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.roundedBtn,flag6 ? { borderColor: '#03A9F4' } : null, { marginLeft:10,paddingLeft: 0, paddingRight: 0 }]} onPress={()=>setFlag6(!flag6)}>
                                <View style={{ flexDirection: 'row', marginRight: 30 }}>
                                    <Image source={require('../images/download.png')}
                                        style={{ height: 18, width: 18, marginLeft: 30, marginRight: 18,tintColor:flag6?'#03A9F4':'#BDBDBD' }} />
                                    <Text style={[styles.btn, flag6 ? { color: '#03A9F4' } : null]}>
                                        Descending
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Divider style={{ marginTop: 20, marginBottom: 24 }} />
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{
                                fontSize: 14,
                                color: '#616161'
                            }}>SHOW</Text>
                            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                                <Image source={require('../images/eye.png')} style={{ width: 16, height: 10 }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, }}>
                            <FilterRoundbtn style={[styles.roundedBtn, flag7 ? { borderColor: '#03A9F4' } : null]} 
                            name={'Active Project'}  
                            style1={[styles.btn, flag7 ? { color: '#03A9F4' } : null]}
                            onPress={() => setFlag7(!flag7)} />
                            <FilterRoundbtn style={[styles.roundedBtn, flag8 ? { borderColor: '#03A9F4' } : null , {marginLeft:10}]} 
                            name={'Inactive Project'}  
                            style1={[styles.btn, flag8 ? { color: '#03A9F4' } : null]}
                            onPress={() => setFlag8(!flag8)} />
                        </View>
                        
                        <FilterRoundbtn style={[styles.roundedBtn, flag9 ? { borderColor: '#03A9F4' } : null , { width: 162, marginTop: 10 }]} 
                            name={'Completed Projects'}  
                            style1={[styles.btn, flag9? { color: '#03A9F4' } : null]}
                            onPress={() => setFlag9(!flag9)} />
                        <Divider style={{ marginTop: 20, marginBottom: 40 }} />
                        <View style={{ alignItems: 'center', }}>
                            <View style={{
                                height: 40,
                                width: 240,
                                backgroundColor: '#03A9F4',
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>
                                <Text style={{ color: 'white' }}>
                                    show  results
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </Modal>
        </Portal>
        
    )
}

let styles = StyleSheet.create({
    container: {
        marginTop: 200,
        
    },
    roundedBtn: {
        height: 36,
        paddingLeft:15 ,
        paddingRight: 15,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#BDBDBD',
        justifyContent: 'center',
        alignItems: 'center'
    }, btn: {

        color: '#BDBDBD',
        fontSize: 14


    }, mainContainer: {
        paddingHorizontal: 20,
        marginVertical:20
    }
})