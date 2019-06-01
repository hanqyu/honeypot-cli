import React from "react";
import styles from "./styles/QuestionSelectCategory";

import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

class CategoryButton extends React.Component {
    render() {
        const { categories, onToggle } = this.props;

        const { buttons } = categories.map(
            ({ id, text, selected }) => (
                <TouchableOpacity
                    id={id}
                    onToggle={onToggle}
                    key={id}
                    selected={selected}>
                    <LinearGradient colors={["#f5a62366", "#f5a62366"]} style={styles.categoryBox}>
                        {/* ["FFEC00", "FF8500"] */}
                        <Text style={styles.categoryText}>
                            {text}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            )
        )
    }
}

class QuestionSelectCategory extends React.Component {
    constructor(props) {
        super(props);
        // this.state.bearer_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTYxMjg3NDQ4LCJqdGkiOiI5ZTdiMmI3NTRiMjg0OWZlYmVjMzM0MTc0Mjc2ZmYyYyIsInVzZXJfaWQiOjJ9.0wmunQASomn39C7-ZLmW80a2JxdRzmXvy5z5OxHUevU';
    }
    render() {
        const categories = ['Hello', 'World', 'Buttons']

        return (
            <View style={styles.container} >

                <TouchableOpacity
                    style={styles.xButton}
                    onPress={() => this.props.closeDisplay()
                    }>
                    <Image source={require('../assets/icons/x.png')} />
                </TouchableOpacity>
                <View style={styles.categoriesContainer}>
                    <LinearGradient colors={["#f5a62366", "#f5a62366"]} selected={false} style={styles.categoryBox}>
                        <Text style={styles.categoryText}>
                            sdㄴㅇㅁㅇㅁㄴㅇ
                        </Text>
                    </LinearGradient>
                    <LinearGradient colors={["#f5a62366", "#f5a62366"]} selected={false} style={styles.categoryBox}>
                        <Text style={styles.categoryText}>
                            여행
                        </Text>
                    </LinearGradient>
                    <LinearGradient colors={["#f5a62366", "#f5a62366"]} selected={false} style={styles.categoryBox}>
                        <Text style={styles.categoryText}>
                            카테ㄴ
                        </Text>
                    </LinearGradient>
                    <LinearGradient colors={["#f5a62366", "#f5a62366"]} selected={false} style={styles.categoryBox}>
                        <Text style={styles.categoryText}>
                            카테고리1
                        </Text>
                    </LinearGradient>
                    <LinearGradient colors={["#f5a62366", "#f5a62366"]} selected={false} style={styles.categoryBox}>
                        <Text style={styles.categoryText}>
                            카테고리1
                        </Text>
                    </LinearGradient>
                    <LinearGradient colors={["#f5a62366", "#f5a62366"]} selected={false} style={styles.categoryBox}>
                        <Text style={styles.categoryText}>
                            ㄴㅇㅁㄴㅇㄴㅁㅇㄴ
                        </Text>
                    </LinearGradient>

                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>선택하기</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

export default QuestionSelectCategory;
