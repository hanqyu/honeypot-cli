import React from "react";
import styles from "./styles/CardItem";

import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { connect } from 'react-redux';
import { setViewingQuetstion } from '../store/actions/index'

const timeToKorean = (time) => {
	var min = 60 * 1000;
	var current = new Date()
	var date = new Date(time);
	var minsAgo = Math.floor((current - date) / (min));

	var result = {
		'raw': date.getFullYear() + '-' + (date.getMonth() + 1 > 9 ? '' : '0') + (date.getMonth() + 1) + '-' + (date.getDate() > 9 ? '' : '0') + date.getDate() + ' ' + (date.getHours() > 9 ? '' : '0') + date.getHours() + ':' + (date.getMinutes() > 9 ? '' : '0') + date.getMinutes() + ':' + (date.getSeconds() > 9 ? '' : '0') + date.getSeconds(),
		'formatted': '',
	};

	if (minsAgo === 0) {
		result.formatted = '방금';
	} else if (minsAgo < 60) { // 1시간 내
		result.formatted = minsAgo + '분 전';
	} else if (minsAgo < 60 * 24) { // 하루 내
		result.formatted = Math.floor(minsAgo / 60) + '시간 전';
	} else if (minsAgo < 60 * 24 * 7) { // 일주일 이내
		result.formatted = Math.floor(minsAgo / 60 / 24) + '일 전';
	} else if (minsAgo < 60 * 24 * 7 * 31) { // 한달 이내
		result.formatted = Math.floor(minsAgo / 60 / 24 / 7) + '주 전';
	} else {
		result.formatted = Math.floor(minsAgo / 60 / 24 / 7 / 31) + '달 전';
	};

	return result.formatted;
}
const maxlimit = 127;

class CardItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			...props
		}
		this.state.timeKor = timeToKorean(this.state.time);
		this.state.selectedAnswerTextTruncated = '';

		if (this.state.hasSelectedAnswer && this.state.selectedAnswerText) {
			this.state.questionTextTruncated = (this.state.questionText.length > maxlimit / 3) ? ((this.state.questionText.substring(0, maxlimit / 3 - 3)) + '...') : this.state.questionText
			this.state.selectedAnswerTextTruncated = (this.state.selectedAnswerText.length > maxlimit / 3) ? ((this.state.selectedAnswerText.substring(0, maxlimit / 3 - 3)) + '...') : this.state.selectedAnswerText;
		} else {
			this.state.questionTextTruncated = (this.state.questionText.length > maxlimit) ? ((this.state.questionText.substring(0, maxlimit - 3)) + '...') : this.state.questionText;
		}
	}

	handleButtonAnswer() {
		this.props.onSetViewingQuestion({ id: this.props.questionId, text: this.props.questionText, time: this.props.time, alreadyVoted: this.props.alreadyVoted })
		this.props.navigation.navigate('Answer')
	}

	handleVotingCount(type) {
		if (type == 'minus') {
			this.setState({ 
				votingCount: this.state.votingCount - 1, 
				alreadyVoted: !this.state.alreadyVoted
			})
		} else if (type == 'plus') {
			this.setState({ 
				votingCount: this.state.votingCount + 1, 
				alreadyVoted: !this.state.alreadyVoted 
			})
		}

	}

	handleBoost() {
		if (this.state.alreadyVoted) {
			this.handleVotingCount('minus')
		} else {
			this.handleVotingCount('plus')
		}

		this.props.boost()
	}

	render() {
		return (

			<View style={styles.shadow}>
				<LinearGradient colors={['#ff8500', '#ffec00']} style={styles.container}>
					<View style={styles.contentsContainer}>

						{/* textAndTimeContainer */}
						<View style={styles.textAndTimeContainer}>
							{/* labelQ */}
							<Text style={styles.labelQ}>Q.</Text>

							{/* time */}
							<Text style={styles.timeText}>{this.state.timeKor}</Text>
						</View>

						{/* questionText */}
						<Text style={styles.questionText}>{this.state.questionTextTruncated}</Text>

						{/* category */}
						<View style={styles.categoryBox}>
							<Text style={styles.categoryText}>{this.state.category}</Text>
						</View>
						{(this.state.hasSelectedAnswer && this.state.selectedAnswerText) && (
							<View>
								{/* answerText */}
								<Text style={styles.labelA}>A.</Text>
								{/* answerTextArea */}
								<Text style={styles.answerText}>{this.state.selectedAnswerTextTruncated}</Text>
							</View>
						)}

					</View>
					<View style={styles.bottomInfoContainer}>

						{/* answerCount */}
						<View style={styles.bottomInfo}>
							<View style={styles.countImageContainer}>
								<Image
									source={require('../assets/icons/messageCircle.png')}
								/>
							</View>
							<Text style={styles.answerCount}>{this.state.answerCount}</Text>

							{/* votingCount */}
							<View style={styles.countImageContainer}>
								<Image
									source={require('../assets/icons/heart.png')}
								/>
							</View>
							<Text style={styles.votingCount}>{this.state.votingCount}</Text>
						</View>


						{/* userAvatar */}
						<View style={styles.bottomUserInfo}>
							<Text style={styles.askedByText}>Asked{'\n'}by.</Text>
							<Image style={styles.userAvatar} source={require('../assets/images/default.jpg')} />
						</View>
					</View>

					{/* button */}
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							onPress={() => this.handleButtonAnswer()}
							style={styles.button}>
							<Text style={styles.buttonText}>답변</Text>
						</TouchableOpacity>

						<View style={styles.buttonDivider}></View>

						<TouchableOpacity
							onPress={() => this.handleBoost()}
							style={styles.button}>
							{
								(this.state.alreadyVoted) ?
									<Text style={[styles.buttonText, { color: '#ced4da' }]}>부스트</Text>
									:
									<Text style={styles.buttonText}>부스트</Text>
							}
						</TouchableOpacity>

					</View>

				</LinearGradient>
			</View >

		);
	}
};


const mapStateToProps = state => {
	return {
		isLoading: state.auth.isLoading,
		accessToken: state.auth.accessToken,
		userId: state.auth.userId,
		userName: state.auth.userName,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSetViewingQuestion: (question) => dispatch(setViewingQuetstion(question))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);