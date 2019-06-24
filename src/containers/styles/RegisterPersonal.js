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
	formContainer: {
        marginTop: 50,
        width: CONTAINER_WIDTH,
        height: CONTAINER_HEIGHT,
        marginLeft: 35,
        marginRight: 35,
        marginBottom: 21
    },
    formStateLabelContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: CONTAINER_WIDTH,
        marginBottom: 21
    },
    formStateLabel: {
        display: 'flex',
        fontFamily: CARD_FONT_BARUN,
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.24,
        color: PRIMARY_COLOR,
    },
    fieldLabel: {
        fontFamily: CARD_FONT_BARUN,
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0.3,
        color: BLACK,
        marginBottom: 18
    },
    fieldInput: {
        fontFamily: CARD_FONT,
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0.3,
        color: '#00000080',
        marginBottom: 5
    },
    fieldDivider: {
        width: CONTAINER_WIDTH,
        height: 0.5,
        backgroundColor: '#D9D9D9',
        marginBottom: 45
    },
    filedInputValidation:{
        marginTop: -35,
        marginBottom: 35,
        fontFamily: CARD_FONT_BARUN,
        fontSize: 13,
        fontWeight: '400',
        letterSpacing: 0.3,
        color: 'red',
    },
    genderButtonsConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 51
    },
    genderButton: {
        display: 'flex',
        width: CONTAINER_WIDTH / 2 - 0.5,
        textAlign: 'center',
        alignItems: 'center'
    },
    genderButtonSelected: {
        display: 'flex',
        width: CONTAINER_WIDTH / 2 - 0.5,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY_COLOR,
    },
    genderButtonDivider: {
        display: 'flex',
        alignSelf: 'center',
        width: 0.5,
        height: 18,
        backgroundColor: '#D9D9D9',
    },
    genderButtonText: {
        fontFamily: CARD_FONT,
        fontSize: 15,
        fontWeight: '300',
        letterSpacing: 0.3,
        color: BLACK,
    },
    genderButtonTextSelected: {
        fontFamily: CARD_FONT,
        fontSize: 15,
        fontWeight: '300',
        letterSpacing: 0.3,
        color: WHITE
    },
    birthDateText: {
        fontFamily: CARD_FONT,
        fontSize: 15,
        fontWeight: '300',
        letterSpacing: 0.3,
        color: '#00000080',
        alignSelf: 'center',
        marginBottom: 5
    },
    birthDatePicker: {
        backgroundColor: '#FCFCFC',
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        width: DIMENSION_WIDTH,
        shadowOpacity: 0.05,
		shadowRadius: 2,
		shadowColor: BLACK,
        shadowOffset: { height: -3, width: 0 },
    },
    birthDatePickerHeader: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 15,
        width: DIMENSION_WIDTH,
        backgroundColor: WHITE,
        // borderTopColor: '#D9D9D9',
        // borderTopWidth: 0.5,
        alignItems: 'flex-end'
    },
    birthDatePickerHeaderConfirm: {
        fontSize: 15,
        fontFamily: CARD_FONT,
        fontWeight: '500',
        color: PRIMARY_COLOR
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
