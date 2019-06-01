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
	// CONTAINER - HOME
	containerHome: {
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
	userAvatarHome: {
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: 'center',
	},
	filterButtonContainerHome: {
		marginTop: 68,
		marginBottom: 25,
		backgroundColor: WHITE,
		alignItems: "center",
		flexDirection: 'row',
		justifyContent: 'center',
		zIndex: 1
	},
	filterButtonHome: {
		backgroundColor: WHITE,
		textAlign: 'center',
		width: (DIMENSION_WIDTH) / 3,
		height: 51,
		display: "flex",
		margin: 0,
		justifyContent: 'center',
	},
	filterButtonTextOnClickHome: {
		color: BLACK,
		fontFamily: CARD_FONT_BARUN,
		fontWeight: '900',
		fontSize: 15,
		letterSpacing: 0.34,
		alignSelf: 'center',
		textAlign: "center",

	},
	filterButtonTextHome: {
		color: "#00000015",
		fontFamily: CARD_FONT_BARUN,
		fontSize: 15,
		letterSpacing: 0.34,
		alignSelf: 'center',
		textAlign: "center",
	},
	buttonAnswerHome: {
		height: 65,
		marginTop: 552,
		marginBottom: 0,
		backgroundColor: ORANGE,
		bottom: 0,
		justifyContent: 'center'
	},
	buttonAnswerTextHome: {
		color: WHITE,
		fontFamily: CARD_FONT_BARUN,
		fontWeight: '700',
		fontSize: 20,
		letterSpacing: 0.4,
		alignSelf: 'center',
		textAlign: "center",
	},
	// COMPONENT - CARD ITEM
	containerCardItem: {
		borderRadius: 15,
		alignItems: "center",
		marginTop: 0,
		marginLeft: 15,
		marginRight: 15,
		height: CARD_HEIGHT,
		width: CARD_WIDTH,
	},
	shadowCardItem: {
		backgroundColor: "#0000",
		shadowOpacity: 0.19,
		shadowRadius: 20,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 },
	},
	contentsContainerCardItem: {
		paddingLeft: 20,
		paddingRight: 20,
		height: 367
	},
	textAndTimeContainerCardItem: {
		width: 305,
		flexDirection: "row",
		justifyContent: 'space-between',
		marginTop: 32,
	}, 
	questionTextCardItem: {
		color: WHITE,
		fontSize: 25,
		fontFamily: CARD_FONT,
		fontWeight: '900',
		display: 'flex'
	},
	timeTextCardItem: {
		fontSize: 13,
		letterSpacing: 0.26,
		color: "#F4F4F4",
		display: 'flex',
	},
	textAreaCardItem: {
		width: 305,
		maxHeight: 228,
		color: WHITE,
		fontSize: 25,
		fontFamily: CARD_FONT,
		fontWeight: '900',
	},
	categoryBoxCardItem: {
		backgroundColor: "#FFFFFFC0",
		borderRadius: 15,
		paddingRight: 14,
		paddingLeft: 14,
		paddingTop: 7,
		paddingBottom: 7,
		marginTop: 18,
		textAlign: 'left',
	},
	categoryTextCardItem: {
		fontFamily: CARD_FONT,
		fontWeight: '900',
		color: ORANGE,
		fontSize: 10,
		textAlign: 'center'
	},
	bottomInfoContainerCardItem: {
		width: 305,
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		marginBottom: 26,
	},
	bottomInfoCardItem: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	bottomUserInfoCardItem: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	countImageContainerCardItem: {
		display: 'flex',
		height: 18,
		width: 18,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: 'center',

	},
	answerCountCardItem: {
		display: 'flex',
		fontFamily: CARD_FONT_NUM,
		fontWeight: '700',
		fontSize: 15,
		color: WHITE,
		paddingLeft: 6,
		paddingRight: 20,
	},
	votingCountCardItem: {
		display: 'flex',
		fontFamily: CARD_FONT_NUM,
		fontWeight: '700',
		fontSize: 15,
		paddingLeft: 6,
		color: WHITE,
	},

	askedByTextCardItem: {
		display: 'flex',
		fontFamily: CARD_FONT,
		fontWeight: '800',
		color: WHITE,
		fontSize: 13
	},
	userAvatarCardItem: {
		display: 'flex',
		width: 32,
		height: 32,
		borderColor: WHITE,
		borderWidth: 1,
		borderRadius: 16,
		marginLeft: 12
	},
	buttonContainerCardItem: {
		backgroundColor: WHITE,
		display: "flex",
		alignSelf: "flex-end",
		flexDirection: 'row',
		justifyContent: 'center',
		height: 65,
	},
	buttonCardItem: {
		backgroundColor: WHITE,
		textAlign: 'center',
		width: (CARD_WIDTH - 2) / 2,
		display: "flex",
		margin: 0,
		padding: 0,
		justifyContent: 'center',
		height: 65,
	},
	buttonDividerCardItem: {
		width: 2,
		height: 25,
		backgroundColor: "#00000033",
		display: "flex",
		alignSelf: 'center',
		margin: 0,
	},
	buttonTextCardItem: {
		color: BLACK,
		fontFamily: CARD_FONT_BARUN,
		fontWeight: '700',
		fontSize: 15,
		letterSpacing: 0.3,
		alignSelf: 'center',
		textAlign: "center",
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

	// COMPONENT - QUESTION CARD ITEM
	containerCardItem: {
		borderRadius: 15,
		alignItems: "center",
		paddingTop: 32,
		marginTop: 68,
		marginLeft: 15,
		marginRight: 15,
		height: CARD_HEIGHT + 53,
		width: CARD_WIDTH,
	},
	categoryBoxQuestionCard: {
		backgroundColor: "#FFFFFFC0",
		borderRadius: 15,
		paddingRight: 31,
		paddingLeft: 31,
		paddingTop: 9,
		paddingBottom: 8,
		marginTop: 18,
	},
	categoryTextQuestionCard: {
		fontFamily: CARD_FONT,
		fontWeight: '900',
		color: ORANGE,
		fontSize: 12,
		textAlign: 'center'
	},
	buttonQuestionCard: {
		backgroundColor: WHITE,
		textAlign: 'center',
		width: CARD_WIDTH,
		display: "flex",
		margin: 0,
		padding: 0,
		justifyContent: 'center',
		height: 65,
	},

});
