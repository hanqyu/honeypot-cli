import React from "react";

import Home from "./src/containers/Home";
import AuthLoading from "./src/containers/AuthLoading";
import Question from "./src/containers/Question";
import Answer from "./src/containers/Answer";
import RegisterRequired from "./src/containers/RegisterRequired";
import RegisterPersonal from "./src/containers/RegisterPersonal";
import RegisterCategory from "./src/containers/RegisterCategory";
import Login from "./src/containers/Login";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator'

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
    AuthLoading: { screen: AuthLoading },
    Question: { screen: Question },
    Answer: { screen: Answer },
    RegisterRequired: { screen: RegisterRequired },
    RegisterPersonal: { screen: RegisterPersonal },
    RegisterCategory: { screen: RegisterCategory },
    Login: { screen: Login },
},
{ 
    headerMode: 'none',
    initialRouteName: 'Login',
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

  
