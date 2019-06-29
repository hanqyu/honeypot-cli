import React from "react";
import { ActivityIndicator, View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, Keyboard, TextInput, KeyboardAvoidingView } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import Toast, { DURATION } from 'react-native-easy-toast'
import { Header } from 'react-navigation';
import styles from "../containers/styles/Login";
import { connect } from 'react-redux';
import { setToken, setUserId, setUserName, setLoading } from '../store/actions/index'

const apiBaseUrl = __DEV__ ? 'http://127.0.0.1:8000/' : 'http://honeypot.hanqyu.com/'
const NEXT_VIEW = 'Home';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback >
);
const reEmail = /\S+@\S+\.\S+/;


class Login extends React.Component {

    state = {
        isLoading: this.props.isLoading
    }

    handleSubmit() {
        if (this.inputValidate()) {
            this.postValidatedData();
        }
    }


    inputValidate() {
        const email = this.state.email;
        const password = this.state.password;

        if (email === undefined) {
            this.refs.toast.show('이메일을 입력해주세요');
            return null
        }

        if (password === undefined) {
            this.refs.toast.show('비밀번호를 입력해주세요');
            return null
        }

        if (reEmail.test(email) === false) {
            this.refs.toast.show('올바른 이메일 주소를 입력하세요');
            return null;
        };

        return true;

    }

    async postValidatedData() {
        this.setState({isLoading: true});

        const response = await fetch(apiBaseUrl + 'api/v1/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
        });
        const responseJson = await response.json();

        if (response.ok) {
            try {
                await AsyncStorage.setItem('accessToken', responseJson.token.access)
                await AsyncStorage.setItem('refreshToken', responseJson.token.refresh)
            } catch (e) {
                this.refs.toast.show('알 수 없는 오류가 발생하였습니다.', 2000)
                return null
            }
            this.setState({isLoading: false});
            this.props.onSetToken(responseJson.token.access)
            this.props.onSetUserId(responseJson.user.id)
            this.props.onSetUserName(responseJson.user.username)
            this.props.navigation.navigate(NEXT_VIEW);
        } else {
            this.refs.toast.show(responseJson.error, 2000);
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <DismissKeyboard>
                <View style={styles.container}>
                    <Toast
                        style={styles.toastError}
                        position='top'
                        positionValue={60}
                        fadeInDuration={500}
                        fadeOutDuration={500}
                        opacity={0.7}
                        textStyle={styles.toastErrorText}
                        ref='toast' />
                    <KeyboardAvoidingView
                        behavior="position"
                        keyboardVerticalOffset={Header.HEIGHT + 30}>
                        <View>
                            {/* logoImage */}
                            <View>
                                <Image style={styles.logoImage} source={require('../assets/icons/icon.png')} />
                            </View>

                            {/* logoText */}
                            <Text style={styles.logoText}>Honey pot</Text>
                        </View>


                        <View>
                            <View>
                                {/* fieldInputContainer */}
                                <View style={styles.fieldInputContainer}>

                                    {/* fieldInputImage */}
                                    <View style={styles.fieldInputImage}>
                                        <Image source={require('../assets/icons/user.png')} />
                                    </View>

                                    {/* fieldInputText */}
                                    <TextInput
                                        style={styles.fieldInputText}
                                        placeholder='Email'
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        autoFocus={true}
                                        autoCompleteType='email'
                                        clearButtonMode='while-editing'
                                        keyboardType='email-address'
                                        textContentType='emailAddress'
                                        onChangeText={(email) => this.setState({ email })}
                                    />

                                </View>
                                {/* fieldDivider */}
                                <View style={styles.fieldDivider} />
                            </View>

                            <View>
                                {/* fieldInputContainer */}
                                <View style={styles.fieldInputContainer}>

                                    {/* fieldInputImage */}
                                    <View style={styles.fieldInputImage}>
                                        <Image source={require('../assets/icons/lock.png')} />
                                    </View>

                                    {/* fieldInputText */}
                                    <TextInput
                                        style={styles.fieldInputText}
                                        placeholder='Password'
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        autoCompleteType='password'
                                        clearButtonMode='while-editing'
                                        clearTextOnFocus={true}
                                        secureTextEntry={true}
                                        textContentType='password'
                                        onChangeText={(password) => this.setState({ password })}
                                    />

                                </View>
                                {/* fieldDivider */}
                                <View style={[styles.fieldDivider, { marginBottom: 44 }]} />
                            </View>

                            <View>
                                {/* loginButtonContainer */}
                                <TouchableOpacity
                                    onPress={() => this.handleSubmit()}
                                    style={styles.loginButtonContainer}>
                                    {this.state.isLoading && <ActivityIndicator size="small" color="#FFFFFF" />}
                                    {/* loginButtonText */}
                                    <Text style={styles.loginButtonText}>로그인</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>


                    <KeyboardAvoidingView
                        behavior="position"
                        keyboardVerticalOffset={Header.HEIGHT - 100}>

                        {/* footerText */}
                        <Text style={styles.footerText}>아직 회원이 아니신가요?</Text>

                        {/* footerTextButton */}
                        <TouchableOpacity
                            onPress={() => navigate('RegisterRequired')}>
                            <Text style={styles.footerTextButton}>회원가입</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </DismissKeyboard >
        );
    };
};


const mapStateToProps = state => {
    return {
        isLoading: false,
        accessToken: state.accessToken,
        userId: state.userId,
        userName: state.userName,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetLoading: (bool) => dispatch(setLoading(bool)),
        onSetToken: (accessToken) => dispatch(setToken(accessToken)),
        onSetUserId: (userId) => dispatch(setUserId(userId)),
        onSetUserName: (userName) => dispatch(setUserName(userName)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);