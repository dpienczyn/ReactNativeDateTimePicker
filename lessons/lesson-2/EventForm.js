import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

class EventForm extends Component {
  handleAddPress = () => {
    this.props.navigation.navigate('list');
  }

  render() {
    return(
      <View>
        <TouchableHighlight
          onPress={this.handleAddPress}
        >
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EventForm;
