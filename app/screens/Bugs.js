import { View, Text, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import * as React from 'react';
import { TextInput } from 'react-native-paper';

export default Bugs = () => {
    const [text, setText] = React.useState("");

    return (
        <View style={styles.container}>
            <ActivityIndicator color='red' animating={false} size={'large'} />
            <TextInput
            mode='outlined'
                numberOfLines={6}
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>
    )
}

let styles = StyleSheet.create({
    container: {},
})