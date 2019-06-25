import { StyleSheet, Dimensions } from "react-native";

const PRIMARY_COLOR = "#F5A623";
const WHITE = "#FFFFFF";
const GRAY = "#EBEBEB";
const DARK_GRAY = "#363636";
const BLACK = "#000000";
const ORANGE = "#F5A623";

const CARD_FONT = "NanumSquare";
const CARD_FONT_NUM = "NanumGothic";
const CARD_FONT_BARUN = "NanumBarunGothic";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

const CARD_WIDTH = 345;
const CARD_HEIGHT = 490;

export default StyleSheet.create({
	container: {
		backgroundColor: WHITE,
		width: DIMENSION_WIDTH,
	},
	upperBar: {
		marginLeft: 15,
		marginRight: 15,
		alignItems: "center",
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 60,
	},
	chevronLeft: {
		height: 24,
		width: 24,
		display: 'flex',
		alignItems: "center",
		flexDirection: "row",
		justifyContent: 'center',
	},
	userAvatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: 'center',
	},
	scrollView: {
		height: DIMENSION_HEIGHT - 400
	},
	answerTextInputKeyboardAvoidingView: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		// bottom: 0,
		// zIndex: 1,
		// position: 'position'
	},
	answerTextInputBackground: {
		display: 'flex',
		alignSelf: 'center',
		width: DIMENSION_WIDTH,
		backgroundColor: WHITE,
	},
	answerTextInputContainer: {
		width: CARD_WIDTH,
		backgroundColor: WHITE,
		zIndex: 1,
		height: 60,
		marginTop: 34,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	answerTextInputBox: {
		width: CARD_WIDTH - 10 - 30,
		backgroundColor: GRAY,
		borderRadius: 20,
		marginRight: 10,
		paddingLeft: 20,
		paddingRight: 20,
		zIndex: 2,
		display: 'flex',
		minHeight: 40,
		justifyContent: 'center',
	},
	answerTextInput: {
		fontFamily: CARD_FONT_BARUN,
		fontWeight: '400',
		fontSize: 12,
		letterSpacing: 0.24,
		color: '#00000080',
		display: 'flex',
	},
	sendButton: {
		height: 30,
		width: 30,
		borderRadius: 15,
		backgroundColor: PRIMARY_COLOR,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	sendButtonImage: {
		height: 14,
		width: 14,
		display: 'flex',
	}
});
