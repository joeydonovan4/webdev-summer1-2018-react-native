import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Image, Linking } from "react-native";
import { Text, Card, Button, List, ListItem } from "react-native-elements";

class WidgetPreview extends Component {
    render() {
        return (
            <Card title={"Preview for " + this.props.widgetPreview.name}>
                {this.props.widgetPreview.widgetType === 'Heading' && <HeadingPreview heading={this.props.widgetPreview}/>}
                {this.props.widgetPreview.widgetType === 'Paragraph' && <ParagraphPreview paragraph={this.props.widgetPreview}/>}
                {this.props.widgetPreview.widgetType === 'List' && <ListPreview list={this.props.widgetPreview}/>}
                {this.props.widgetPreview.widgetType === 'Image' && <ImagePreview image={this.props.widgetPreview}/>}
                {this.props.widgetPreview.widgetType === 'Link' && <LinkPreview link={this.props.widgetPreview}/>}
                <Button buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10}}
                    title="Exit Preview" onPress={this.props.exitPreview}/>
            </Card>
        )
    }
}

const HeadingPreview = ({heading}) => {
    switch (heading.size) {
        case 1:
            return <Text h1>{heading.text}</Text>
        case 2:
            return <Text h2>{heading.text}</Text>
        case 3:
            return <Text h3>{heading.text}</Text>
        default:
            return null;
    }
};

const ParagraphPreview = ({paragraph}) => {
    return <Text>{paragraph.text}</Text>
};

const ListPreview = ({list}) => {
    if (list.listItems) {
        let itemNumber = 0;
        let listItems = list.listItems.split("\n").map((item) => (
            <ListItem key={++itemNumber} title={item}/>
        ));
        return (
            <List>
                {listItems}
            </List>
        )
    } else {
        return null;
    }
};

const ImagePreview = ({image}) => {
    return <Image source={image.src}/>
};

const LinkPreview = ({link}) => {
    return <Text style={{color: 'blue'}} onPress={() => Linking.openURL(link.href)}>{link.text}</Text>
};

const stateToPropertiesMapper = (state) => ({
    widgetPreview: state.widgetReducer.widgetPreview
});

const dispatcherToPropsMapper = dispatch => ({
    exitPreview: () => actions.exitPreview(dispatch)
});

const WidgetPreviewContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(WidgetPreview);

export default WidgetPreviewContainer;