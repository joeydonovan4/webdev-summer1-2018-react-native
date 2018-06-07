import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { View, StyleSheet } from "react-native";
import { Text, ListItem, List } from "react-native-elements";

class CourseList extends Component {
    static navigationOptions = {title: 'Courses'};

    componentDidMount() {
        this.props.findAllCourses();
    }

    renderCourses() {
        if (this.props.courses) {
            return this.props.courses.map(course => (
                <ListItem title={course.title} key={course.id}
                    onPress={() => {
                        this.props.navigation.navigate('ModuleList', {
                            course: {id: course.id, name: course.title}
                        });
                    }}/>
            ))
        }
        return null;
    }

    render() {
        return (
            <View>
                <Text h4 style={styles.header}>All Courses</Text>
                <List>
                    {this.renderCourses()}
                </List>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        marginTop: 2,
        fontWeight: 'bold'
    }
});

const stateToPropertiesMapper = (state) => ({
    courses: state.courseReducer.courses,
});

const dispatcherToPropsMapper = dispatch => ({
    findAllCourses: () => actions.findAllCourses(dispatch)
});

const CourseListContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(CourseList);

export default CourseListContainer;