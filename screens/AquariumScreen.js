
import React from 'react';
import { View, Text, Button } from 'react-native';

export default class AquariumScreen extends React.Component {
    static navigationOptions = {
        title: 'Mes aquarium',
        //Sets Header text of Status Bar
        headerStyle: {
          backgroundColor: '#f4511e',
          //Sets Header color
        },
        headerTintColor: '#fff',
        //Sets Header text color
        headerTitleStyle: {
          fontWeight: 'bold',
          //Sets Header text style
        },
    };    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Vous n'avez pas encore créé votre aquarium!</Text>
                <Text> </Text>
                <Button 
                    title="Créer mon aquarium"
                    onPress={() => navigate('AjoutAquarium')}
                />
            </View>
        );
    }
}
