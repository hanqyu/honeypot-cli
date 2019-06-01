import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { getToken } from '../store/actions/index'
import AsyncStorage from '@react-native-community/async-storage';


class AuthLoading extends React.Component {

    async componentDidMount() {
        this._bootstrapAsync();
    };

    _bootstrapAsync = async () => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        this.props.navigation.navigate(accessToken ? 'Home' : 'Login');
    };

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
        token: state.token,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getToken: () => dispatch(getToken()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);