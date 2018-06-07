import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { View, StyleSheet } from "react-native";
import { Text, ListItem, List } from "react-native-elements";

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
            <View>
                <Text h4 style={styles.header}>Lessons for {this.props.module.name}</Text>
                <List>
                    {this.renderLessons()}
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