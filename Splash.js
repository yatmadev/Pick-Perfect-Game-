import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native'
import {
    COLOR_PINK, COLOR_PINK_LIGHT, 
    COLOR_FACEBOOK, COLOR_PINK_MEDIUM} 
from './myColors'
var {height, width} = Dimensions.get('window')
export default class Splash extends Component {
    static navigationOptions = {
        header: null,    
    }
    state = {
        logoOpacity: new Animated.Value(0),
        titleMarginTop: new Animated.Value(height / 2)
    }
    async componentDidMount() {
        //Add animations here
        Animated.sequence([
            //animations by sequence
            Animated.timing(this.state.logoOpacity,{
                toValue: 1,                  
                duration: 1500,              
            }),
            //Animate Text ?
            Animated.timing(this.state.titleMarginTop, {
                toValue: 10,
                duration: 1000, //1000 miliseconds = 1 second
            })
        ]).start(() => {
            //End of animations
            //How to navigate to Login ? => Use StackNavigation
            this.props.navigation.navigate("Login")
        })
    }
    render() {
        return <View style={styles.container}>
        <ImageBackground source={require('./images/Spimg.jpg')}  style={styles.backgroundImage}>
            <Animated.Image source={require('./images/Cropimg.png')} 
                style={{...styles.logo, opacity: this.state.logoOpacity}}>                
            </Animated.Image>
            <Animated.Text style={{...styles.title, 
                                marginTop:this.state.titleMarginTop}}>
                Let's Start !
            </Animated.Text>
            </ImageBackground>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
   },
    logo: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
    },
    title: {        
        color: 'white',
        marginTop: 10,    
        textAlign: 'center',
        width: 400,
        fontSize: 21,
        fontWeight: 'bold'
    }
})