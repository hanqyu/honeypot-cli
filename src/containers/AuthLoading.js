import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { setToken } from '../store/actions/index'
import AsyncStorage from '@react-native-community/async-storage';


const apiBaseUrl = __DEV__ ? 'http://127.0.0.1:8000/' : 'https://honeypot.hanqyu.com/'

class AuthLoading extends React.Component {

    componentDidMount() {
        this._bootstrapAsync();
    };

    _bootstrapAsync = async () => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        if (accessToken) {
            this.verifyToken(accessToken);
        } else {
            this.props.navigation.navigate('Login');
        }
    }

    verifyToken = async (accessToken) => {
        const response = await fetch(apiBaseUrl + 'api/v1/auth/token/verify/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: accessToken
            })
        })
        if (response.ok) {
            this.props.onSetToken(accessToken);
            AsyncStorage.setItem('accessToken', accessToken);
            console.log(this.props)
            this.props.navigation.navigate('Home');
        } else {
            this.refreshToken();
        }

    }

    refreshToken = async () => {
        const refreshToken = await AsyncStorage.getItem('refreshToken')
        const response = await fetch(apiBaseUrl + 'api/v1/auth/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                refresh: refreshToken,
            }),
        })

        if (response.ok) {
            const responseJson = await response.json();
            this.props.onSetToken(responseJson.access);
            await AsyncStorage.setItem('accessToken', responseJson.access);
            this._bootstrapAsync();
        } else {
            console.log('FAIL: Token Refresh');
            this.props.navigation.navigate('Login');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const mapStateToProps = state => {
    return {
        accessToken: state.auth.accessToken,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetToken: (accessToken) => dispatch(setToken(accessToken))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);