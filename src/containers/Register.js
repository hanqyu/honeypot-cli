import React from "react";
import { ActivityIndicator, View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, Keyboard, TextInput, KeyboardAvoidingView } from "react-native";
import { Header } from 'react-navigation';
import { RegisterFormRequired, RegisterFormPersonal, RegisterFormCategory } from '../components/RegisterForm';
import styles from "../containers/styles/Register";


const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback >
);

const reEmail = /\S+@\S+\.\S+/;
const rePassword = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/;

const inputValidate = () => {
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

    if (password.length < 6) {
        this.refs.toast.show('비밀번호는 6자 이상이어야 해요');
        return null;
    };

    if (rePassword.test(password) === false) {
        this.refs.toast.show('비밀번호는 숫자와 문자를 반드시 포함해야 해요');
        return null;
    };
}

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            currentFormId: 0,
            modalVisible: false,
            inputData: {},
        };
        this.handleForm = this.handleForm.bind(this)
    }
    completeForm() {
        // validate with this.state.inputData

        // send request POST with this.state.inputData

        // get response 
        
        // save token -> redux

        // navigate next screen
    }

    handleForm() {
        let currentFormId = this.state.currentFormId;
        if (currentFormId < 2) {
            this.setState({ currentFormId: currentFormId + 1 });
            
            // save data

            // nextComp mount
        } else {
            // this.completeForm();
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1 }}>
                    <ActivityIndicator style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} />
                </View>
            )
        }

        return (
            <DismissKeyboard>
                <View style={styles.container}>
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
                    {(this.state.currentFormId == 0) && (<RegisterFormRequired
                    />)}

                    {/* registerFormPersonal */}
                    {(this.state.currentFormId == 1) && (<RegisterFormPersonal

                    />)}

                    {/* registerFormCategory */}
                    {(this.state.currentFormId == 2) && (<RegisterFormCategory

                    />)}

                    {/* button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => this.handleForm()}>
                        <Text style={styles.buttonText}>
                            다음
                        </Text>
                    </TouchableOpacity>
                </View>
            </DismissKeyboard>
        );
    };
};