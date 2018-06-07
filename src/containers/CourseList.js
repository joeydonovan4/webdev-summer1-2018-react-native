import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { View } from "react-native";
import { Text, ListItem } from "react-native-elements";

class CourseList extends Component {
    static navigationOptions = {title: 'Courses'};

    componentDidMount() {
        this.props.findAllCourses();
    }

    renderCourses() {
        if (this.props.courses) {
            return this.props.courses.map(course => (
                <ListItem title={course.title} key={course.id}/>
            ))
        }
        return null;
    }

    render() {
        return (
            <View style={{padding: 15}}>
                {this.renderCourses()}
            </View>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    courses: state.courses,
});

const dispatcherToPropsMapper = dispatch => ({
    findAllCourses: () => actions.findAllCourses(dispatch)
});

const CourseListContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(CourseList);

export default CourseListContainer;