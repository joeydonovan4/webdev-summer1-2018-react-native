import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index';
import { createStackNavigator } from "react-navigation";
import Home from "./src/components/Home";
import CourseListContainer from './src/containers/CourseList';
import ModuleListContainer from './src/containers/ModuleList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    )
  }
}
export default App;

const Navigator = createStackNavigator({
  Home,
  CourseList: {screen: CourseListContainer},
  ModuleList: {screen: ModuleListContainer}
});