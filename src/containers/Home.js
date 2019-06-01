import React from "react";
import { ActivityIndicator, View, Text, TouchableOpacity, Image } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import Toast, { DURATION } from 'react-native-easy-toast'
import AsyncStorage from '@react-native-community/async-storage';
import CardItem from "../components/CardItem";
import styles from "../containers/styles/Home";

const filterButtons = [
	{ id: 0, text: '최신순', urlParam: 'recent' },
	{ id: 1, text: '인기순', urlParam: 'popular' },
	{ id: 2, text: '관심사순', urlParam: 'bycategory' }
]

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			selectedId: 1,
			selectedUrlParam: 'recent'
		};
		this.state.bearer_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTYxMjg3NDQ4LCJqdGkiOiI5ZTdiMmI3NTRiMjg0OWZlYmVjMzM0MTc0Mjc2ZmYyYyIsInVzZXJfaWQiOjJ9.0wmunQASomn39C7-ZLmW80a2JxdRzmXvy5z5OxHUevU';
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.clickFilter = this.clickFilter.bind(this);
		this.fetchQuestion = this.fetchQuestion.bind(this);
		this.boost = this.boost.bind(this);
	}

	handleFilterChange = (id) => {
		this.setState({ selectedId: id });
		const urlParam = filterButtons.find(obj => { return obj.id === this.state.selectedId }).urlParam;
		this.setState({ selectedUrlParam: urlParam });
	}

	clickFilter = (id) => {
		this.handleFilterChange(id);
		this.fetchQuestion(this.state.selectedUrlParam);
	}

	async fetchQuestion(urlParam) {
		this.setState({
			isLoading: true
		})

		const response = await fetch('http://127.0.0.1:8000/api/v1/question/' + urlParam + '/', {
			method: 'POST',
			headers: {
				'Authorization': 'Bearer ' + this.state.bearer_token,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				count: 30
			}),
		});
		const responseJson = await response.json();
		this.setState({
			isLoading: false,
			dataSource: responseJson.result,
		}, function () {
		});
	}

	componentDidMount() {
		this.fetchQuestion(this.state.selectedUrlParam);
	}

	boost = (id) => {
		this.swiper.swipeLeft()
		this.postBoost(id)
		console.log(AsyncStorage.getItem('accessToken'))
		this.refs.toast.show(AsyncStorage.getItem('accessToken'));
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
		const { navigate } = this.props.navigation;

		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, alignSelf: 'center' }}>
					<ActivityIndicator />
				</View>
			)
		}
		
		return (
			<View style={styles.container}>
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
					{/* userAvatar */}
					<Image style={styles.userAvatar} source={require('../assets/images/default.jpg')} />
				</View>

				{/* cardFilter */}
				<View style={styles.filterButtonContainer}>
					{filterButtons.map(button => (
						<TouchableOpacity
							style={styles.filterButton}
							key={button.id}
							id={button.id}
							disabled={this.state.selectedId === button.id}
							onPress={() => this.clickFilter(button.id)}
						>
							<Text
								key={button.id}
								id={button.id}
								style={
									this.state.selectedId === button.id ?
										styles.filterButtonTextOnClick :
										styles.filterButtonText}
							>
								{button.text}
							</Text>
						</TouchableOpacity>
					))}
				</View>

				<CardStack
					loop={true}
					verticalSwipe={false}
					renderNoMoreCards={() => null}
					ref={swiper => (this.swiper = swiper)}
				>
					{this.state.dataSource.map(item => (
						<Card key={item.id}>
							<CardItem
								questionId={item.id}
								questionText={item.text}
								time={item.created_at}
								userAvatar={item.user_avatar}
								hasSelectedAnswer={item.has_selected_answer}
								selectedAnswerText={item.selected_answer_text}
								category={item.category_name}
								answerCount={item.answer_count}
								votingCount={item.voting_count}
								boost={() => this.boost(item.id)}
								navigation={this.props.navigation}
							/>
							{(this.state.isLoading) && (
								<View style={styles.loading}>
									<ActivityIndicator size='large' />
								</View>
							)}
						</Card>
					))}
				</CardStack>
				<TouchableOpacity
					style={styles.buttonQuestion}
					onPress={() => navigate('Question')}
				>
					<Text style={styles.buttonQuestionText}>질문하기</Text>
				</TouchableOpacity>
			</View>
		);
	};
};


