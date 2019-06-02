import React from "react";
import styles from "./styles/RegisterCategory";

import { Text, View, Modal, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback, TextInput, Keyboard, DatePickerIOS } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { connect } from 'react-redux';
import { setInputData } from '../store/actions/index'

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback >
);




class RegisterCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    handleForm() {
        this.props.navigation.navigate('Home')
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
                    {/* RegisterFormCategory */}
                    <View style={styles.formContainer}>
                        {/* label */}
                        <View style={[styles.formStateLabelContainer, { marginBottom: 27 }]}>
                            <Text style={styles.formStateLabel}>관심사 선택</Text>
                            <Text style={styles.formStateLabel}>3/3</Text>
                        </View>

                        {/* Category */}
                        <View style={styles.categoriesContainer}>

                            <LinearGradient colors={["#f5a62366", "#f5a62366"]} selected={false} style={styles.categoryBox}>
                                <Text style={styles.categoryText}>
                                    sdㄴㅇㅁㅇㅁㄴㅇ
                        </Text>
                            </LinearGradient>
                            <LinearGradient colors={["#f5a62366", "#f5a62366"]} selected={false} style={styles.categoryBox}>
                                <Text style={styles.categoryText}>
                                    여행
                        </Text>
                            </LinearGradient>
                            <LinearGradient colors={["#f5a62366", "#f5a62366"]} selected={false} style={styles.categoryBox}>
                                <Text style={styles.categoryText}>
                                    카테ㄴ
                        </Text>
                            </LinearGradient>
                            <LinearGradient colors={["#f5a62366", "#f5a62366"]} selected={false} style={styles.categoryBox}>
                                <Text style={styles.categoryText}>
                                    카테고리1
                        </Text>
                            </LinearGradient>
                            <LinearGradient colors={["#f5a62366", "#f5a62366"]} selected={false} style={styles.categoryBox}>
                                <Text style={styles.categoryText}>
                                    카테고리1
                        </Text>
                            </LinearGradient>
                            <LinearGradient colors={["#f5a62366", "#f5a62366"]} selected={false} style={styles.categoryBox}>
                                <Text style={styles.categoryText}>
                                    ㄴㅇㅁㄴㅇㄴㅁㅇㄴ
                        </Text>
                            </LinearGradient>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCategory);