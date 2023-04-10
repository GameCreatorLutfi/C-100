import React,{Component} from 'react'
import {Text,View,Button} from 'react-native'
 
export default class DailyScheduleScreen extends Component {
 taskDone=()=>{

 }
render() {
    return (
        <View>
            <Text>
                DailyScheduleScreen
            </Text>
            <Text>
             5:00 A.M Wake up
              </Text>
              <Button
                title="Work Done"
                color='red'
            />
        </View>
    )
}
 }