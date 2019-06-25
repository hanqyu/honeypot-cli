import React from "react";
import styles from "./styles/AnswerList";

import { Modal, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";


export default class AnswerList extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            ...props
        };
    }


    // componentDidMount() {

    // };


    render() {
        const listIsNotEmpty = (this.state.dataSource.length !== 0);
        return (
            <View style={styles.container}>
                <View style={styles.contentsContainer}>
                    {/* upperBar */}
                    <View style={styles.upperBar}>
                        {/* labelAnswerBy */}
                        <Text style={styles.labelAnswerBy}>Answered{'\n'}By</Text>

                        {/* upperRight Information */}
                        <View style={styles.upperRightArea}>
                            {/* answered people */}
                            <View style={styles.answeredPeopleContainer}>
                                <Image style={styles.answeredPeopleImageBig} source={require('../assets/images/default.jpg')} />
                                {/* hasSelectedAnswer */}
                                <LinearGradient colors={['#ffec00', '#ff8500']} style={styles.answeredPeopleImageSelected} />
                                <Image style={styles.answeredPeopleImageSmallLeft} source={require('../assets/images/default.jpg')} />
                                <Image style={styles.answeredPeopleImageSmallRight} source={require('../assets/images/default.jpg')} />
                            </View>
                            {/* moreHorizontal */}
                            <TouchableOpacity style={styles.moreHorizontal}>
                                <Image style={styles.moreHorizontal} source={require('../assets/icons/moreHorizontal.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* listContainer */}
                    <View style={styles.listContainer}>
                        {/* leftLineBar */}
                        {listIsNotEmpty && (<View style={styles.leftLineBar} />)}

                        {/* answerItemContainer */}
                        <View style={styles.answerItemContainer}>
                            {/* empty status text */}
                            {(listIsNotEmpty == false) && (
                                <View style={styles.answerColumnContainer}>
                                    {/* answerRowContainer */}
                                    <View style={styles.answerRowContainer}>
                                        {/* leftLineBarCircle */}
                                        <View style={[styles.leftLineBarCircle, { marginLeft: 0 }]} />
                                        {/* answerTextContainer */}
                                        <View style={styles.answerTextContainer}>
                                            <Text style={styles.answerText}>
                                                아직 답변이 없는 질문이에요
                                        </Text>
                                        </View>
                                    </View>
                                </View>
                            )}

                            {this.state.dataSource.map((item, index) => (
                                <View style={styles.answerColumnContainer}>
                                    {/* answerRowContainer */}
                                    <View style={styles.answerRowContainer}>
                                        {/* leftLineBarCircle */}
                                        <View style={styles.leftLineBarCircle} />
                                        {/* answerTextContainer */}
                                        <View style={styles.answerTextContainer}>
                                            {/* answerLabelContainer */}
                                            <View style={styles.answerLabelContainer}>
                                                {/* labelA */}
                                                <Text style={styles.labelA}>A{index}.</Text>
                                                {(item.isSelected) && (
                                                    // selectedAnswerBox
                                                    <LinearGradient colors={['#ffec00', '#ff8500']} style={styles.selectedAnswerBox}>
                                                        <Text style={styles.selectedAnswerText}>채택</Text>
                                                    </LinearGradient>
                                                )}
                                            </View>
                                            <Text style={styles.answerText}>
                                                {item.text}
                                            </Text>
                                        </View>
                                    </View>
                                    <Image style={styles.answerItemImage} source={require('../assets/images/default.jpg')} />
                                </View>
                            ))}
                        </View>
                    </View>
                    {listIsNotEmpty && (<LinearGradient colors={['#FFFFFF00', '#FFFFFF']} style={styles.bottomGradient}></LinearGradient>)}
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Image style={styles.buttonImage} source={require('../assets/icons/chevronDown.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};
