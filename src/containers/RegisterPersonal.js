import React from "react";
import styles from "./styles/RegisterPersonal";

import { Text, View, Modal, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback, TextInput, Keyboard, DatePickerIOS } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { connect } from 'react-redux';
import { setInputData } from '../store/actions/index'


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

    handleForm() {
        this.props.navigation.navigate('RegisterCategory');
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

    render() {
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetInputData: (inputData) => dispatch(setInputData(inputData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPersonal);