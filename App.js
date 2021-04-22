import React from 'react';
import {Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomNavigator} from 'react-navigation-tabs';
import fb from './screens/fb'
import insta from './screens/insta'
import {Header} from 'react-native-elements'

export default class App extends React.Component{
  render()
  {
    return(
      <View>
        <Header 
        backgroundColor={'#9c8210'}
        centerComponent={{
          text: 'Bottom tab Navigator',
          style: { color: '#fff', fontSize: 20 },
        }}/>
        <AppContainer />
      </View>
    )
  }
}

const tabNavigator = createBottomNavigator({
  Facebook: fb,
  Instagram: insta
})

const AppContainer = createAppContainer(tabNavigator)