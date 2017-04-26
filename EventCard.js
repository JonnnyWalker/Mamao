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
                    <View>
                        <Text style={styles.baseText}>
                            <Text style={styles.tText}>{this.props.titleText}</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.baseText}>
                            <Text style={styles.bText}>{this.props.bodyText}</Text>
                        </Text>    
                    </View>    
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
  baseText: {
      flex:1,
      paddingLeft: 10,
      paddingRight: 10,
      fontFamily: '',
  },
  tText: {
      fontSize: 20,
      fontWeight: 'bold',
  },
  bText: {
      fontStyle: 'italic',
  },
  img: {
      width: 'auto',
      height: 400,
  }
});