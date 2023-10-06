import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Main from './app/screens/Main'
import Splash from './app/screens/Splash'
import LogIn from './app/screens/LogIn'
import { PaperProvider } from 'react-native-paper';

export default App  = () => {
  let [spalshLoaded,setSplashLoaded] = useState(false)
  setTimeout(()=>setSplashLoaded(true),1000)
return (
    <PaperProvider style={styles.container}>
      {
        spalshLoaded ? <Main/> :<Splash/>
      }
    </PaperProvider>
  )
}

let styles = StyleSheet.create({
  container:{flex:1},
})