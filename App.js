import React,{Component} from 'react'
import { View,Text,StyleSheet } from 'react-native'
import AppHeader from './components/AppHeader'
import DailyScheduleScreen from './screens/DailyScheduleScreen'

export default class App extends Component{
  render(){
return(
  <View>
  <AppHeader/>
  <DailyScheduleScreen/>
  </View>
)

  }
}
const styles = StyleSheet.create({
 headerText:{
  backgroundColor: "blue"
 }
 
 
})