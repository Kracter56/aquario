
import React from 'react'
import { View, Text, Button } from 'react-native'

export default class SettingsScreen extends React.Component {
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Vous n'avez pas encore ajouté de plantes dans votre aquarium !</Text>
        <Text> </Text>
        <Button 
          title="Ajouter une plante"/>
      </View>
    );
  }
}