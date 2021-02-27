import * as React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { BlurView } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator  } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AquariumScreen from './screens/AquariumScreen';
import FishScreen from './screens/FishScreen';
import MeasurementScreen from './screens/MeasurementScreen';
import PlantScreen from './screens/PlantScreen';
import AjoutAquarium from './screens/AjoutAquarium';
import SettingsScreen from './screens/SettingsScreen';
import { App } from 'realm';

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
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
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
}

function AquariumStackScreen() {
  return (
    <AquariumStack.Navigator>
      <AquariumStack.Screen 
        name="AquariumScreen" 
        component={AquariumScreen} 
        options={{
          headerTransparent: false,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Ajouter"
              color="#fff"
            />
          ),
          headerLeft: ()=> (
              <NavigationDrawerStructure
                navigationProps={navigation}
              />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
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
      }}
      />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function aquariumTab(){
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
        backgroundColor: 'white',//color you want to change
      },
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
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


function navDrawerApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        initialRouteName="AquariumScreen">
        <Drawer.Screen 
          name="Aquariums" 
          component={SettingsStack}/>
        <Drawer.Screen 
          name="Notifications" 
          component={AquariumScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default aquariumTab();