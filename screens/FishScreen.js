
import React from 'react'
import { View, Text, Button } from 'react-native'

export default class FishScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Vous n'avez pas encore ajouté de poisson dans votre aquarium !</Text>
        <Text> </Text>
        <Button 
          title="Ajouter un poisson"/>
      </View>
    );
  }
}