import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Text, ListItem, List } from "react-native-elements";

class LessonList extends Component {
    static navigationOptions = {title: 'Lessons'};

    componentDidMount() {
        const { navigation } = this.props;
        const courseId = navigation.getParam('courseId', 0);
        const moduleId = navigation.getParam('moduleId', 0);
        this.props.findAllLessonsForModule(courseId, moduleId);
    }

    renderLessons() {
        if (this.props.lessons) {
            return this.props.lessons.map(lesson => (
                <ListItem title={lesson.title} key={lesson.id}/>
            ))
        }
        return null;
    }

    render() {
        return (
            <List>
                {this.renderLessons()}
            </List>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    lessons: state.lessonReducer.lessons
});

const dispatcherToPropsMapper = dispatch => ({
    findAllLessonsForModule: (courseId, moduleId) => actions.findAllLessonsForModule(dispatch, courseId, moduleId)
});

const LessonListContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(LessonList);

export default LessonListContainer;