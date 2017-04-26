import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from './firebase';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {test: {a: 0}};
    }
    componentDidMount(){
        var self = this;
        firebase.database()
        .ref('test')
        .on('value', (snapshot) => {
            const value = snapshot.val();
            self.setState({test: value});
                });
    }
    render() {
        return (
            <View style={styles.container}>
                 <Image source={require('./img/bg.jpg')} style={styles.backgroundImage}>
                     <View style={styles.content}>
                        <View>
                            <Text style={styles.logo}>Mamao</Text> 
                        </View>
                        <View>
                            <Text style={styles.logos}>@Hatyai {this.state.test.a}</Text>
                        </View>        
                        <View style={styles.inputContainer}>
                             <TextInput underlineColorAndroid='transparent' style={styles.input}
                                  placeholder='username'>
                             </TextInput>
                             <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                                  placeholder='password'>
                             </TextInput>
                        </View>
                             <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                                 <Text style={styles.buttonText} onPress={Actions.Home}>LOGIN</Text>
                             </TouchableOpacity>
                             <TouchableOpacity onPress={this.signup} style={styles.buttonContainer}>
                                 <Text style={styles.buttonText} onPress={Actions.SignUp}>Sign Up</Text>
                             </TouchableOpacity>
                     </View>
                 </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex:1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
    },
    logo: {
        color: 'white',
        fontSize: 80,
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
        marginBottom: 20,
    },
    logos: {
        color: 'white',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '200',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
        marginBottom: 20,
    },
    inputContainer: {
        margin: 20,
        marginBottom: 0,
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    input: {
        fontSize: 16,
        height: 40,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,1)',
    },
    buttonContainer: {
        alignSelf: 'stretch',
        margin: 20,
        padding: 20,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }

});