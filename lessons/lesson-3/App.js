import {
  StackNavigator,
} from 'react-navigation';
import EventList from './EventList';
import EventForm from './EventForm';
import ListPosts from './ListPosts';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export default StackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your events',
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an event',
    }),
  },
  listPosts: {
    screen: ListPosts,
    navigationOptions: () => ({
      title: 'Add an posts',
    }),
  },
});
