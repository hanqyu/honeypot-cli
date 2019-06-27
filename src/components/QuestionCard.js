import React from "react";
import styles from "./styles/QuestionCard";
import { Modal, Text, View, Image, Dimensions, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import QuestionSelectCategory from "./QuestionSelectCategory";
import { connect } from 'react-redux';
import { setToken, setUserId, setUserName, setLoading, setSelectedCategory, setSelectedCategoryName } from '../store/actions/index'

const apiBaseUrl = __DEV__ ? 'http://127.0.0.1:8000/' : 'http://honeypot.hanqyu.com/'
const TOAST_DURATION = 2000;

class QuestionCard extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		modalVisible: false,
		categoryText: '카테고리 선택'
	};

	componentDidMount() {

	};

	handleCategoryButtonText() {
		this.setState({ categoryText: this.props.selectedCategoryName })
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	};

	postInput() {
		this.props.onSetLoading(true);
		this.setState({...this.state, isLoading:true})
		fetch(apiBaseUrl + 'api/v1/question/', {
			method: 'POST',
			headers: {
				'Authorization': 'Bearer ' + this.props.accessToken,
				'Content-Type': 'application/json',
			},
			timeout: 3000,
			body: JSON.stringify({
				"anonymous": false,
				"text": this.state.text,
				"used_voting": 0,
				"category": this.props.selectedCategory
			})
		}).then(response => {
			if (response.ok) {
				return response.json()
			} else {
				return this.props.handleToast(error.message, 'Error')
			}
		}).then(() => {
			this.props.handleToast('질문이 등록되었습니다!', 'General');
			setTimeout(() => {
				console.log(this.props)
				this.props.navigateBack()
				this.props.onSetLoading(false);
			}, TOAST_DURATION);
		}).catch(error => {
			this.props.handleToast(error.message, 'Error');
		});
	}

	handlePost() {
		if (this.state.text == '' || this.state.text === undefined) {
			this.props.handleToast('질문을 입력해주세요', 'Error');
			return;
		}
		console.log(this.props.selectedCategory)
		if (this.props.selectedCategory == '' || this.props.selectedCategory == null || this.props.selectedCategory == undefined) {
			this.props.handleToast('카테고리를 선택해주세요', 'Error');
			return;
		}

		this.postInput();

	}

	render() {
		return (
			<View style={[styles.shadow, this.state.showModal ? { backgroundColor: "#00000080" } : '']} >
				<Modal
					animationType="slide"
					transparent={true}
					visible={this.state.modalVisible}
					closeDisplay={() => this.setState({ modalVisible: false })}
					onRequestClose={this.modalVisible}
				>
					<QuestionSelectCategory
						visible={this.state.modalVisible}
						closeDisplay={() => { this.handleCategoryButtonText(); this.setState({ modalVisible: false }) }}
					/>
				</Modal>

				<LinearGradient colors={['#ff8500', '#ffec00']} style={styles.container}>

					<View style={styles.contentsContainer}>
						{/* textArea */}
						<Text style={styles.questionText}>Q.</Text>


						<TextInput
							placeholder="질문을 입력해주세요."
							style={[styles.textArea, { height: 228 }]}
							multiline={true}
							onChangeText={(text) => {
								this.setState({ text })
							}}
							onContentSizeChange={(event) => {
								this.setState({ height: event.nativeEvent.contentSize.height })
							}}
							value={this.state.text}
						/>
					</View>
					<View style={styles.bottomInfoContainer}>
						{/* selectCategory */}
						<TouchableOpacity
							onPress={() => {
								this.setModalVisible(true);
							}}
							style={styles.categoryBox}>
							<Text style={styles.categoryText}>{this.state.categoryText}</Text>
						</TouchableOpacity>

						{/* userAvatar */}
						<View style={styles.bottomUserInfo}>
							<Text style={styles.askedByText}>Asked {'\n'}by.</Text>
							<Image style={styles.userAvatar} source={require('../assets/images/default.jpg')} />
						</View>
					</View>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							onPress={() => this.handlePost()}
							style={styles.button}>
							{
								(this.props.isLoading) ?
									<ActivityIndicator size="small" color="gray" />
									:
									<Text style={styles.buttonText}>등록하기</Text>
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
		selectedCategory: state.question.selectedCategory,
		selectedCategoryName: state.question.selectedCategoryName
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSetLoading: (bool) => dispatch(setLoading(bool)),
		onSetToken: (accessToken) => dispatch(setToken(accessToken)),
		onSetUserId: (userId) => dispatch(setUserId(userId)),
		onSetUserName: (userName) => dispatch(setUserName(userName)),
		onSetSelectedCategory: (selectedCategory) => dispatch(setSelectedCategory(selectedCategory)),
		onSetSelectedCategoryName: (selectedCategoryName) => dispatch(setSelectedCategoryName(selectedCategoryName))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
