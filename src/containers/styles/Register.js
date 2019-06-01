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
	container: {
		backgroundColor: WHITE,
        width: DIMENSION_WIDTH,
        height: DIMENSION_HEIGHT,
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
	labelJumbo: {
        marginTop: 43,
        marginLeft: 35,
        fontFamily: CARD_FONT_BARUN,
        fontWeight: '800',
        fontSize: 24,
        letterSpacing: 0.5,
        color: BLACK,
    },
	buttonContainer: {
        width: DIMENSION_WIDTH,
		backgroundColor: "#B9B9B9",
		flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
		height: 65,
	},
	buttonText: {
		color: WHITE,
		fontFamily: CARD_FONT_BARUN,
		fontWeight: '800',
		fontSize: 20,
		letterSpacing: 0.9,
		alignSelf: 'center',
		textAlign: "center",
	}
});
