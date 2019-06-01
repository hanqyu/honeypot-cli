import React from "react";
import styles from "./styles/QuestionCard";
import { Modal, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import QuestionSelectCategory from "./QuestionSelectCategory";


class QuestionCard extends React.Component {
	// const questionTextTruncated = (questionText.length > maxlimit) ? ((questionText.substring(0,maxlimit-3)) + '...') : questionText
	state = {
		modalVisible: false,
	};

	componentDidMount() {

	};

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	};

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
						closeDisplay={() => this.setState({ modalVisible: false })}
					/>
				</Modal>

				<LinearGradient colors={['#ff8500', '#ffec00']} style={styles.container}>

					<View style={styles.contentsContainer}>
						{/* textArea */}
						<Text style={styles.questionText}>Q.</Text>


						<TextInput
							placeholder="질문을 입력해주세요."
							multiline={true}
							onChangeText={(text) => {
								this.setState({ text })
							}}
							onContentSizeChange={(event) => {
								this.setState({ height: event.nativeEvent.contentSize.height })
							}}
							style={[styles.textArea, { height: Math.max(228, this.state.height) }]}
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
							<Text style={styles.categoryText}>카테고리 선택</Text>
						</TouchableOpacity>

						{/* userAvatar */}
						<View style={styles.bottomUserInfo}>
							<Text style={styles.askedByText}>Asked {'\n'}by.</Text>
							<Image style={styles.userAvatar} source={require('../assets/images/default.jpg')} />
						</View>
					</View>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>등록하기</Text>
						</TouchableOpacity>
					</View>
				</LinearGradient>

			</View>

		);
	};
};

export default QuestionCard;
