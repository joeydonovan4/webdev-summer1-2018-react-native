import React, { Component } from 'react';
import { ScrollView, StatusBar } from "react-native";
import { Button } from 'react-native-elements';

class Home extends Component {
    static navigationOptions = { title: 'Home' };

    render() {
        return (
            <ScrollView>
                <StatusBar hidden={true}/>
                <Button title="Courses" onPress={() => this.props.navigation.navigate('CourseList')}/>
            </ScrollView>
        )
    }
}
export default Home;