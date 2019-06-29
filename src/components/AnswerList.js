import React from "react";
import styles from "./styles/AnswerList";

import { Text, View, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { connect } from 'react-redux';
import { setToken, setUserId, setUserName, setLoading, setViewingQuetstion } from '../store/actions/index'

const apiBaseUrl = __DEV__ ? 'http://127.0.0.1:8000/' : 'http://honeypot.hanqyu.com/'
// const apiBaseUrl = 'http://honeypot.hanqyu.com/'

class AnswerList extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            ...props
        };
    }



    render() {
        const listIsNotEmpty = (this.state.dataSource.length !== 0);

        return (
            <View style={styles.container}>
                <View style={styles.contentsContainer}>
                    {/* upperBar */}
                    <View style={styles.upperBar}>
                        {/* labelAnswerBy */}
                        <Text style={styles.labelAnswerBy}>Answered{'\n'}By</Text>
                        {(listIsNotEmpty) && (
                            // upperRight Information
                            <View style={styles.upperRightArea}>
                                {/* answered people */}
                                <View style={styles.answeredPeopleContainer}>
                                    <Image style={styles.answeredPeopleImageBig} source={require('../assets/images/default.jpg')} />
                                    {/* hasSelectedAnswer */}
                                    <LinearGradient colors={['#ffec00', '#ff8500']} style={styles.answeredPeopleImageSelected} />
                                    <Image style={styles.answeredPeopleImageSmallLeft} source={require('../assets/images/default.jpg')} />
                                    <Image style={styles.answeredPeopleImageSmallRight} source={require('../assets/images/default.jpg')} />
                                </View>
                                {/* moreHorizontal */}
                                <TouchableOpacity style={styles.moreHorizontal}>
                                    <Image style={styles.moreHorizontal} source={require('../assets/icons/moreHorizontal.png')} />
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>

                    {/* listContainer */}
                    <View style={styles.listContainer}>
                        {/* leftLineBar */}
                        {listIsNotEmpty && (<View style={styles.leftLineBar} />)}

                        {/* answerItemContainer */}
                        <View style={styles.answerItemContainer}>
                            {/* empty status text */}
                            {(listIsNotEmpty == false) && (
                                <View style={styles.answerColumnContainer}>
                                    {/* answerRowContainer */}
                                    <View style={styles.answerRowContainer}>
                                        {/* leftLineBarCircle */}
                                        <View style={[styles.leftLineBarCircle, { marginLeft: 0 }]} />
                                        {/* noAnswerView */}
                                        <View style={styles.noAnswerView}>
                                            <Text style={styles.noAnswerText}>
                                                아직 답변이 없는 질문이에요
                                        </Text>
                                        </View>
                                    </View>
                                </View>
                            )}

                            {this.state.dataSource.map((item, index) => (
                                <View style={styles.answerColumnContainer}>
                                    {/* answerRowContainer */}
                                    <View style={styles.answerRowContainer}>
                                        {/* leftLineBarCircle */}
                                        <View style={styles.leftLineBarCircle} />
                                        {/* answerRow */}
                                        <View style={styles.answerRow}>
                                            {/* answerUserImage */}
                                            <Image style={styles.answerUserImage} source={{ uri: item.user_avatar }} />
                                            {/* answerText */}
                                            <Text style={styles.answerText}>
                                                {item.text}
                                            </Text>
                                        </View>
                                    </View>
                                    {/* selectAnswer */}
                                    {
                                        (this.state.hasSelectedAnswer) ?
                                            (item.is_selected) &&
                                            <Text style={styles.selectedAnswer}>채택답변</Text>
                                            :
                                            (this.state.isMyQuestion) ? <TouchableOpacity
                                                onPress={() => this.props.handleSelectAnswer(item.id)}
                                                style={styles.selectAnswerButton}>
                                                <Text style={styles.selectAnswerText}>채택하기</Text>
                                            </TouchableOpacity>
                                                :
                                                null
                                    }
                                </View>
                            ))}
                        </View>
                    </View>
                    {listIsNotEmpty && (<LinearGradient colors={['#FFFFFF00', '#FFFFFF']} style={styles.bottomGradient}></LinearGradient>)}
                </View>
            </View >
        );
    };
};


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
        onSetToken: (accessToken) => dispatch(setToken(accessToken)),
        onSetUserId: (userId) => dispatch(setUserId(userId)),
        onSetUserName: (userName) => dispatch(setUserName(userName)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerList);