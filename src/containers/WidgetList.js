import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { View } from "react-native";
import { ListItem, Card, Button } from "react-native-elements";
import WidgetPreviewContainer from "./WidgetPreview";
import AssignmentListContainer from "./AssignmentList";

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
            return this.props.widgets.map(widget => {
                if (widget.widgetType !== 'Assignment' && widget.widgetType !== 'Exam') {
                    return <ListItem title={widget.name} key={widget.id} rightIcon={rightIcon}
                        onPressRightIcon={() => {
                            this.props.showWidgetPreview(widget)
                        }}/>
                }
            });
        }
        return null;
    }

    showPreview() {
        if (this.props.previewMode) {
            return <WidgetPreviewContainer/>
        }
        return null;
    }

    render() {
        return (
            <View>
                <Card title={"Widgets for " + this.props.topic.name}>
                    <View>
                        <Button title="Assignments" style={{margin: 3}}
                            onPress={() => {
                                this.props.navigation.navigate('AssignmentList', {
                                    widgets: this.props.widgets
                                })
                            }}/>
                        <Button title="Exams" style={{margin: 3}}/>
                    </View>
                    <View>
                        {this.renderWidgets()}
                    </View>
                </Card>
                {this.showPreview()}
            </View>
        )
    }
}

const rightIcon = {
    name: 'info'
};

const stateToPropertiesMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topic: state.widgetReducer.topic,
    previewMode: state.widgetReducer.previewMode
});

const dispatcherToPropsMapper = dispatch => ({
    findAllWidgetsForLessonTopic: (lessonId, topic) => actions.findAllWidgetsForLessonTopic(dispatch, lessonId, topic),
    showWidgetPreview: (widget) => actions.showWidgetPreview(dispatch, widget)
});

const WidgetListContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(WidgetList);

export default WidgetListContainer;