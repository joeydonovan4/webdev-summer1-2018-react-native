import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { View } from "react-native";
import { ListItem, Card } from "react-native-elements";

class LessonList extends Component {
    static navigationOptions = {title: 'Lessons'};

    componentDidMount() {
        const { navigation } = this.props;
        const courseId = navigation.getParam('courseId', 0);
        const mod = navigation.getParam('module', null);
        this.props.findAllLessonsForModule(courseId, mod);
    }

    renderLessons() {
        if (this.props.lessons) {
            return this.props.lessons.map(lesson => (
                <ListItem title={lesson.title} key={lesson.id}
                    onPress={() => {
                        this.props.navigation.navigate('TopicList', {
                            lesson: {id: lesson.id, name: lesson.title}
                        });
                    }}/>
            ))
        }
        return null;
    }

    render() {
        return (
            <Card title={"Lessons for " + this.props.module.name}>
                <View>
                    {this.renderLessons()}
                </View>
            </Card>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    module: state.lessonReducer.module
});

const dispatcherToPropsMapper = dispatch => ({
    findAllLessonsForModule: (courseId, mod) => actions.findAllLessonsForModule(dispatch, courseId, mod)
});

const LessonListContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(LessonList);

export default LessonListContainer;