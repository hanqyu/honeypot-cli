import React from "react";
import styles from "./styles/RegisterForm";

import { Text, View, Modal, Image, Dimensions, TouchableOpacity, TextInput, Keyboard, DatePickerIOS } from "react-native";
import LinearGradient from "react-native-linear-gradient";


export class RegisterFormRequired extends React.Component {
    constructor(props) {
        super(props);
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
                        placeholder='sample@email.com' />
                    <View style={styles.fieldDivider} />
                </View>

                {/* username */}
                <View>
                    <Text style={styles.fieldLabel}>닉네임</Text>
                    <TextInput
                        style={styles.fieldLabel} />
                    <View style={styles.fieldDivider} />
                </View>

                {/* password */}
                <View>
                    <Text style={styles.fieldLabel}>비밀번호</Text>
                    <TextInput
                        style={styles.fieldLabel} />
                    <View style={styles.fieldDivider} />
                </View>

                {/* password validation */}
                <View>
                    <Text style={styles.fieldLabel}>비밀번호 확인</Text>
                    <TextInput
                        style={styles.fieldLabel} />
                    <View style={styles.fieldDivider} />
                </View>
            </View>
        )
    }
}


export class RegisterFormPersonal extends React.Component {
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

    render() {
        return (
            <View style={styles.container}>
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
        )
    }
}

export class RegisterFormCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* label */}
                <View style={[styles.formStateLabelContainer, {marginBottom: 27}]}>
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
        )
    }
}