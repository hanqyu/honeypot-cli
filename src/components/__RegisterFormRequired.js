import React from "react";
import styles from "./styles/__RegisterFormRequired";

import { Text, View, Modal, Image, Dimensions, TouchableOpacity, TextInput, Keyboard, DatePickerIOS } from "react-native";

import { connect } from 'react-redux';
import { setInputData } from '../store/actions/index'


const regexs = {
    email: /\S+@\S+\.\S+/,
    username: /\w.{2,10}/,
    password: /(?=.*\d)(?=.*[a-zA-Z]).{6,}/,
}

class RegisterFormRequired extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputData: {},
            inputValid: {}
        }
    }

    handleSubmit() {
        let email = ''
        let username = ''
        let password = ''
        let passwordCheck = ''
        this.setState({ inputValid: { ...this.inputValidate() } },
            () => {
                console.log(this.state.inputValid)
                email = this.state.inputValid.email
                username = this.state.inputValid.username
                password = this.state.inputValid.password
                passwordCheck = this.state.inputValid.passwordCheck
            }
        )
        console.log(username)
        if ((email == true) &&
            (username == true) &&
            (password == true) &&
            (passwordCheck == true)) {
            this.props.onSetInputData({
                ...this.state.inputData
            })
            return true;
        } else {
            return null;
        }
    }

    inputValidate() {
        const email = this.state.inputData.email;
        const username = this.state.inputData.username;
        const password = this.state.inputData.password;
        const passwordCheck = this.state.inputData.passwordCheck;

        let newInputValid = {
            ...this.state.inputValid
        }

        if ((email === undefined) || (regexs.email.test(email) === false)) {
            newInputValid.email = false
        } else {
            newInputValid.email = true
        }

        if ((username === undefined) || (regexs.username.test(username) === false)) {
            newInputValid.username = false
        } else {
            newInputValid.username = true
        }

        if ((password === undefined) || (regexs.password.test(password) === false)) {
            newInputValid.password = false
        } else {
            newInputValid.password = true
        }

        if ((passwordCheck === undefined) || (regexs.password.test(passwordCheck) === false) || (password !== passwordCheck)) {
            newInputValid.passwordCheck = false
        } else {
            newInputValid.passwordCheck = true
        }
        return newInputValid
        this.setState({ inputValid: { ...newInputValid } });
        console.log(this.state.inputValid)
    }

    render() {
        return (
            <View style={styles.container}>
                {/* label */}
                <View style={styles.formStateLabelContainer}>
                    <Text style={styles.formStateLabel}>필수정보</Text>
                    <Text style={styles.formStateLabel}>1/3</Text>
                </View>

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
                        onChangeText={(passwordCheck) => this.setState({ inputData: { ...this.state.inputData, passwordCheck } })}
                    />
                    <View style={styles.fieldDivider} />
                    {(this.state.inputValid.passwordCheck === false) &&
                        <Text style={styles.filedInputValidation}>
                            비밀번호를 확인해주세요.
                        </Text>}
                </View>
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        inputData: state.register.inputData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetInputData: (inputData) => dispatch(setInputData(inputData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(RegisterFormRequired);