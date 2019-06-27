import React from "react";
import styles from "./styles/QuestionSelectCategory";

import { ActivityIndicator, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { connect } from 'react-redux';
import { setToken, setUserId, setUserName, setLoading, setSelectedCategory, setSelectedCategoryName } from '../store/actions/index'

const apiBaseUrl = __DEV__ ? 'http://127.0.0.1:8000/' : 'https://honeypot.hanqyu.com/'

class QuestionSelectCategory extends React.Component {
    state = {
        selectedCategory: this.props.selectedCategory,
        dataSource: [],
        buttonDisabled: true,
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories() {
        this.props.onSetLoading(true)
        fetch(apiBaseUrl + 'api/v1/view/category/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.accessToken
            },
            timeout: 3000,
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(responseJson => {
            const result = responseJson.results.map((obj) => { return { id: obj.id, name: obj.name } })
            this.setState({
                dataSource: result
            });
        }).then(() => {
            this.props.onSetLoading(false)
        }).catch(error => {
            console.error(error);
        });
    }

    handleCategoryItem(categoryId, categoryName) {
        this.props.onSetSelectedCategory(categoryId);
        this.props.onSetSelectedCategoryName(categoryName);
        this.setState({ selectedCategory: categoryId })
    }

    render() {
        if (this.props.isLoading) {
            return (
                <View style={{ flex: 1, alignSelf: 'center' }}>
                    <ActivityIndicator size="small" />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.xButton}
                    onPress={() => this.props.closeDisplay()
                    }>
                    <Image source={require('../assets/icons/x.png')} />
                </TouchableOpacity>
                <View style={styles.categoriesContainer}>

                    {this.state.dataSource.map((category) => (
                        <TouchableOpacity
                            style={this.state.selectedCategory == category.id ? styles.categoryBoxSelected : styles.categoryBox}
                            onPress={() => this.handleCategoryItem(category.id, category.name)}
                            key={category.id}
                        >
                            <Text style={styles.categoryText}>
                                {category.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                    }

                </View>
                <TouchableOpacity
                    onPress={() => this.state.selectedCategory ? this.props.closeDisplay() : null}
                    style={this.state.selectedCategory ? styles.button : [styles.button, { backgroundColor: '#868e96' }]}>
                    <Text style={styles.buttonText}>선택하기</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        accessToken: state.auth.accessToken,
        userId: state.auth.userId,
        userName: state.auth.userName,
        selectedCategory: state.selectedCategory,
        selectedCategoryName: state.selectedCategoryName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetLoading: (bool) => dispatch(setLoading(bool)),
        onSetSelectedCategory: (selectedCategory) => dispatch(setSelectedCategory(selectedCategory)),
        onSetSelectedCategoryName: (selectedCategoryName) => dispatch(setSelectedCategoryName(selectedCategoryName))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSelectCategory);
