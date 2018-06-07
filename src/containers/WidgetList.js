import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { View } from "react-native";
import { ListItem, Card } from "react-native-elements";

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
                <Card title={"Widgets for " + this.props.topic.name}>
                    <View>
                        {this.renderWidgets()}
                    </View>
                </Card>
            </View>
        )
    }
}

const rightIcon = {
    name: 'info'
};

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