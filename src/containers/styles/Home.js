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
	container: {
		backgroundColor: WHITE,
		width: DIMENSION_WIDTH,
	},
	toastError: {
        backgroundColor: 'red',
        borderRadius: 10,
    },
    toastErrorText: {
        fontFamily: CARD_FONT_BARUN,
        fontSize: 12,
        color: WHITE
    },
	upperBar: {
		marginLeft: 15,
		marginRight: 15,
		alignItems: "center",
		flexDirection: 'row',
		justifyContent: 'flex-end',
        marginTop: 60,
	},
	userAvatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: "center",
		flexDirection: "row",
        justifyContent: 'center',
	},
	filterButtonContainer: {
		marginTop: 68-17,
		marginBottom: 20,
		alignItems: "center",
		flexDirection: 'row',
		justifyContent: 'center',
        zIndex: 1,
	},
	filterButton: {
		textAlign: 'center',
		width: (DIMENSION_WIDTH) / 3,
		height: 17+20+20,
		display: "flex",
		margin: 0,
        justifyContent: 'center',
	},
	filterButtonTextOnClick: {
		color: BLACK,
		fontFamily: CARD_FONT_BARUN,
		fontWeight: '900',
		fontSize: 15,
		letterSpacing: 0.34,
		alignSelf: 'center',
		textAlign: "center",
	},
	filterButtonText: {
		color: "#00000015",
		fontFamily: CARD_FONT_BARUN,
		fontSize: 15,
		letterSpacing: 0.34,
		alignSelf: 'center',
		textAlign: "center",
	},
	buttonQuestion: {
		height: 65,
		marginTop: 522,
		marginBottom: 0,
		backgroundColor: ORANGE,
		bottom: 0,
		justifyContent: 'center'
	},
	buttonQuestionText: {
		color: WHITE,
		fontFamily: CARD_FONT_BARUN,
		fontWeight: '700',
		fontSize: 20,
		letterSpacing: 0.4,
		alignSelf: 'center',
		textAlign: "center",
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
});
