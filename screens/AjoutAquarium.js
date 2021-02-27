/* Screen to register the aquarium */
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import MyButton from '../components/MyButton'; 
import MyText from '../components/MyText';
import MyTextInput from '../components/MyTextInput';
import db from '../common/db';
import Realm from 'realm';
let realm;

export default class AjoutAquarium extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aqua_name: '',
      aqua_volume: '',
      aqua_type: '',
      aqua_comments: '',
    };
    //realm = new Realm({ path: 'UserDatabase.realm' });
    realm = new Realm({
        schema: [{name: 'aquarium', 
        properties: 
        {
          aqua_id: {type: 'int',   default: 0},
          aqua_name: 'string', 
          aqua_volume: 'string',
          aqua_type: 'string',
          aqua_comments: 'string'
        }}]
    });
  }

  register_aquarium = () => {
    var that = this;

    const AquariumSchema = {
      name: 'aquarium',
      properties: {
        idAquarium:  { type: 'int', default: 0 },
        nom: 'string',
        date: 'date',
        litres: 'int',
        hauteur: 'float',
        longueur: 'float',
        largeur: 'float',
        volume: 'float',
        commentaire: 'string',
        entretien: 'entretien[]'
      }
  };
  
  const EntretienSchema = {
      name: 'entretien',
      properties: {
        idEntretien:  { type: 'int', default: 0 },
        date: 'date',
        typeEntretien: 'entretien',
        idAquarium: 'string',
        bRappel: 'bool',
        commentaire: 'string',
      }
  };
  
  const MesureSchema = {
      name: 'mesure',
      properties: {
        idMesure:  { type: 'int', default: 0 },
        date: 'date',
        idElement: 'string',
        idAquarium: 'string',
        commentaire: 'string',
      }
  };
  
  const TypeEntretienSchema = {
      name: 'typeEntretien',
      properties: {
          idTypeEntretien: { type: 'int', default: 0 },
          nom:  'string',
          detail: 'string',
          periodicite: 'string',
          commentaire: 'string',
      }
  };
  
  const ElementSchema = {
      name: 'element',
      properties: {
          idElement: { type: 'int', default: 0 },
          nomElement:  'string',
          valeurMin: 'float',
          valeurMoy: 'float',
          valeurMax: 'float',
          textMin: 'string',
          textMoy: 'string',
          textMax: 'string',
          commentaire: 'string',
      }
  };

    const { idAquarium } = this.state;
    const { nom } = this.state;
    const { volume } = this.state;
    const { commentaire } = this.state;

  const Schema = [AquariumSchema, EntretienSchema, MesureSchema, TypeEntretienSchema, ElementSchema];

    if (nom) {
      if (volume) {
        if (commentaire) {
          Realm.open({schema: Schema})
          .then(realm => {
            realm.write(() => {
              var ID =
                realm.objects('aquarium').sorted('idAquarium', true).length > 0
                  ? realm.objects('aquarium').sorted('idAquarium', true)[0]
                      .idAquarium + 1
                  : 1;
              realm.create('aquarium', {
                idAquarium: ID,
                nom: that.state.aqua_name,
                volume: that.state.aqua_volume,
                commentaire: that.aqua_comments,
              });
              Alert.alert(
                'Success',
                'Your Aquarium is registered successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => that.props.navigation.navigate('AquariumScreen'),
                  },
                ],
                { cancelable: false }
              );
            });
          });
          realm.close();
        } else {
          alert('Please fill Type');
        }
      } else {
        alert('Please fill Contact Volume');
      }
    } else {
      alert('Please fill Name');
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <MyTextInput
              placeholder="Enter Name"
              onChangeText={nom => this.setState({ nom })}
            />
            <MyTextInput
              placeholder="Enter Volume"
              onChangeText={volume => this.setState({ volume })}
              maxLength={10}
              keyboardType="numeric"
            />
            <MyTextInput
              placeholder="Enter Comments"
              onChangeText={commentaire => this.setState({ commentaire })}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: 'top' }}
            />
            <MyButton
              title="Submit"
              customClick={this.register_aquarium.bind(this)}//register_user.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}