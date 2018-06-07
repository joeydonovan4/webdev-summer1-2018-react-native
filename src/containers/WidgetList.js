import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { View, StyleSheet } from "react-native";
import { Text, ListItem, List } from "react-native-elements";

class WidgetList extends Component {
    static navigationOptions = {title: 'Widgets'};

    componentDidMount() {
        const { navigation } = this.props;
        const lessonId = navigation.getParam('lessonId', 0);
        const topic = navigation.getParam('topic', null);
        this.props.findAllWidgetsForLessonTopic(lessonId, topic);
    }

    renderWidgets() {
        if (this.props.widgets) {
            return this.props.widgets.map(widget => (
                <ListItem title={widget.name} subtitle={widget.description} key={widget.id} rightIcon={rightIcon}/>
            ));
        }
        return null;
    }

    render() {
        return (
            <View>
                <Text h4 style={styles.header}>Widgets for {this.props.topic.name}</Text>
                <List>
                    {this.renderWidgets()}
                </List>
            </View>
        )
    }
}

const rightIcon = {
    name: 'info'
};

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        marginTop: 2,
        fontWeight: 'bold'
    }
});

const stateToPropertiesMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topic: state.widgetReducer.topic
});

const dispatcherToPropsMapper = dispatch => ({
    findAllWidgetsForLessonTopic: (lessonId, topic) => actions.findAllWidgetsForLessonTopic(dispatch, lessonId, topic)
});

const WidgetListContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(WidgetList);

export default WidgetListContainer;