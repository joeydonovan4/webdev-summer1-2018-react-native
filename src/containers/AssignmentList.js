import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { View } from "react-native";
import { ListItem, Card, Button, Text } from "react-native-elements";

class AssignmentList extends Component {
    static navigationOptions = {title: 'Assignments'};

    componentDidMount() {
        const { navigation } = this.props;
        const widgets = navigation.getParam('widgets', []);
        this.props.filterAssignmentsFromWidgets(widgets);
    }

    renderAssignments() {
        if (this.props.assignments.length > 0) {
            return this.props.assignments.map(assignment => (
                <ListItem title={assignment.title} key={assignment.id}/>
            ));
        }
        return <Text h4 style={{textAlign: 'center'}}>No Assignments Created</Text> ;
    }

    render() {
        return (
            <Card title={"Assignments for " + this.props.topic.name}>
                <View>
                    {this.renderAssignments()}
                </View>
                <View style={{margin: 5}}>
                    <Button title="New Assignment"/>
                </View>
            </Card>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    assignments: state.assignmentReducer.assignments,
    topic: state.widgetReducer.topic
});

const dispatcherToPropsMapper = dispatch => ({
    filterAssignmentsFromWidgets: (widgets) => actions.filterAssignmentsFromWidgets(dispatch, widgets)
});

const AssignmentListContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(AssignmentList);

export default AssignmentListContainer;