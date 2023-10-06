import { setStatusBarHidden, setStatusBarTranslucent } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Divider, Modal, Portal } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react';
import FilterRoundbtn from './FilterRoundbtn'
import Textdropdown from '../components/Textdropdown';
import RoundIconBtn from './RoundIconBtn';
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
    let [flag10, setFlag10] = useState(false)
    let [flag11, setFlag11] = useState(false)
    let [flag12, setFlag12] = useState(false)
    let [flag13, setFlag13] = useState(false)
    let [flag14, setFlag14] = useState(false)
    let [flag15, setFlag15] = useState(false)

    return (

        <Portal>

            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}  >
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
                            <View style={{ marginTop: 28, flexDirection: 'row' }}>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#616161',
                                    fontWeight: 'bold'
                                }}>SORT BY</Text>
                                <AntDesign name='filter' size={18} color={'#03A9F4'} style={{ marginLeft: '2%' }} />
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                <FilterRoundbtn style={[styles.roundedBtn, flag1 ? { borderColor: '#03A9F4' } : null,]}
                                    style1={[styles.btn, flag1 ? { color: '#03A9F4' } : null]}
                                    onPress={() => setFlag1(!flag1)} name={'Bug Id'} />
                                <FilterRoundbtn style={[styles.roundedBtn, flag2 ? { borderColor: '#03A9F4' } : null, { marginLeft: 10 }]} onPress={() => setFlag2(!flag2)}
                                    style1={[styles.btn, flag2 ? { color: '#03A9F4' } : null]} name={'Days Old'} />

                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 20, }}>
                                <TouchableOpacity style={[styles.roundedBtn, flag2 ? { borderColor: '#03A9F4' } : null, { paddingLeft: 0, paddingRight: 0 }]} onPress={() => setFlag2(!flag2)}>
                                    <View style={{ flexDirection: 'row', marginRight: 30 }}>
                                        <Image source={require('../images/list.png')}
                                            style={{ height: 18, width: 18, marginLeft: 30, marginRight: 18, tintColor: flag2 ? '#03A9F4' : '#BDBDBD' }} />
                                        <Text style={[styles.btn, flag2 ? { color: '#03A9F4' } : null]}>
                                            Ascending
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.roundedBtn, flag3 ? { borderColor: '#03A9F4' } : null, { marginLeft: 10, paddingLeft: 0, paddingRight: 0 }]} onPress={() => setFlag3(!flag3)}>
                                    <View style={{ flexDirection: 'row', marginRight: 30 }}>
                                        <Image source={require('../images/download.png')}
                                            style={{ height: 18, width: 18, marginLeft: 30, marginRight: 18, tintColor: flag3 ? '#03A9F4' : '#BDBDBD' }} />
                                        <Text style={[styles.btn, flag3 ? { color: '#03A9F4' } : null]}>
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
                                }}>STATUS</Text>
                                <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                                    <Image source={require('../images/status.png')} style={{ width: 16, height: 16 }} />
                                </View>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                    <FilterRoundbtn style={[styles.roundedBtn, flag4 ? { borderColor: '#03A9F4' } : null]}
                                        name={'Fixed'}
                                        style1={[styles.btn, flag4 ? { color: '#03A9F4' } : null]}
                                        onPress={() => setFlag4(!flag4)} />
                                    <FilterRoundbtn style={[styles.roundedBtn, flag5 ? { borderColor: '#03A9F4' } : null, { marginLeft: 10 }]}
                                        name={'Verified'}
                                        style1={[styles.btn, flag5 ? { color: '#03A9F4' } : null]}
                                        onPress={() => setFlag5(!flag5)} />
                                    <FilterRoundbtn style={[styles.roundedBtn, flag6 ? { borderColor: '#03A9F4' } : null, { marginLeft: 10 }]}
                                        name={'Closed'}
                                        style1={[styles.btn, flag6 ? { color: '#03A9F4' } : null]}
                                        onPress={() => setFlag6(!flag6)} />
                                    <FilterRoundbtn style={[styles.roundedBtn, flag7 ? { borderColor: '#03A9F4' } : null, { marginLeft: 10 }]}
                                        name={'Open'}
                                        style1={[styles.btn, flag7 ? { color: '#03A9F4' } : null]}
                                        onPress={() => setFlag7(!flag7)} />
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                    <FilterRoundbtn style={[styles.roundedBtn, flag8 ? { borderColor: '#03A9F4' } : null,]}
                                        name={'in-Progress'}
                                        style1={[styles.btn, flag8 ? { color: '#03A9F4' } : null]}
                                        onPress={() => setFlag8(!flag8)} />

                                    <FilterRoundbtn style={[styles.roundedBtn, flag9 ? { borderColor: '#03A9F4' } : null, { marginLeft: 10 }]}
                                        name={'Reopen'}
                                        style1={[styles.btn, flag9 ? { color: '#03A9F4' } : null]}
                                        onPress={() => setFlag9(!flag9)} />
                                    <FilterRoundbtn style={[styles.roundedBtn, flag10 ? { borderColor: '#03A9F4' } : null, { marginLeft: 10 }]}
                                        name={'Rejected'}
                                        style1={[styles.btn, flag10 ? { color: '#03A9F4' } : null]}
                                        onPress={() => setFlag10(!flag9)} />
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <FilterRoundbtn style={[styles.roundedBtn, flag11 ? { borderColor: '#03A9F4' } : null,]}
                                        name={'Duplicate'}
                                        style1={[styles.btn, flag11 ? { color: '#03A9F4' } : null]}
                                        onPress={() => setFlag11(!flag11)} />
                                    <FilterRoundbtn style={[styles.roundedBtn, flag12 ? { borderColor: '#03A9F4' } : null, { marginLeft: 10 }]}
                                        name={'Deffered'}
                                        style1={[styles.btn, flag12 ? { color: '#03A9F4' } : null]}
                                        onPress={() => setFlag12(!flag12)} />
                                </View>
                            </View>


                            <Divider style={{ marginTop: 20, marginBottom: 40 }} />
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#616161'
                                }}>PRIORITY</Text>
                                <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                                    <Image source={require('../images/status.png')} style={{ width: 16, height: 16 }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                <FilterRoundbtn style={[styles.roundedBtn, flag13 ? { borderColor: '#03A9F4' } : null,]}
                                    style1={[styles.btn, flag13 ? { color: '#03A9F4' } : null]}
                                    onPress={() => setFlag13(!flag13)} name={'Low'} />
                                <FilterRoundbtn style={[styles.roundedBtn, flag14 ? { borderColor: '#03A9F4' } : null, { marginLeft: 10 }]} onPress={() => setFlag14(!flag14)}
                                    style1={[styles.btn, flag14 ? { color: '#03A9F4' } : null]} name={'Medium'} />
                                <FilterRoundbtn style={[styles.roundedBtn, flag15 ? { borderColor: '#03A9F4' } : null, { marginLeft: 10 }]} onPress={() => setFlag15(!flag15)}
                                    style1={[styles.btn, flag15 ? { color: '#03A9F4' } : null]} name={'High'} />

                            </View>

                            <Divider style={{ marginTop: 20, marginBottom: 40 }} />
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#616161'
                                }}>USERS</Text>
                                <View style={{ justifyContent: 'center', marginLeft: 10, marginBottom: 30 }}>
                                    <AntDesign name='user' size={16} />
                                </View>
                            </View>
                            <Textdropdown label={'ASsigned To'} value={''} />
                            <View style={{ alignItems: 'center', marginBottom:20}}>
                                
                                    <TouchableOpacity style={{
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
                                    </TouchableOpacity>
                               
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Modal>

        </Portal >

    )
}

let styles = StyleSheet.create({
    container: {
        marginTop: 200,
        height: 200
    },
    roundedBtn: {
        height: 36,
        paddingLeft: 15,
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

    }
})