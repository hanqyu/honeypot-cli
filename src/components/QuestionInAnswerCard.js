import React from "react";
import styles from "./styles/QuestionInAnswerCard";

import { Modal, Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { connect } from 'react-redux';


const maxlimit = 24;
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

const apiBaseUrl = __DEV__ ? 'http://127.0.0.1:8000/' : 'http://honeypot.hanqyu.com/'

class QuestionInAnswerCard extends React.Component {

	constructor(props) {
		super(props);
		console.log(props)
		this.state = {
			...props,
		};
		console.log(this.state)
		this.state.timeKor = timeToKorean(props.time);
		this.state.questionTextTruncated = (props.questionText.length > maxlimit) ? ((this.props.questionText.substring(0, maxlimit - 3)) + '...') : this.state.questionText;
	}

	async postBoost(questionId) {
		await fetch(apiBaseUrl + 'api/v1/question/' + questionId + '/vote/',
			{
				method: 'POST',
				headers: {
					'Authorization': 'Bearer ' + this.props.accessToken,
					'Content-Type': 'application/json',
				},
			}).then(response => {
				if (response.ok) {
					const responseJson = response.json();
					return responseJson
					// TODO-토스트 or 부스트 된 이펙트
				} else {
					return;
				}
			}).then(() => {
				this.setState({ alreadyVoted: !this.state.alreadyVoted })
			}).catch(error => {
				console.error(error);
				return { name: "network error", description: "" };
			});
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
							{/* timeText */}
							<Text style={styles.timeText}>{this.state.timeKor}</Text>
						</View>

						{/* <ScrollView style={{ flex: 1 }}> */}
						{/* questionText */}
						<Text style={styles.questionText}>{this.state.questionTextTruncated}</Text>
						{/* </ScrollView> */}
					</View>

					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.button}
							onPress={() => this.postBoost(this.state.questionId)}>
							{
								(this.state.alreadyVoted) ?
									<Text style={[styles.buttonText, { color: '#ced4da' }]}>부스트</Text>
									:
									<Text style={styles.buttonText}>부스트</Text>
							}
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</View>
		);
	};
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionInAnswerCard);