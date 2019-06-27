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


export default StyleSheet.create({
	// COMPONENT - CARD ITEM
	container: {
        alignSelf: 'center',
        backgroundColor: WHITE,
        marginTop: 260,
        width: DIMENSION_WIDTH,
        height: 550,
    },
    xButton: {
        display: 'flex',
        alignSelf: 'flex-end',
		width: 24,
		height: 24,
        marginRight: 15,
        marginTop: 17
    },
	categoriesContainer: {
        marginTop: 24,
        marginLeft: 15,
        marginRight: 15,
        height: 446-24,
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
    },
    categoryBox: {
        backgroundColor: "#f5a62366",
		borderRadius: 15,
		paddingRight: 14,
		paddingLeft: 14,
		paddingTop: 9,
		paddingBottom: 9,
        marginRight: 10,
        marginBottom: 20,
	},
	categoryBoxSelected: {
		backgroundColor: PRIMARY_COLOR,
		borderRadius: 15,
		paddingRight: 14,
		paddingLeft: 14,
		paddingTop: 9,
		paddingBottom: 9,
        marginRight: 10,
        marginBottom: 20,
	},
	categoryText: {
		fontFamily: CARD_FONT,
		fontWeight: '900',
		color: WHITE,
		fontSize: 12,
		textAlign: 'center'
	},
	buttonText: {
		color: WHITE,
		fontFamily: CARD_FONT_BARUN,
		fontWeight: '700',
		fontSize: 20,
		letterSpacing: 0.4,
		alignSelf: 'center',
		textAlign: "center",
	},
	button: {
		backgroundColor: ORANGE,
		width: DIMENSION_WIDTH,
		display: "flex",
		margin: 0,
        padding: 0,
        alignSelf: 'flex-end',
		justifyContent: 'center',
		height: 65,
	},

});
