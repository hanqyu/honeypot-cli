import React from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, Keyboard, TextInput, ActivityIndicator } from "react-native";
import InputScrollView from 'react-native-input-scroll-view';
import Toast, { DURATION } from 'react-native-easy-toast'
import AsyncStorage from '@react-native-community/async-storage';
import styles from "./styles/RegisterRequired";
import { connect } from 'react-redux';
import { setInputData, setToken, setUserId, setUserName, setLoading } from '../store/actions/index'

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback >
);

const regexs = {
    email: /\S+@\S+\.\S+/,
    username: /\w.{2,10}/,
    password: /(?=.*\d)(?=.*[a-zA-Z]).{6,}/,
}

const apiBaseUrl = __DEV__ ? 'http://127.0.0.1:8000/' : 'https://honeypot.hanqyu.com/'
const NEXT_VIEW = 'RegisterPersonal';


class RegisterRequired extends React.Component {

    state = {
        inputData: this.props.inputData,
        inputValid: this.props.inputValid,
        isLoading: this.props.isLoading
    }

    formValidate() {
        // return: true or false를 담은 object

        const email = this.state.inputData.email;
        const username = this.state.inputData.username;
        const password = this.state.inputData.password;
        const passwordCheck = this.state.inputData.passwordCheck;

        let inputValid = {
            email: false,
            username: false,
            password: false,
            passwordCheck: false
        };

        if ((email === undefined) || (regexs.email.test(email) === false)) {
            inputValid.email = false
        } else {
            inputValid.email = true
        }

        if ((username === undefined) || (regexs.username.test(username) === false)) {
            inputValid.username = false
        } else {
            inputValid.username = true
        }

        if ((password === undefined) || (regexs.password.test(password) === false)) {
            inputValid.password = false
        } else {
            inputValid.password = true
        }

        if ((passwordCheck === undefined) || (regexs.password.test(passwordCheck) === false) || (password !== passwordCheck)) {
            inputValid.passwordCheck = false
        } else {
            inputValid.passwordCheck = true
        }

        this.setState({ inputValid: { ...inputValid } })

        if ((inputValid.email == true) &&
            (inputValid.username == true) &&
            (inputValid.password == true) &&
            (inputValid.passwordCheck == true)) {
            this.props.onSetInputData({
                ...this.state.inputData
            })
            return true;
        } else {
            return false;
        }
    }


    async postForm() {
        this.setState({ isLoading: true });

        const response = await fetch(apiBaseUrl + 'api/v1/auth/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 3000,
            body: JSON.stringify({
                username: this.state.inputData.username,
                email: this.state.inputData.email,
                password: this.state.inputData.password
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
            this.props.onSetToken(responseJson.token.access)
            this.props.onSetUserId(responseJson.user.id)
            this.props.onSetUserName(responseJson.user.username)
            this.setState({ isLoading: false });
            this.props.navigation.navigate(NEXT_VIEW);
        } else {
            this.refs.toast.show(responseJson.error, 2000);
        }
    }

    handleForm() {
        if (this.formValidate()) {
            this.postForm();
        }
    }

    objectIsNotEmpty(obj) {
        if (Object.keys(obj).length === 0) {
            return false;
        }

        isNotEmpty = string => (string.length > 0) ? 1 : 0
        return Object.values(obj).map((val)=>isNotEmpty(val)).reduce((acc, val) => acc * val)
    }


    render() {
        return (
            <DismissKeyboard>
                <View style={styles.container}>
                    {/* toast */}
                    <Toast
                        style={styles.toastError}
                        position='top'
                        positionValue={60}
                        fadeInDuration={500}
                        fadeOutDuration={500}
                        opacity={0.7}
                        textStyle={styles.toastErrorText}
                        ref='toast' />

                    {/* chevronLeft */}
                    <View style={styles.upperBar}>
                        <TouchableOpacity style={styles.chevronLeft} onPress={() => { this.props.navigation.goBack() }}>
                            <Image source={require('../assets/icons/chevronLeft.png')} />
                        </TouchableOpacity>
                    </View>

                    {/* labelJumbo */}
                    <Text style={styles.labelJumbo}>
                        간단한 회원가입으로{'\n'}
                        허니팟을 즐겨보세요!
                    </Text>

                    {/* registerFormRequired */}
                    <View style={styles.formContainer}>
                        {/* label */}
                        <View style={styles.formStateLabelContainer}>
                            <Text style={styles.formStateLabel}>필수정보</Text>
                            <Text style={styles.formStateLabel}>1/3</Text>
                        </View>
                        <InputScrollView>
                            {/* email */}
                            <View>
                                <Text style={styles.fieldLabel}>이메일</Text>
                                <TextInput
                                    style={styles.fieldInput}
                                    placeholder='sample@email.com'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    autoFocus={true}
                                    autoCompleteType='email'
                                    clearButtonMode='while-editing'
                                    keyboardType='email-address'
                                    textContentType='emailAddress'
                                    returnKeyType='next'
                                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                                    onChangeText={(email) => this.setState({ inputData: { ...this.state.inputData, email } })}
                                />
                                <View style={styles.fieldDivider} />

                                {(this.state.inputValid.email === false) &&
                                    <Text style={styles.filedInputValidation}>
                                        올바른 이메일 주소를 입력하세요
                        </Text>}
                            </View>

                            {/* username */}
                            <View>
                                <Text style={styles.fieldLabel}>닉네임</Text>
                                <TextInput
                                    style={styles.fieldInput}
                                    placeholder='2자 이상. 10자 이하'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    clearButtonMode='while-editing'
                                    returnKeyType='next'
                                    ref={(input) => { this.secondTextInput = input; }}
                                    onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                                    onChangeText={(username) => this.setState({ inputData: { ...this.state.inputData, username } })}
                                />
                                <View style={styles.fieldDivider} />
                                {(this.state.inputValid.username === false) &&
                                    <Text style={styles.filedInputValidation}>
                                        닉네임은 2자 이상 10자 이하여야 해요.
                        </Text>}
                            </View>

                            {/* password */}
                            <View>
                                <Text style={styles.fieldLabel}>비밀번호</Text>
                                <TextInput
                                    style={styles.fieldInput}
                                    placeholder='6자 이상. 문자 + 숫자 포함'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    autoCompleteType='password'
                                    clearButtonMode='while-editing'
                                    clearTextOnFocus={true}
                                    secureTextEntry={true}
                                    textContentType='password'
                                    returnKeyType='next'
                                    ref={(input) => { this.thirdTextInput = input; }}
                                    onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                                    onChangeText={(password) => this.setState({ inputData: { ...this.state.inputData, password } })}
                                />
                                <View style={styles.fieldDivider} />
                                {(this.state.inputValid.password === false) &&
                                    <Text style={styles.filedInputValidation}>
                                        비밀번호는 6자 이상, 문자 + 숫자를 포함해야 해요.
                            </Text>}
                            </View>

                            {/* password validation */}
                            <View>
                                <Text style={styles.fieldLabel}>비밀번호 확인</Text>
                                <TextInput
                                    style={styles.fieldInput}
                                    placeholder='6자 이상. 문자 + 숫자 포함'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    autoCompleteType='password'
                                    clearButtonMode='while-editing'
                                    clearTextOnFocus={true}
                                    secureTextEntry={true}
                                    textContentType='password'
                                    returnKeyType='done'
                                    ref={(input) => { this.fourthTextInput = input; }}
                                    onChangeText={(passwordCheck) => this.setState({ inputData: { ...this.state.inputData, passwordCheck } })}
                                />
                                <View style={styles.fieldDivider} />
                                {(this.state.inputValid.passwordCheck === false) &&
                                    <Text style={styles.filedInputValidation}>
                                        비밀번호를 확인해주세요.
                                    </Text>}
                            </View>
                        </InputScrollView>
                    </View>


                    {/* button */}
                    <TouchableOpacity
                        onPress={() => this.handleForm()}
                        style={[
                            styles.buttonContainer,
                            { backgroundColor: this.objectIsNotEmpty(this.state.inputData) ? '#F5A623' : '#B9B9B9' }
                        ]}>
                        {this.state.isLoading && <ActivityIndicator size="small" color="#FFFFFF" />}
                        <Text style={styles.buttonText}>
                            다음
                        </Text>
                    </TouchableOpacity>
                </View>
            </DismissKeyboard>
        );
    };
};





const mapStateToProps = state => {
    return {
        isLoading: false,
        accessToken: state.accessToken,
        userId: state.userId,
        userName: state.userName,
        inputData: {
            email: "",
            username: "",
            password: "",
            passwordCheck: ""
        },
        inputValid: {},
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetInputData: (inputData) => dispatch(setInputData(inputData)),
        onSetLoading: (bool) => dispatch(setLoading(bool)),
        onSetToken: (accessToken) => dispatch(setToken(accessToken)),
        onSetUserId: (userId) => dispatch(setUserId(userId)),
        onSetUserName: (userName) => dispatch(setUserName(userName)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRequired);