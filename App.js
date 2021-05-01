import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import fb from './screens/fb'
import insta from './screens/insta'
import {Header} from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class App extends React.Component{
  render()
  {
    return(
      <SafeAreaProvider>
        <View
        style = {{flex: 1,
          justifyContent: "center",
          alignItems: 'center',
          }}>
          <Header 
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Bottom Tab Navigator',
            style: { color: '#fff', fontSize: 20, width: 500, textAlign: 'center' },
          }}/>
          <AppContainer />
        </View>
      </SafeAreaProvider>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: fb},
  Instagram: {screen: insta}
})

const AppContainer = createAppContainer(TabNavigator)

