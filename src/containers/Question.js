import React from "react";
import Toast, { DURATION } from 'react-native-easy-toast'
import { ActivityIndicator, View, Text, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback } from "react-native";
import QuestionCard from "../components/QuestionCard";
import styles from "./styles/Question";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);
const TOAST_DURATION = 2000

export default class Question extends React.Component {
	constructor(props) {
		super(props);
	}

	handleToast(textMessage, type) {
		if (type == 'Error') {
			this.refs.toastError.show(textMessage, TOAST_DURATION);
		}
		if (type == 'General') {
			this.refs.toastGeneral.show(textMessage, TOAST_DURATION);
		}
	}

	render() {

		return (
			<DismissKeyboard>
				<View style={styles.containerHome}>
					{/* toastError */}
					<Toast
						style={styles.toastError}
						position='top'
						positionValue={60}
						fadeInDuration={500}
						fadeOutDuration={500}
						opacity={0.7}
						textStyle={styles.toastErrorText}
						ref='toastError' />

					{/* toastGeneral */}
					<Toast
						style={styles.toastGeneral}
						position='top'
						positionValue={60}
						fadeInDuration={500}
						fadeOutDuration={500}
						opacity={0.7}
						textStyle={styles.toastGeneralText}
						ref='toastGeneral' />

					<View style={styles.upperBar}>
						{/* chevronLeft */}
						<TouchableOpacity style={styles.chevronLeft} onPress={() => { this.props.navigation.goBack() }}>
							<Image source={require('../assets/icons/chevronLeft.png')} />
						</TouchableOpacity>

						{/* userAvatar */}
						<View style={styles.userAvatarHome}>
							<Image style={styles.userAvatarHome} source={require('../assets/images/default.jpg')} />
						</View>
					</View>

					<QuestionCard
						navigateBack={() => this.props.navigation.goBack()}
						handleToast={(textMessage, type) => this.handleToast(textMessage, type)}
					/>

				</View>
			</DismissKeyboard>
		);
	};
};


