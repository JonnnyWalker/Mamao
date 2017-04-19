import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Image,
  Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import EventCard from './EventCard';

export default class Home extends Component {
 constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {image: require('./img/00001.jpg'), title: "ABC"},
        {image: require('./img/00002.jpg'), title: "XYZ"},
        {image: require('./img/00003.jpg'), title: "XYZ"},
        {image: require('./img/00004.jpg'), title: "XYZ"},
        {image: require('./img/00005.jpg'), title: "XYZ"},
        {image: require('./img/00006.jpg'), title: "XYZ"},
        {image: require('./img/00007.jpg'), title: "XYZ"},
        {image: require('./img/00008.jpg'), title: "XYZ"},
        {image: require('./img/00009.jpg'), title: "XYZ"},
        {image: require('./img/00010.jpg'), title: "XYZ"},
        {image: require('./img/00011.jpg'), title: "XYZ"},
        {image: require('./img/00012.jpg'), title: "XYZ"},
        {image: require('./img/00013.jpg'), title: "XYZ"},
        {image: require('./img/00014.jpg'), title: "XYZ"},
      ])
    };
  }
//<Image source = {require('./img/00001.jpg')} onPress={Actions.Event} />,
  render() {
    return (
      <View>
          <ListView
            style = {styles.listContainer}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <EventCard image={rowData.image} title={rowData.title} />}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
   listContainer: {
     paddingTop: 50,
   },
});