import React, {Component} from 'react';
import { View, Text, StyleSheet, Button,TextInput } from 'react-native'

export default class HourMinute extends Component{

    constructor(props){
        super(props);
        this.state = {
            AngleValue:0,
            InputHour : 0,
            InputMin : 0
        }
    }

    onHourChange=(text) => {
       // this.setState.InputHour = text
       this.setState({InputHour:text})
    }

    onMinChange=(text) => {
        this.setState({InputMin:text})
    }

    onSubmitClick = () => {
        if (this.state.InputHour != '') {
          if (this.state.InputMin != '') {
            this.clock_angles(this.state.InputHour, this.state.InputMin)
          } else {
            alert('Please Enter Min');
          }
        } else {
          alert('Please Enter Hour');
        }
       // this.clock_angles(this.state.InputHour, this.state.InputMin)
      };
    

    render(){
        return (
            <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Hour"
               placeholderTextColor = "#9a73ef"
               keyboardType="numeric"
               value={this.state.InputHour}
               onChangeText={this.onHourChange}
               />
          
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Minute"
               placeholderTextColor = "#9a73ef"
               keyboardType="numeric"
               value={this.state.InputMin}
               onChangeText={this.onMinChange}
               />

          <Button
                    title="Submit"
                    style={styles.button}
                    onPress={() => this.onSubmitClick()}
                />

        <Text style={{fontSize: 20, width :"100%", textAlign : "center", marginTop : 30}}> Angle is  + {this.state.AngleValue} </Text>
         </View>
        )
    }

 clock_angles(hour, minute) {
        var value = 0;
        var minAngle = 360*(minute/60);
        var hourAngle = 360*(hour/12)+(360/12)*(minute/60);
        console.log(minAngle);
        console.log(hourAngle);
        if(minAngle > hourAngle) {
            value = minAngle - hourAngle;
        }
        else {
            value = hourAngle - minAngle;
        }
        this.setState({
            AngleValue: value
        })
    }
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })