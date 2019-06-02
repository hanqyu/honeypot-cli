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
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            modalVisible: false
        };
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    };
    
    handleForm() {
        this.props.navigation.navigate('RegisterCategory');
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
                                    date={this.state.chosenDate}
                                    onDateChange={this.setDate}
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
                            <View style={styles.genderConatiner}>
                                {/* 선택된 버튼 표시 필요함 */}
                                <TouchableOpacity style={styles.genderTextButton}>
                                    <Text style={styles.genderText}>남성</Text>
                                </TouchableOpacity>
                                <View style={styles.buttonDivider} />
                                <TouchableOpacity style={styles.genderTextButton}>
                                    <Text style={styles.genderText}>여성</Text>
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
                                    {this.state.chosenDate.toLocaleDateString('ko')}
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
        inputData: state.register.inputData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetInputData: (inputData) => dispatch(setInputData(inputData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPersonal);