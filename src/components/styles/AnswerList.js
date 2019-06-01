
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
        height: CARD_HEIGHT,
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
        height: CARD_HEIGHT - BUTTON_HEIGHT,
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
    answerItemContainer:{

    },
    answerColumnContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: CARD_WIDTH - 29,
        marginBottom: 15
    },
    answerRowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: CARD_WIDTH - 29,
    },
    leftLineBarCircle: {
        display: 'flex',
        backgroundColor: ORANGE,
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: -10,
    },
    answerTextContainer: {
        display: 'flex',
        marginLeft: 24
    },
    answerLabelContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelA: {
        display: 'flex',
        color: BLACK,
        fontSize: 20,
        fontFamily: CARD_FONT,
        fontWeight: '400',
        letterSpacing: 0.4,
    },
    selectedAnswerBox: {
        display: 'flex',
        paddingTop: 2,
        paddingLeft: 8,
        paddingRight: 7,
        paddingBottom: 1,
        borderRadius: 15,
        textAlign: 'center',
        marginLeft: 5
    },
    selectedAnswerText: {
        color: WHITE,
        fontSize: 10,
        fontFamily: CARD_FONT,
        fontWeight: '500',
        letterSpacing: 0.8,
    },
    answerText: {
        display: 'flex',
        color: BLACK,
        fontSize: 20,
        fontFamily: CARD_FONT,
        fontWeight: '400',
        letterSpacing: 0.4,
    },
    answerItemImage: {
        display: 'flex',
        alignSelf: 'flex-end',
        marginTop: 6,
        width: 28,
        height: 28,
        borderRadius: 14,
        borderColor: WHITE,
        borderWidth: 1.2,
        marginRight: 20,
    },
    bottomGradient: {
        zIndex: 1,
        height: 52,
        bottom: 52 + BUTTON_HEIGHT,
    },

    // button
    buttonContainer: {
        backgroundColor: WHITE,
        display: "flex",
        alignSelf: "flex-end",
        flexDirection: 'row',
        justifyContent: 'center',
        height: BUTTON_HEIGHT,
        overflow: 'hidden',
        borderRadius: 15
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
    buttonImage: {
        alignSelf: 'center',
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
