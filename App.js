import React from "react";

import Home from "./src/containers/Home";
import AuthLoading from "./src/containers/AuthLoading";
import Question from "./src/containers/Question";
import Answer from "./src/containers/Answer";
import Register from "./src/containers/Register";
import Login from "./src/containers/Login";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator'

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
    AuthLoading: { screen: AuthLoading },
    Question: { screen: Question },
    Answer: { screen: Answer },
    Register: { screen: Register },
    Login: { screen: Login },
},
{ 
    headerMode: 'none',
    initialRouteName: 'AuthLoading',
    navigationOptions: {
        headerVisible: false,
    },
    transitionConfig: () => ({
        screenInterpolator: (sceneProps) => {
          if (
            sceneProps.index === 1 &&
            sceneProps.scene.route.routeName !== 'AuthLoading'
          ) return null
    
          return CardStackStyleInterpolator.forHorizontal(sceneProps)
        },
    })
     

});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    render() {
        return (
            <AppContainer />
        )
    }
}

  
