import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

export default class CustomButton extends Component {
    render(){
      return (
        <View style={styles.container}>
  
          /* Custom Button */
          <TouchableOpacity
            style={styles.customBtnBG}
            onPress={() => {}}  >
            <Text style={styles.customBtnText}>Button</Text>
          </TouchableOpacity>
  
        </View>
      )
    }
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
          justifyContent: "center",
      alignItems: "center"
    },
  
    /* Here, style the text of your button */
      customBtnText: {
          fontSize: 40,
          fontWeight: '400',
          color: "#fff",
      },
  
    /* Here, style the background of your button */
      customBtnBG: {
      backgroundColor: "#007aff",
      paddingHorizontal: 30,
      paddingVertical: 5,
      borderRadius: 30
      }
  });