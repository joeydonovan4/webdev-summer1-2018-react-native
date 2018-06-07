import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
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
                            courseId: course.id
                        });
                    }}/>
            ))
        }
        return null;
    }

    render() {
        return (
            <List>
                {this.renderCourses()}
            </List>
        )
    }
}

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