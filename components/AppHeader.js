import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import React, {Component} from 'react'
import { Text,View,StyleSheet } from 'react-native'

export default class AppHeader extends Component{
    render(){
        return(
            <View>
            <Text style={styles.headerText}>
              
            YOURDAILYCHECKLIST
          </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    headerText:{
     backgroundColor: "blue",
     color: 'white',
     fontSize: 52,
     textAlign:'center',
     fontWeight: 'bold',
     
     
    }
    
    
   })