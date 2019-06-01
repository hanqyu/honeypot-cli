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

const CONTAINER_WIDTH = DIMENSION_WIDTH - 35 * 2;
const CONTAINER_HEIGHT = 405;

export default StyleSheet.create({
    container: {
        width: CONTAINER_WIDTH,
        marginLeft: 35,
        marginRight: 35,
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
    logoImage: {
        alignSelf: 'center',
        marginTop: 109,
        width: 50,
        height: 50,
    },
    logoText: {
        alignSelf: 'center',
        marginTop: 9,
        fontSize: 15,
        fontFamily: CARD_FONT,
        fontWeight: '900',
        letterSpacing: 0.3,
        color: BLACK,
        marginBottom: 69,
    },
    fieldInputContainer: {
        width: CONTAINER_WIDTH,
        marginLeft: 13,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    fieldInputImage: {
        display: 'flex',
        width: 20,
        height: 20,
    },
    fieldInputText: {
        display: 'flex',
        width: CONTAINER_WIDTH - 50,
        fontSize: 15,
        fontFamily: CARD_FONT,
        letterSpacing: 0.3,
        color: '#00000080',
        marginLeft: 18
    },
    fieldDivider: {
        marginTop: 14,
        backgroundColor: '#D9D9D9',
        width: CONTAINER_WIDTH,
        height: 0.5,
        marginBottom: 27
    },

    loginButtonContainer: {
        height: 50,
        width: CONTAINER_WIDTH,
        borderRadius: 15,
        backgroundColor: PRIMARY_COLOR,
        shadowRadius: 10,
        shadowColor: '#6b6b6b26',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    loginButtonText: {
        alignSelf: 'center',
        fontSize: 15,
        fontFamily: CARD_FONT_BARUN,
        fontWeight: '700',
        letterSpacing: 0.3,
        color: WHITE
    },
    answerTextInputKeyboardAvoidingView: {
		flex: 1,
    	justifyContent: 'space-between',
	},
    footerText: {
        alignSelf: 'center',
        fontSize: 12,
        fontFamily: CARD_FONT_BARUN,
        fontWeight: '400',
        letterSpacing: 0.24,
        color: '#00000080',
        marginTop: 264,
        marginBottom: 7
    },
    footerTextButton: {
        alignSelf: 'center',
        fontSize: 12,
        fontFamily: CARD_FONT_BARUN,
        fontWeight: '400',
        letterSpacing: 0.24,
        color: PRIMARY_COLOR,
        textDecorationLine: 'underline',
        marginBottom: 66
    },
});
