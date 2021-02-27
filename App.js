import * as React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { BlurView } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator  } from '@react-navigation/stack';
import AquariumScreen from './screens/AquariumScreen';
import FishScreen from './screens/FishScreen';
import MeasurementScreen from './screens/MeasurementScreen';
import PlantScreen from './screens/PlantScreen';
import AjoutAquarium from './screens/AjoutAquarium';
import SettingsScreen from './screens/SettingsScreen';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';
//const { WrappedComponent, userId } = props;
//import { createDrawerNavigator } from '@react-navigation/drawer';

function aquariumIcon() {
  return (
    /*<Image
      style={{ width: 25, height: 25 }}
      source={require('./assets/tabIcon_aquarium.png')}
    />*/
    <Icon name="tabIcon_aquarium" source={require('./assets/tabIcon_aquarium.png')} color={tintColor} size={25}/>
  );
}

const AquariumStack = createStackNavigator();
//const Drawer = createDrawerNavigator();

/*const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        { }
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}*/

function AquariumStackScreen({ navigation: { navigate } }) {
  return (
    <AquariumStack.Navigator>
      <AquariumStack.Screen 
        name="Aquarium" 
        component={AquariumScreen} 
        options={{
          headerTransparent: false,
          headerRight: () => (
            <Button
              onPress={() => navigate('AjoutAquarium')}
              title="AJOUTER"
              color="#fff"
            />
          ),
          /*headerLeft: ()=> (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),*/
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header colorbackgroundColor: '#D0ECE7'
          },
          labelStyle: {
            fontSize: 15,
            margin: 0,
            padding: 0,
          },
        }}
      />
      <AquariumStack.Screen 
        name="AjoutAquarium"
        component={AjoutAquarium} 
        options={{
          headerTransparent: false,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Enregistrer"
              color="#fff"
            />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
        }}
      />
    </AquariumStack.Navigator>
  );
}

const FishStack = createStackNavigator();

function FishStackScreen() {
  return (
    <FishStack.Navigator>
      <FishStack.Screen 
      name="Mes poissons" 
      component={FishScreen} 
      options={{
        headerTransparent: false,
        headerStyle: {
          backgroundColor: '#D0ECE7', //Set Header colorbackgroundColor: '#FAE5D3'
        }
      }}
      />
    </FishStack.Navigator>
  );
}

const MeasureStack = createStackNavigator();

function MeasureStackScreen() {
  return (
    <MeasureStack.Navigator>
      <MeasureStack.Screen 
      name="Mes mesures" 
      component={MeasurementScreen} 
      options={{
        headerTransparent: false,
        headerStyle: {
          backgroundColor: '#FAE5D3',
        }
      }}
      />
    </MeasureStack.Navigator>
  );
}

const PlantStack = createStackNavigator();

function PlantStackScreen() {
  return (
    <PlantStack.Navigator>
      <PlantStack.Screen 
      name="Mes plantes" 
      component={PlantScreen} 
      options={{
        headerTransparent: false,
        headerStyle: {
          backgroundColor: '#D7BDE2',
        }
      }}
      />
    </PlantStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen 
      name="Réglages" 
      component={SettingsScreen} 
      options={{
        headerTransparent: false,
        headerStyle: {
          backgroundColor: '#D7BDE2',
        }
      }}
      />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="AquariumScreen"
        screenOptions={({ route }) => ({
          animationEnabled:true,
          tabBarIcon: ({ focused, color, size }) => {
            
            let iconName;

            switch(route.name){
              case 'Aquariums':
                return (
                  <Image
                    style={{ width: size, height: size }}
                    source={require('./assets/tabIcon_aquarium.png')}
                  />
                );
                break;

              case 'Poissons':
                return (
                  <Image
                    style={{ width: size, height: size }}
                    source={require('./assets/tabIcon_fish_bubbles.png')}
                  />
                );
                break;

              case 'Plantes':
                return (
                  <Image
                    style={{ width: size, height: size }}
                    source={require('./assets/tabIcon_plantes.png')}
                  />
                );
                break;

              case 'Réglages':
                return (
                  <Ionicons 
                    name='ios-settings'
                    size={size} 
                    color='black' />
                  /*<Image
                    style={{ width: size, height: size }}
                    iconName='ios-settings'
                  />*/
                );
                break;
            }
            /*if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'add' : 'add-circle';
            }*/

            // You can return any component that you like here!
            //return <Ionicons name={iconName} size={size} color={color} />;
            //return aquariumIcon;
          },      
        })}
        tabBarOptions={{
          pressColor: 'red',//for click (ripple) effect color
          style: {
            backgroundColor: '#85C1E9',//color you want to change
          },
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 14,
            margin: 0,
            padding: 0,
          },
        }}
      >
        <Tab.Screen 
          name="Aquariums" 
          component={
            AquariumStackScreen
          } 
        />
        <Tab.Screen 
          name="Poissons" 
          component={
            FishStackScreen
          }
        />
        <Tab.Screen 
          name="Plantes" 
          component={
            PlantStackScreen
          } 
        />
        <Tab.Screen 
          name="Réglages" 
          component={
            SettingsScreen
          } 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}