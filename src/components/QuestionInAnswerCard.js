import React from "react";
import styles from "./styles/QuestionInAnswerCard";

import { Modal, Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

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

export default class QuestionInAnswerCard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			...props,
		};
		this.state.bearer_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTYxMjg3NDQ4LCJqdGkiOiI5ZTdiMmI3NTRiMjg0OWZlYmVjMzM0MTc0Mjc2ZmYyYyIsInVzZXJfaWQiOjJ9.0wmunQASomn39C7-ZLmW80a2JxdRzmXvy5z5OxHUevU';
		this.state.timeKor = timeToKorean(this.state.time);
		this.state.questionTextTruncated = (this.state.questionText.length > maxlimit) ? ((this.state.questionText.substring(0, maxlimit - 3)) + '...') : this.state.questionText;
		this.postBoost = this.postBoost.bind(this);
	}

	async postBoost(questionId) {
		await fetch('http://127.0.0.1:8000/api/v1/question/' + questionId + '/vote/',
			{
				method: 'POST',
				headers: {
					'Authorization': 'Bearer ' + this.state.bearer_token,
					'Content-Type': 'application/json',
				},
			}).then(response => {
				if ((response.status == 200) || (response.status == 204)) {
					const responseJson = response.json();
					return responseJson
					// TODO-토스트 or 부스트 된 이펙트
				}
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

						<ScrollView style={{ flex: 1 }}>
							{/* questionText */}
							<Text style={styles.questionText}>{this.state.questionTextTruncated}</Text>
						</ScrollView>
					</View>

					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.button}
							onPress={() => this.postBoost(this.state.questionId)}>
							<Text style={styles.buttonText}>부스트</Text>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</View>
		);
	};
};
