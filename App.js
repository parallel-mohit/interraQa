import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Main from './app/screens/Main'
import Splash from './app/screens/Splash'
import LogIn from './app/screens/LogIn'

export default App  = () => {
  let [spalshLoaded,setSplashLoaded] = useState(false)
  setTimeout(()=>setSplashLoaded(true),3000)
return (
    <View style={styles.container}>
      {
        spalshLoaded ? <Main/> :<Splash/>
      }
    </View>
  )
}

let styles = StyleSheet.create({
  container:{flex:1},
})