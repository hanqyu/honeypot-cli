import React from "react";
import styles from "./styles/RegisterPersonal";
import Toast, { DURATION } from 'react-native-easy-toast'
import { Text, View, Modal, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback, TextInput, Keyboard, DatePickerIOS, ActivityIndicator } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { connect } from 'react-redux';
import { setInputData } from '../store/actions/index'

const NEXT_VIEW = 'RegisterCategory';
const apiBaseUrl = __DEV__ ? 'http://127.0.0.1:8000/' : 'https://honeypot.hanqyu.com/'


const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback >
);

class RegisterPersonal extends React.Component {

    state = {
        modalVisible: false,
        inputData: {
            gender: { male: 0, female: 0 },
            birthDate: new Date()
        },
        isLoading: false
    }

    setDate(selectedDate) {
        this.setState({
            inputData: {
                ...this.state.inputData,
                birthDate: selectedDate
            }
        })
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    };

    async postForm() {
        this.setState({ isLoading: true });

        const body = this.parsingBody();

        if (body === false) {
            this.props.navigation.navigate(NEXT_VIEW);
            return false;
        }

        console.log(this.props.userId);
        const response = await fetch(apiBaseUrl + 'api/v1/auth/user/' + this.props.userId + '/', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 3000,
            body: JSON.stringify({
                ...body
            }),
        });
        const responseJson = await response.json();
        if (response.ok) {
            this.setState({ isLoading: false });
            this.props.navigation.navigate(NEXT_VIEW);
        } else {
            this.refs.toast.show(responseJson.error, 2000);
        }
    }

    parsingBody() {
        let body = {};
        if (this.state.inputData.gender.male) {
            body.gender = 'M'
        } else if (this.state.inputData.gender.female) {
            body.gender = 'F'
        }

        const fourteenYear = 1000 * 60 * 60 * 24 * 365 * 14;
        const today = new Date();
        if (today.getTime() - this.state.inputData.birthDate.getTime() >= fourteenYear) {
            body.birthDate = birthDate
        }

        if (Object.entries(body).length === 0) {
            return false;
        }

        return body
    }

    handleForm() {
        this.postForm();
    }

    handlerGenderButton(selected) {
        if (selected === 'male') {
            this.setState({
                inputData: {
                    ...this.state.inputData,
                    gender: { male: 1, female: 0 }
                }
            })
        } else if (selected === 'female') {
            this.setState({
                inputData: {
                    ...this.state.inputData,
                    gender: { male: 0, female: 1 }
                }
            })
        }
    }

    objectIsNotEmpty(obj) {
        return Object.values(obj).reduce((acc, val) => acc + val)
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

                    {/* RegisterPersonal */}
                    <View style={styles.formContainer}>
                        {/* dateModal */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalVisible}
                            closeDisplay={() => this.setState({ modalVisible: false })}
                            onRequestClose={this.modalVisible}
                        >
                            <View style={styles.birthDatePicker}>
                                <View style={styles.birthDatePickerHeader}>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ modalVisible: false })}
                                    >
                                        <Text style={styles.birthDatePickerHeaderConfirm}>확인</Text>
                                    </TouchableOpacity>
                                </View>
                                <DatePickerIOS
                                    date={this.state.inputData.birthDate}
                                    onDateChange={(date) => this.setDate(date)}
                                    locale='ko'
                                    mode='date'
                                />
                            </View>
                        </Modal>
                        {/* label */}
                        <View style={styles.formStateLabelContainer}>
                            <Text style={styles.formStateLabel}>선택정보</Text>
                            <Text style={styles.formStateLabel}>2/3</Text>
                        </View>

                        {/* gender */}
                        <View>
                            <Text style={styles.fieldLabel}>성별</Text>
                            <View style={styles.genderButtonsConatiner}>
                                {/* 선택된 버튼 표시 필요함 */}
                                <TouchableOpacity
                                    onPress={() => this.handlerGenderButton('male')}
                                    style={
                                        this.state.inputData.gender.male ? styles.genderButtonSelected : styles.genderButton
                                    }
                                >
                                    <Text style={
                                        this.state.inputData.gender.male ? styles.genderButtonTextSelected : styles.genderButtonText
                                    }>남성</Text>
                                </TouchableOpacity>
                                <View style={styles.genderButtonDivider} />
                                <TouchableOpacity
                                    onPress={() => this.handlerGenderButton('female')}
                                    style={
                                        this.state.inputData.gender.female ? styles.genderButtonSelected : styles.genderButton
                                    }
                                >
                                    <Text style={
                                        this.state.inputData.gender.female ? styles.genderButtonTextSelected : styles.genderButtonText
                                    }>여성</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* birthDate */}
                        <View>
                            <Text style={styles.fieldLabel}>생년월일</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalVisible(true);
                                }}
                            >
                                <Text style={styles.birthDateText}>
                                    {this.state.inputData.birthDate.toLocaleDateString('ko')}
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.fieldDivider} />
                        </View>
                    </View>
                    {/* button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => this.handleForm()}>
                        {this.state.isLoading && <ActivityIndicator size="small" color="#FFFFFF" />}
                        <Text style={styles.buttonText}>
                            다음
                        </Text>
                    </TouchableOpacity>
                </View>
            </DismissKeyboard>
        )
    }
}


const mapStateToProps = state => {
    return {
        accessToken: state.accessToken,
        userId: state.userId,
        userName: state.userName,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetInputData: (inputData) => dispatch(setInputData(inputData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPersonal);