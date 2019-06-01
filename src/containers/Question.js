import React from "react";
import { ActivityIndicator, View, Text, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback } from "react-native";
import QuestionCard from "../components/QuestionCard";
import styles from "./styles/Question";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

export default class Question extends React.Component {

	constructor(props) {
		super(props);
		// this.state.bearer_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTYxMjg3NDQ4LCJqdGkiOiI5ZTdiMmI3NTRiMjg0OWZlYmVjMzM0MTc0Mjc2ZmYyYyIsInVzZXJfaWQiOjJ9.0wmunQASomn39C7-ZLmW80a2JxdRzmXvy5z5OxHUevU';
	}

	// handler() {
	// 	this.setState({
	// 		style=styles.filterButtonOnClickCardItem
	// 	})
	// }

	// _pop(){
	// 	this.props.navigation.pop({
	// 	  animated: true, // does the pop have transition animation or does it happen immediately (optional)
	// 	  animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
	// 	});
	//   }

	render() {

		return (
			<DismissKeyboard>
				<View style={styles.containerHome}>

					<View style={styles.upperBar}>
						{/* chevronLeft */}
						<TouchableOpacity style={styles.chevronLeft} onPress={()=>{this.props.navigation.goBack()}}>
							<Image source={require('../assets/icons/chevronLeft.png')} />
						</TouchableOpacity>

						{/* userAvatar */}
						<View style={styles.userAvatarHome}>
							<Image style={styles.userAvatarHome} source={require('../assets/images/default.jpg')} />
						</View>
					</View>

					<QuestionCard />

				</View>
			</DismissKeyboard>
		);
	};
};


