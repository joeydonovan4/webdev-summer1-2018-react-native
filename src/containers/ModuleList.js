import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Text, ListItem, List } from "react-native-elements";

class ModuleList extends Component {
    static navigationOptions = {title: 'Modules'};

    componentDidMount() {
        const { navigation } = this.props;
        const courseId = navigation.getParam('courseId', 0);
        this.props.findAllModulesForCourse(courseId);
    }

    renderModules() {
        if (this.props.modules) {
            return this.props.modules.map(mod => (
                <ListItem title={mod.title} key={mod.id}
                    onPress={() => {
                        this.props.navigation.navigate('LessonList', {
                            moduleId: mod.id,
                            courseId: this.props.courseId
                        });
                    }}/>
            ))
        }
        return null;
    }

    render() {
        return (
            <List>
                {this.renderModules()}
            </List>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    modules: state.moduleReducer.modules,
    courseId: state.moduleReducer.courseId
});

const dispatcherToPropsMapper = dispatch => ({
    findAllModulesForCourse: (courseId) => actions.findAllModulesForCourse(dispatch, courseId)
});

const ModuleListContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(ModuleList);

export default ModuleListContainer;