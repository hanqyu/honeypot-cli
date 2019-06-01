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
	// COMPONENT - CARD ITEM
	container: {
		borderRadius: 15,
		alignItems: "center",
		marginTop: -20,
		marginLeft: 15,
		marginRight: 15,
		height: CARD_HEIGHT,
		width: CARD_WIDTH,
	},
	shadow: {
		backgroundColor: "#0000",
		shadowOpacity: 0.19,
		shadowRadius: 15,
		shadowColor: BLACK,
        shadowOffset: { height: 0, width: 0 },
	},
	contentsContainer: {
		paddingLeft: 20,
		paddingRight: 20,
		height: 367,
		// borderColor: 'red',
		// borderWidth: 1,
		overflow: 'hidden'
	},
	textAndTimeContainer: {
		width: 305,
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
	},
	categoryBox: {
		backgroundColor: "#FFFFFFC0",
		borderRadius: 15,
		paddingRight: 14,
		paddingLeft: 14,
		paddingTop: 7,
		paddingBottom: 7,
		marginTop: 18,
        textAlign: 'left',
        width: '100%'
	},
	categoryText: {
		fontFamily: CARD_FONT,
		fontWeight: '900',
		color: ORANGE,
		fontSize: 10,
		textAlign: 'center'
	},
	labelA: {
		color: WHITE,
		fontSize: 25,
		fontFamily: CARD_FONT,
		letterSpacing: 0.5,
		fontWeight: '700',
		marginTop: 40,
	},
	answerText: {
		marginTop: 5,
		color: WHITE,
		fontSize: 25,
		fontFamily: CARD_FONT,
		letterSpacing: 0.5,
		fontWeight: '700',
	},
	bottomInfoContainer: {
		width: 305,
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		marginBottom: 26,
	},
	bottomInfo: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	bottomUserInfo: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	countImageContainer: {
		display: 'flex',
		height: 18,
		width: 18,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: 'center',

	},
	answerCount: {
		display: 'flex',
		fontFamily: CARD_FONT_NUM,
		fontWeight: '700',
		fontSize: 15,
		color: WHITE,
		paddingLeft: 6,
		paddingRight: 20,
	},
	votingCount: {
		display: 'flex',
		fontFamily: CARD_FONT_NUM,
		fontWeight: '700',
		fontSize: 15,
		paddingLeft: 6,
		color: WHITE,
	},

	askedByText: {
		display: 'flex',
		fontFamily: CARD_FONT,
		fontWeight: '800',
		color: WHITE,
		fontSize: 13
	},
	userAvatar: {
		display: 'flex',
		width: 32,
		height: 32,
		borderColor: WHITE,
		borderWidth: 1,
		borderRadius: 16,
		marginLeft: 12
	},
	buttonContainer: {
		backgroundColor: WHITE,
		display: "flex",
		alignSelf: "flex-end",
		flexDirection: 'row',
		justifyContent: 'center',
		height: 65,
	},
	button: {
		backgroundColor: WHITE,
		textAlign: 'center',
		width: (CARD_WIDTH - 2) / 2,
		display: "flex",
		margin: 0,
		padding: 0,
		justifyContent: 'center',
		height: 65,
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
	
	buttonDivider: {
		width: 2,
		height: 25,
		backgroundColor: "#00000033",
		display: "flex",
	alignSelf: 'center',
		margin: 0,
	},
	status: {
		paddingBottom: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	statusText: {
		color: GRAY,
		fontSize: 12
	},

	
});
