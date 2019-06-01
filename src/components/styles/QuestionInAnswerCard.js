
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
const CARD_HEIGHT = 218;
const BUTTON_HEIGHT = 59;

export default StyleSheet.create({
	// COMPONENT - CARD ITEM
	container: {
		borderRadius: 15,
		alignItems: "center",
		marginTop: 68,
		marginLeft: 15,
		marginRight: 15,
		height: CARD_HEIGHT,
		width: CARD_WIDTH,
	},
	shadow: {
		backgroundColor: "#0000",
		shadowOpacity: 0.19,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 2 },
	},
	contentsContainer: {
		paddingLeft: 20,
		paddingRight: 20,
		width: CARD_WIDTH,
        height: CARD_HEIGHT - BUTTON_HEIGHT,
		paddingBottom: 20,
    },
    textAndTimeContainer: {
		flexDirection: "row",
		justifyContent: 'space-between',
        marginTop: 32,
	}, 
	labelQ: {
		color: WHITE,
		fontSize: 25,
		fontFamily: CARD_FONT,
		fontWeight: '900',
        display: 'flex',
	},
	timeText: {
		fontSize: 13,
		letterSpacing: 0.26,
		color: "#F4F4F4",
		display: 'flex',
    },
	questionText: {
        marginTop: 5,
        color: WHITE,
		fontSize: 25,
		fontFamily: CARD_FONT,
        fontWeight: '900',
        letterSpacing: 0.5,
        lineHeight: 35,
	},
	
	buttonContainer: {
		backgroundColor: WHITE,
		display: "flex",
		alignSelf: "flex-end",
		flexDirection: 'row',
		justifyContent: 'center',
        height: BUTTON_HEIGHT,
	},
	button: {
		backgroundColor: WHITE,
		textAlign: 'center',
		width: CARD_WIDTH,
		display: "flex",
		margin: 0,
		padding: 0,
		justifyContent: 'center',
		height: BUTTON_HEIGHT,
	},
	buttonText: {
		color: BLACK,
		fontFamily: CARD_FONT_BARUN,
		fontWeight: '700',
		fontSize: 15,
		letterSpacing: 0.3,
		alignSelf: 'center',
		textAlign: "center",
	},
	
	
	// deprecated
	categoryBox: {
		backgroundColor: "#FFFFFFC0",
		borderRadius: 15,
		paddingRight: 31,
		paddingLeft: 31,
		paddingTop: 9,
		paddingBottom: 8,
		marginTop: 18,
	},
	categoryText: {
		fontFamily: CARD_FONT,
		fontWeight: '900',
		color: ORANGE,
		fontSize: 12,
		textAlign: 'center'
	},
	

});
