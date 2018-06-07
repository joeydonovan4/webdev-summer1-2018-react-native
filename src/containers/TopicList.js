import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { View } from "react-native";
import { ListItem, Card } from "react-native-elements";

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
                <ListItem title={topic.title} key={topic.id}
                    onPress={() => {
                        this.props.navigation.navigate('WidgetList', {
                            topic: {id: topic.id, name: topic.title},
                            lessonId: this.props.lesson.id
                        })
                    }}/>
            ));
        }
        return null;
    }

    render() {
        return (
            <Card title={"Topics for " + this.props.lesson.name}>
                <View>
                    {this.renderTopics()}
                </View>
            </Card>
        )
    }
}

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