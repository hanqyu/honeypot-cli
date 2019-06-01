import React from "react";
import { ActivityIndicator, View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, Keyboard, TextInput, KeyboardAvoidingView } from "react-native";
import { Header } from 'react-navigation';
import styles from "../containers/styles/Answer";
import QuestionInAnswerCard from "../components/QuestionInAnswerCard.js";
import AnswerList from "../components/AnswerList";


const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback >
);

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.questionId = this.props.navigation.getParam('questionId');
        this.state = {
            ...props,
            isLoading: true,
        };
        this.fetchAnswer = this.fetchAnswer.bind(this);
        this.state.bearer_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTYxMjg3NDQ4LCJqdGkiOiI5ZTdiMmI3NTRiMjg0OWZlYmVjMzM0MTc0Mjc2ZmYyYyIsInVzZXJfaWQiOjJ9.0wmunQASomn39C7-ZLmW80a2JxdRzmXvy5z5OxHUevU';
    }

    async fetchAnswer(questionId) {
        this.setState({
            isLoading: true
        })

        await fetch('http://127.0.0.1:8000/api/v1/question/' + questionId + '/answer/', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.state.bearer_token,
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if (response.status == 200) {
                const responseJson = response.json();
                return responseJson
            }
        }).then(responseJson => {
            this.setState({
                isLoading: false,
                dataSource: responseJson,
            })
        }).catch(error => {
            console.error(error);
            return { name: "network error", description: "" };
        });
    }

    componentDidMount() {
        this.fetchAnswer(this.questionId);
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, alignSelf: 'center' }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <DismissKeyboard>
                <View>
                    <View style={styles.container}>

                        <View style={styles.upperBar}>
                            {/* chevronLeft */}
                            <TouchableOpacity style={styles.chevronLeft} onPress={() => { this.props.navigation.goBack() }}>
                                <Image source={require('../assets/icons/chevronLeft.png')} />
                            </TouchableOpacity>

                            {/* userAvatar */}
                            <View style={styles.userAvatar}>
                                <Image style={styles.userAvatar} source={require('../assets/images/default.jpg')} />
                            </View>
                        </View>
                        
                        <QuestionInAnswerCard
                            questionId={this.state.dataSource.question.id}
                            questionText={this.state.dataSource.question.text}
                            time={this.state.dataSource.question.created_at}
                        />
                        <AnswerList
                            dataSource={this.state.dataSource.result}
                        />

                    </View>
                    
                    <KeyboardAvoidingView
                        behavior="position"
                        keyboardVerticalOffset={Header.HEIGHT + 30}
                        style={styles.answerTextInputKeyboardAvoidingView}>
                        {/* answerTextInput */}
                        <View style={styles.answerTextInputContainer}>
                            <View style={styles.answerTextInputBox}>
                                <TextInput
                                    placeholder="답변을 입력해주세요"
                                    style={styles.answerTextInput}
                                    multiline={true}
                                    autoCorrect={false}
                                    onChangeText={(text) => {
                                        this.setState({ text })
                                    }}
                                    onContentSizeChange={(event) => {
                                        this.setState({ height: event.nativeEvent.contentSize.height })
                                    }}
                                    style={styles.answerTextInput}
                                    value={this.state.text}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>

                </View>
            </DismissKeyboard>
        )
    }
}