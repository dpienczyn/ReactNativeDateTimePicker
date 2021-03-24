import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default class ListPosts extends React.Component {
  state = {
    dataSource: []
  }

  async componentDidMount(){
      var response = await fetch('http://localhost:3000/posts.json')
      var responseJsonData = await response.json()
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
      console.log(responseJsonData)
      this.setState({ dataSource: responseJsonData })
    }

    render() {
      const { navigate } = this.props.navigation
      return (
        <View style={styles.container}>
          <Text style={styles.h2text}>Posts</Text>
          <FlatList
            data={ this.state.dataSource }
            renderItem={({item}) =>
              <View style={styles.flatview}>
                <Text
                  onPress={() => console.log(item.content)}
                  style={styles.title}
                >
                  {item.title}
                </Text>
              </View>
            }
            keyExtractor={ item => `post${item.id}` }
          />
          <Button title="Go Home" onPress={() => navigate('list')} />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    h2text: {
      marginTop: 10,
      fontFamily: 'Helvetica',
      fontSize: 36,
      fontWeight: 'bold',
    },
    flatview: {
      justifyContent: 'center',
      paddingTop: 30,
      borderRadius: 2,
    },
    title: {
      justifyContent: 'center',
      fontFamily: 'Verdana',
      fontSize: 18
    }
  });
