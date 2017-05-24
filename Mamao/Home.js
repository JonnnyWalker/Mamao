import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Image,
  Text,
} from 'react-native';
import firebase from './firebase';
import {Actions} from 'react-native-router-flux';
import EventCard from './EventCard';

export default class Home extends Component {
 constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      event: ds.cloneWithRows([])
    };
}

_renderRow(rowData, sectionID, rowID) {
    return (
        <EventCard item={rowData}></EventCard>
    )
}

componentDidMount(){
  firebase.database()
    .ref('event')
    .once('value', (snapshot) => {
      const value = snapshot.val();
      console.log("------------------------------------", value);
      this.setState({event: this.state.dataSource.cloneWithRows(value)});      
    });
}

//<Image source = {require('./img/00001.jpg')} onPress={Actions.Event} />,
  render() {
    return (
      <View>
          {          
          <ListView
            style = {styles.listContainer}
            dataSource={this.state.event}
            renderRow={this._renderRow}
          />
        }
      </View>
    );
  }

}

const styles = StyleSheet.create ({
   listContainer: {
     paddingTop: 50,
   },
});



///dataSource: ds.cloneWithRows([

///{image: require('./img/00001.jpg'), title: "ขอวอนก่อนไฟนอล : ศิลปิน SOMKIAT @Zound 21.04.2017"},
///{image: require('./img/00002.jpg'), title: "DJ FAAHSAI x MC HARLEMBAY @Zound 22.04.2017"},
///{image: require('./img/00003.jpg'), title: "DJ SPACEMONKEY x MC EDDY @Zound 12.04.2017"},
///{image: require('./img/00004.jpg'), title: "หากรักกินไม่ได้ : Songkran ศิลปิน สงกรานต์ รังสรรค์ @Zound 03.03.2017"},
///{image: require('./img/00005.jpg'), title: "ติวเข้มวิชา ซาวด์ : Getsunova THE FIRST ALBUM @Zound 04.03.2017"},
///{image: require('./img/00006.jpg'), title: "SHIT CAKE วงดนตรีเท่ห์ๆ กับแนวเพลงสากล Alternative Rock @Zystem 12.01.2017 "},
///{image: require('./img/00007.jpg'), title: "Zystem House of Music อยากรู้หัวใจคนโสด ศิลปิน วี วิโอเลต @Zystem 24.03.2017 "},
///{image: require('./img/00008.jpg'), title: "โสดนานไปแล้ว ศิลปิน The Ghost Cat @Zound 13.01.2017"},
///{image: require('./img/00009.jpg'), title: "DJ JEFFY x MC BOSZ X MC CHOI @Zound 11.03.2017"},
///{image: require('./img/00010.jpg'), title: "Zystem House of Music ทบทวนดูอีกทีก่อนจะไป ศิลปิน ลุลา @Zystem 30.03.2017"},
///{image: require('./img/00011.jpg'), title: "DJ ZTONE MC BPM MAKE YOU FREAK @Zound 10.04.2017"},
///{image: require('./img/00012.jpg'), title: "ซาวด์แจกบัตรสาดกันใหญ่เพียงซื้อ Blend 285 1 เซต / UBEER 1 โปร รับบัตร 1 day ฟรี 2 ใบ 3-6.03.2017"},
///{image: require('./img/00013.jpg'), title: "TICKET บัตรสาดรายวันซื้อบัตรได้ที่หน้างาน จำหน่ายตั้งแต่ 7-12.03.2017"},
///{image: require('./img/00014.jpg'), title: "ZOUND 2nd ANNIVERSARY Animal Project ศิลปิน Slot Machine @Zound 30.12.2016"},

///])