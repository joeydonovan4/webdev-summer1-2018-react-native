import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { View, StyleSheet } from "react-native";
import { Text, ListItem, List } from "react-native-elements";

class TopicList extends Component {
    static navigationOptions = {title: 'Topics'};

    componentDidMount() {
        const { navigation } = this.props;
        const lesson = navigation.getParam('lesson', null);
        this.props.findAllTopicsForLesson(lesson);
    }

    renderTopics() {
        if (this.props.topics) {
            return this.props.topics.map(topic => (
                <ListItem title={topic.title} key={topic.id}/>
            ));
        }
        return null;
    }

    render() {
        return (
            <View>
                <Text h4 style={styles.header}>Topics for {this.props.lesson.name}</Text>
                <List>
                    {this.renderTopics()}
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
    topics: state.topicReducer.topics,
    lesson: state.topicReducer.lesson
});

const dispatcherToPropsMapper = dispatch => ({
    findAllTopicsForLesson: (lesson) => actions.findAllTopicsForLesson(dispatch, lesson)
});

const TopicListContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(TopicList);

export default TopicListContainer;