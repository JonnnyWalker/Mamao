import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class EventCard extends Component {
  render() {
      return (
                <View style={styles.container}>
                    <Text style={styles.tex}>{this.props.title}</Text>
                    <Image source = {this.props.image} onPress={Actions.Event} style={styles.img}/>
                </View>       
            );
          }
        }

const styles = StyleSheet.create({
  container: {
     flex:1,
     alignItems: 'stretch',
     marginTop: 10,
     marginBottom: 51
  },
  tex: {
      flex:1,
      paddingLeft: 10,
      paddingRight: 10
  },
  img: {
      width: 'auto',
      height: 400,
  }
});