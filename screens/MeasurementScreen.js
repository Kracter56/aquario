
import React from 'react'
import { View, Text, Button } from 'react-native'

export default class MeasurementScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Vous n'avez pas encore réalisé de mesure d'eau !</Text>
        <Text> </Text>
        <Button 
          title="Ajouter une mesure"/>
      </View>
    );
  }
}