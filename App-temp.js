import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  

//import { icon_aquarium, icon_fish_bubbles, icon_plantes, icon_aquarium_svg} from './icons'

/*class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Home Screen</Text>  
        </View>  
    );  
  }  
}  

function HomeScreen({ navigation }) {
    const [count, setCount] = React.useState(0);
  
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => setCount(c => c + 1)} title="Update count" />
        ),
      });
    }, [navigation]);
  
    return <Text>Count: {count}</Text>;
}

/*function StackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerTitle: props => <LogoTitle {...props} />,
          })}
        />
      </Stack.Navigator>
    );
}

class ProfileScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Profile Screen</Text>  
        </View>  
    );  
  }  
}  
class ImageScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Image Screen</Text>  
            </View>  
        );  
    }  
}  
class CartScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Cart Screen</Text>  
            </View>  
        );  
    }  
}  

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My home' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}*/

function AquariumStackScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>Vous n'avez pas encore d'aquarium</Text>
    </View>
  );
}

function MesuresStackScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>Vous n'avez pas encore mesuré l'eau de votre aquarium</Text>
      <Button>Ajouter une mesure</Button>
    </View>
  );
}

function PoissonsStackScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>Vous n'avez pas encore ajouté de poisson</Text>
      <Button>Ajouter un poisson</Button>
    </View>
  );
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  
const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: AquariumStackScreen,  
            navigationOptions:{  
                tabBarLabel:'Mes aquariums',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
            }  
        },  
        Profile: { screen: MesuresStackScreen,  
            navigationOptions:{  
                tabBarLabel:'Mes mesures',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' },  
            }  
        },  
        Image: { screen: PoissonsStackScreen,  
            navigationOptions:{  
                tabBarLabel:'History',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
                activeColor: '#615af6',  
                inactiveColor: '#46f6d7',  
                barStyle: { backgroundColor: '#67baf6' },  
            }  
        },  
    },  
    {  
      //initialRouteName: "Mes aquariums",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  
  
export default createAppContainer(TabNavigator);  