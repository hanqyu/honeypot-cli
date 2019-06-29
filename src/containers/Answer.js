import React from "react";
import { ActivityIndicator, View, Text, Alert, TouchableOpacity, TouchableWithoutFeedback, Image, Keyboard, TextInput, KeyboardAvoidingView } from "react-native";
import { Header } from 'react-navigation';
import Toast, { DURATION } from 'react-native-easy-toast'
import styles from "../containers/styles/Answer";
import QuestionInAnswerCard from "../components/QuestionInAnswerCard.js";
import AnswerList from "../components/AnswerList";
import { connect } from 'react-redux';
import { setLoading, setViewingQuetstion } from '../store/actions/index'
import { ScrollView } from "react-native-gesture-handler";
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';




const apiBaseUrl = __DEV__ ? 'http://127.0.0.1:8000/' : 'http://honeypot.hanqyu.com/'
const TOAST_DURATION = 2000

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback >
);

class Answer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            ...props,
            isLoading: true,
            isMyQuestion: '',
            hasSelectedAnswer: '',
            dataSource: []
        };
    }

    fetchAnswer(questionId) {
        this.setState({ isLoading: true })
        fetch(apiBaseUrl + 'api/v1/question/' + questionId + '/answer/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.accessToken,
            },
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return;
            }
        }).then(responseJson => {
            console.log(responseJson)
            console.l
            this.setState({
                alreadyVoted: responseJson.question.requested_user_voted,
                isMyQuestion: responseJson.question.is_my_question,
                hasSelectedAnswer: responseJson.question.has_selected_answer,
                dataSource: responseJson.result,
                isLoading: false
            })
        }).then(() => {

        }).catch(error => {
            console.error(error);
            return { name: "network error", description: "" };
        });

    }

    handleSendButton() {
        if (this.state.text) {
            this.postAnswer(this.state.question.id)
        }
    }

    handleToast(textMessage) {
        this.refs.toastError.show(textMessage, TOAST_DURATION);
    }

    async postAnswer() {
        await fetch(apiBaseUrl + 'api/v1/answer/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.props.accessToken,
                },
                body: JSON.stringify({
                    question: this.state.question.id,
                    anonymous: false,
                    text: this.state.text
                })
            }).then(response => {
                if (response.ok) {
                    this.fetchAnswer(this.state.question.id);
                }
            }).catch(error => {
                this.props.onSetLoading(false)
                return { name: "network error", description: "" };
            });
    }

    componentDidMount() {
        this.fetchAnswer(this.state.question.id);
    }

    setScrollHeight = (width, height) => this.setState({ scrollHeight: height });

    postSelectAnswer(answerId) {
        this.setState({ isLoading: true })

        fetch(apiBaseUrl + 'api/v1/answer/' + answerId + '/select/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.accessToken,
            },
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return;
            }
        }).then(() => {
            this.fetchAnswer(this.state.question.id);
        })

        this.setState({ isLoading: false })
    }

    handleSelectAnswer(answerId) {
        Alert.alert(
            '답변 채택하기',
            '이 답변을 채택할까요? 취소할 수 없어요',
            [
                { 'text': '취소', 
                onPress: () => { return false } },
                { 'text': '채택', 
                onPress: () => { this.postSelectAnswer(answerId); } }
            ]
        )
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
                <View style={styles.container}>
                    <StickyHeaderFooterScrollView
                        renderStickyHeader={() => (
                            <View>
                                <Toast
                                    style={styles.toastError}
                                    position='top'
                                    positionValue={60}
                                    fadeInDuration={500}
                                    fadeOutDuration={500}
                                    opacity={0.7}
                                    textStyle={styles.toastErrorText}
                                    ref='toast' />
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
                            </View>
                        )}
                        renderStickyFooter={() => (
                            <KeyboardAvoidingView
                                ref="keyboardAvoidingView"
                                behavior="padding"
                                keyboardVerticalOffset={Header.HEIGHT + 30}
                                style={styles.answerTextInputKeyboardAvoidingView}
                            >
                                {/* <View style={styles.answerTextInputBackground}></View> */}

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
                                    {/* sendButton */}
                                    <TouchableOpacity
                                        style={styles.sendButton}
                                        onPress={() => this.handleSendButton()}>
                                        <Image style={styles.sendButtonImage}
                                            source={require('../assets/icons/send.png')} />
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAvoidingView>
                        )}
                    >
                        <ScrollView
                            keyboardDismissMode="on-drag"
                            onContentSizeChange={this.setScrollHeight}
                            contentContainerStyle={{ height: this.state.scrollHeight }}>
                            <TouchableWithoutFeedback>
                                <View>
                                    <QuestionInAnswerCard
                                        alreadyVoted={this.state.question.alreadyVoted}
                                        questionId={this.state.question.id}
                                        questionText={this.state.question.text}
                                        time={this.state.question.time}
                                    />
                                    <AnswerList
                                        isMyQuestion={this.state.isMyQuestion}
                                        hasSelectedAnswer={this.state.hasSelectedAnswer}
                                        dataSource={this.state.dataSource}
                                        handleSelectAnswer={(answerId) => this.handleSelectAnswer(answerId)}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </ScrollView>
                    </StickyHeaderFooterScrollView>
                </View>
            </DismissKeyboard >
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
        onSetViewingQuestion: (question) => dispatch(setViewingQuetstion(question))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);