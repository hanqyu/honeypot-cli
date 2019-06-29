import React from "react";
import styles from "./styles/RegisterCategory";
import Toast, { DURATION } from 'react-native-easy-toast'
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { connect } from 'react-redux';
import { setInputData } from '../store/actions/index'

const NEXT_VIEW = 'Home';
const apiBaseUrl = __DEV__ ? 'http://127.0.0.1:8000/' : 'http://honeypot.hanqyu.com/'

class RegisterCategory extends React.Component {
    state = {
        selectedCategory: [],
        isLoading: false
    }

    componentWillMount() {
        this.getCategories();
    }

    async getCategories() {
        this.setState({ isLoading: true });
        const response = await fetch(apiBaseUrl + 'api/v1/view/category/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.accessToken
            },
            timeout: 3000,
        });
        const responseJson = await response.json();
        if (response.ok) {
            const result = responseJson.results.map((obj) => { return { id: obj.id, name: obj.name } })
            this.setState({
                isLoading: false,
                dataSource: result
            });
        } else {
            this.refs.toast.show(responseJson.error, 2000);
        }
    }

    async postForm() {
        this.setState({ isLoading: true });

        const response = await fetch(apiBaseUrl + 'api/v1/auth/user/' + this.props.userId + '/', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.accessToken
            },
            timeout: 3000,
            body: JSON.stringify({
                category: this.state.selectedCategory
            }),
        });
        const responseJson = await response.json();
        if (response.ok) {
            this.setState({ isLoading: false });
        } else {
            this.refs.toast.show(responseJson.error, 2000);
        }
    }

    handleForm() {
        if (this.state.selectedCategory) {
            this.postForm()
        }
        this.props.navigation.navigate(NEXT_VIEW);
    }

    handleCategoryItem(categoryId) {
        newSelectedCategory = this.state.selectedCategory
        if (this.state.selectedCategory.includes(categoryId)) {
            const index = this.state.selectedCategory.indexOf(categoryId)
            // array에서 제거
            if (index > -1) {
                newSelectedCategory.splice(index, 1)
            }
        } else {
            newSelectedCategory.push(categoryId)
        }
        this.setState({
            selectedCategory: newSelectedCategory
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/* toast */}
                <Toast
                    style={styles.toastError}
                    position='top'
                    positionValue={60}
                    fadeInDuration={500}
                    fadeOutDuration={500}
                    opacity={0.7}
                    textStyle={styles.toastErrorText}
                    ref='toast' />

                {/* chevronLeft */}
                <View style={styles.upperBar}>
                    <TouchableOpacity style={styles.chevronLeft} onPress={() => { this.props.navigation.goBack() }}>
                        <Image source={require('../assets/icons/chevronLeft.png')} />
                    </TouchableOpacity>
                </View>

                {/* labelJumbo */}
                <Text style={styles.labelJumbo}>
                    간단한 회원가입으로{'\n'}
                    허니팟을 즐겨보세요!
                    </Text>
                {/* RegisterFormCategory */}
                <View style={styles.formContainer}>
                    {/* label */}
                    <View style={[styles.formStateLabelContainer, { marginBottom: 27 }]}>
                        <Text style={styles.formStateLabel}>관심사 선택</Text>
                        <Text style={styles.formStateLabel}>3/3</Text>
                    </View>

                    {/* Category */}
                    {this.state.isLoading ?
                        <ActivityIndicator size="small" color="#FFFFFF" />
                        : <View style={styles.categoriesContainer}>
                            {this.state.dataSource.map((category) => (
                                <TouchableOpacity
                                    style={this.state.selectedCategory.includes(category.id) ? styles.categoryBoxSelected : styles.categoryBox}
                                    onPress={() => this.handleCategoryItem(category.id)}
                                    key={category.id}
                                >
                                    <Text style={styles.categoryText}>
                                        {category.name}
                                    </Text>
                                </TouchableOpacity>
                            ))
                            }
                        </View>
                    }
                </View>

                {/* button */}
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.handleForm()}>
                    <Text style={styles.buttonText}>
                        다음
                        </Text>
                </TouchableOpacity>
            </View >
        )
    }
}


const mapStateToProps = state => {
    return {
        accessToken: state.auth.accessToken,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetInputData: (inputData) => dispatch(setInputData(inputData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCategory);