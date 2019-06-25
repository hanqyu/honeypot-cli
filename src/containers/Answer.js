import React from "react";
import { ActivityIndicator, View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, Keyboard, TextInput, KeyboardAvoidingView } from "react-native";
import { Header } from 'react-navigation';
import styles from "../containers/styles/Answer";
import QuestionInAnswerCard from "../components/QuestionInAnswerCard.js";
import AnswerList from "../components/AnswerList";
import { connect } from 'react-redux';
import { setLoading } from '../store/actions/index'

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback >
);

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            dataSource: []
        };
        this.fetchAnswer = this.fetchAnswer.bind(this);
    }

    fetchAnswer(questionId) {
        this.props.onSetLoading(true)
        
        fetch('http://127.0.0.1:8000/api/v1/question/' + questionId + '/answer/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.accessToken,
            },
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(responseJson => {
            this.setState({
                dataSource: responseJson.result,
            })
        }).then(() => {
            this.props.onSetLoading(false)
        }).catch(error => {
            console.error(error);
            return { name: "network error", description: "" };
        });
    }
    
    componentDidMount() {
        this.fetchAnswer(this.state.question.id);
    }

    render() {
        if (this.props.isLoading) {
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
                            questionId={this.state.question.id}
                            questionText={this.state.question.text}
                            time={this.state.question.time}
                        />
                        <AnswerList
                            dataSource={this.state.dataSource}
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


const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        accessToken: state.auth.accessToken,
        userId: state.auth.userId,
        userName: state.auth.userName,
        question: state.answer.question
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetLoading: (bool) => dispatch(setLoading(bool)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);