import React from 'react';
import {Text, View } from 'react-native';
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
        <View>
          <Header 
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Bottom tab Navigator',
            style: { color: '#fff', fontSize: 20 },
          }}/>
          <AppContainer />
        </View>
      </SafeAreaProvider>
    )
  }
}

const tabNavigator = createBottomTabNavigator({
  Facebook: fb,
  Instagram: insta
})

const AppContainer = createAppContainer(tabNavigator)