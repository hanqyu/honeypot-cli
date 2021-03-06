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
});
