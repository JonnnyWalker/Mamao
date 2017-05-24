import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class EventCard extends Component {
constructor(props){
    super(props);
    // alert(JSON.stringify(this.props.item));
}

  render() {
      
      return (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.baseText}>
                            <Text style={styles.tText}>{this.props.item.name}</Text>
                            
                            <Text style={styles.bText}>{this.props.item.date}</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.baseText}>
                            <Text style={styles.bText}>{this.props.item.ename}</Text>
                            
                            <Text style={styles.bText}>{this.props.item.place}</Text>
                            
                        </Text>    
                    </View>    
                    <Image source = {{uri: this.props.item.img}} onPress={Actions.Event} style={styles.img}/>
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