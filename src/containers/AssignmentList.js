import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { View, ScrollView } from "react-native";
import { Card, Button, Text, FormLabel, FormInput } from "react-native-elements";

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
                <View key={assignment.id}>
                    <Card>
                        <FormLabel>Name</FormLabel>
                        <FormInput ref={ref => assignmentName = ref} value={assignment.name} placeholder="Enter assignment name"
                            onChangeText={() => this.props.assignmentNameUpdated(assignment.id, assignmentName.value)}/>
                        <FormLabel>Title</FormLabel>
                        <FormInput ref={ref => assignmentTitle = ref} value={assignment.title} placeholder="Enter assignment title"
                            onChangeText={() => this.props.assignmentTitleUpdated(assignment.id, assignmentTitle.value)}/>
                        <FormLabel>Points</FormLabel>
                        <FormInput ref={ref => assignmentPoints = ref} value={assignment.points} keyboardType="numeric" placeholder="Enter points"
                            onChangeText={() => this.props.assignmentPointsUpdated(assignment.id, assignmentPoints.value)}/>
                        <FormLabel>Description</FormLabel>
                        <FormInput ref={ref => assignmentDescription = ref} placeholder="Enter description" multiline={true} numberOfLines={5}
                            onChangeText={() => this.props.assignmentDescriptionUpdated(assignment.id, assignmentDescription.value)}/>
                        <Text h4>Answers</Text>
                        <FormLabel>Essay answer</FormLabel>
                        <FormInput ref={ref => assignmentText = ref} value={assignment.text} multiline={true} numberOfLines={5} placeholder="Enter essay answer"
                            onChangeText={() => this.props.assignmentTextUpdated(assignment.id, assignmentText.value)}/>
                        <FormLabel>Upload a file</FormLabel>
                        <FormInput value={assignment.file}/>
                        <FormLabel>Submit a link</FormLabel>
                        <FormInput ref={ref => assignmentLink = ref} value={assignment.link} placeholder="Enter link answer"
                            onChangeText={() => this.props.assignmentLinkUpdated(assignment.id, assignmentLink.value)}/>
                    </Card>
                </View>
            ));
        }
        return <Text h4 style={{textAlign: 'center'}}>No Assignments Created</Text> ;
    }

    render() {
        return (
            <ScrollView>
                <Card title={"Assignments for " + this.props.topic.name}>
                    {this.renderAssignments()}
                </Card>
                <View style={{margin: 5}}>
                    <Button title="New Assignment" onPress={this.props.addAssignment}/>
                </View>
            </ScrollView>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    assignments: state.assignmentReducer.assignments,
    topic: state.widgetReducer.topic
});

const dispatcherToPropsMapper = dispatch => ({
    filterAssignmentsFromWidgets: (widgets) => actions.filterAssignmentsFromWidgets(dispatch, widgets),
    addAssignment: () => actions.addAssignment(dispatch),
    assignmentNameUpdated: (id, name) => actions.assignmentNameUpdated(dispatch, id, name),
    assignmentTitleUpdated: (id, title) => actions.assignmentTitleUpdated(dispatch, id, title),
    assignmentPointsUpdated: (id, points) => actions.assignmentPointsUpdated(dispatch, id, points),
    assignmentDescriptionUpdated: (id, description) => actions.assignmentDescriptionUpdated(dispatch, id, description),
    assignmentTextUpdated: (id, text) => actions.assignmentTextUpdated(dispatch, id, text),
    assignmentLinkUpdated: (id, link) => actions.assignmentLinkUpdated(dispatch, id, link)
});

const AssignmentListContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(AssignmentList);

export default AssignmentListContainer;