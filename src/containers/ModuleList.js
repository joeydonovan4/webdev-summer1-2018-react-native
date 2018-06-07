import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { View, StyleSheet } from "react-native";
import { Text, ListItem, List } from "react-native-elements";

class ModuleList extends Component {
    static navigationOptions = {title: 'Modules'};

    componentDidMount() {
        const { navigation } = this.props;
        const course = navigation.getParam('course', null);
        this.props.findAllModulesForCourse(course);
    }

    renderModules() {
        if (this.props.modules) {
            return this.props.modules.map(mod => (
                <ListItem title={mod.title} key={mod.id}
                    onPress={() => {
                        this.props.navigation.navigate('LessonList', {
                            module: {id: mod.id, name: mod.title},
                            courseId: this.props.course.id
                        });
                    }}/>
            ))
        }
        return null;
    }

    render() {
        return (
            <View>
                <Text h4 style={styles.header}>Modules for {this.props.course.name}</Text>
                <List>
                    {this.renderModules()}
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
    modules: state.moduleReducer.modules,
    course: state.moduleReducer.course
});

const dispatcherToPropsMapper = dispatch => ({
    findAllModulesForCourse: (course) => actions.findAllModulesForCourse(dispatch, course)
});

const ModuleListContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(ModuleList);

export default ModuleListContainer;