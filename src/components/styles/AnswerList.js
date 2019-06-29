
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
const CARD_HEIGHT = 290;
const BUTTON_HEIGHT = 39;

export default StyleSheet.create({
    container: {
        borderRadius: 15,
        alignItems: "center",
        marginTop: 35,
        marginLeft: 15,
        marginRight: 15,
        // height: CARD_HEIGHT,
        width: CARD_WIDTH,
        backgroundColor: WHITE,
        shadowOpacity: 0.19,
        shadowRadius: 20,
        shadowColor: BLACK,
        shadowOffset: { height: 0, width: 0 },
    },
    contentsContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        // height: CARD_HEIGHT - BUTTON_HEIGHT,
    },

    // upperBar
    upperBar: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: CARD_WIDTH,
        marginTop: 27,
        paddingLeft: 20,
        paddingRight: 19,
        height: 32,
    },
    labelAnswerBy: {
        display: 'flex',
        alignSelf: 'center',
        color: BLACK,
        fontSize: 13,
        fontFamily: CARD_FONT_BARUN,
        fontWeight: '900',
        letterSpacing: 0.26,
    },
    upperRightArea: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center'
    },
    answeredPeopleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    answeredPeopleImageBig: {
        display: 'flex',
        width: 32,
        height: 32,
        borderRadius: 32 / 2,
        borderColor: WHITE,
        borderWidth: 1.2,
        zIndex: 2,
        marginRight: -12,
    },
    answeredPeopleImageSmallLeft: {
        display: 'flex',
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
        borderColor: WHITE,
        borderWidth: 1.2,
        zIndex: 1,
        marginRight: -12,
    },
    answeredPeopleImageSmallRight: {
        display: 'flex',
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
        borderColor: WHITE,
        borderWidth: 1.2,
        zIndex: 0,
    },
    answeredPeopleImageSelected: {
        display: 'flex',
        alignSelf: 'flex-end',
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        borderColor: WHITE,
        borderWidth: 1,
        zIndex: 4,
        marginRight: -10,
    },
    moreHorizontal: {
        display: 'flex',
        width: 19,
        height: 19
    },

    // answerList
    listContainer: {
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: CARD_WIDTH,
        paddingLeft: 19,
        paddingRight: 20,
        marginTop: 38
    },
    leftLineBar: {
        display: 'flex',
        width: 10,
        height: 195,
        borderRadius: 5,
        backgroundColor: '#fcf53c80',
    },
    answerColumnContainer: {
        display: 'flex',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        width: CARD_WIDTH - 29,
        marginBottom: 15,
        // borderColor: 'red',
        // borderWidth: 1,
    },
    answerRowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: CARD_WIDTH - 29 - 20,
        marginRight: 20,
        paddingRight: 20
        // borderColor: 'red',
        // borderWidth: 1,
    },
    leftLineBarCircle: {
        display: 'flex',
        backgroundColor: ORANGE,
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: -10,
    },
    answerRow: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 22,
        marginBottom: 75,
        marginRight: 20,
        paddingRight: 20
        // borderColor: 'red',
        // borderWidth: 1
    },
    answerUserImage: {
        display: 'flex',
        alignSelf: 'flex-start',
        width: 28,
        height: 28,
        borderRadius: 14,
        borderColor: WHITE,
        borderWidth: 1.2,
        marginRight: 10,
    },
    noAnswerView: {
        marginLeft: 23,
        marginBottom: 151,
    },
    noAnswerText: {
        display: 'flex',
        color: BLACK,
        fontSize: 20,
        fontFamily: CARD_FONT,
        fontWeight: '400',
        letterSpacing: 0.4,
    },
    answerText: {
        display: 'flex',
        color: BLACK,
        fontSize: 20,
        fontFamily: CARD_FONT,
        fontWeight: '400',
        letterSpacing: 0.4,
        marginRight: 20
    },
    selectedAnswer:{
        bottom: 30,
        display: 'flex',
        alignSelf: 'flex-end',
        marginRight: 20,
        color: PRIMARY_COLOR,
        fontSize: 13,
        fontFamily: CARD_FONT_BARUN,
        fontWeight: '700',
        letterSpacing: 0.26,
    },
    selectAnswerButton: {
        bottom: 30,
        display: 'flex',
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    selectAnswerText: {
        display: 'flex',
        color: PRIMARY_COLOR,
        fontSize: 13,
        fontFamily: CARD_FONT_BARUN,
        fontWeight: '700',
        letterSpacing: 0.26,
    },
    
});
