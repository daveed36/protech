import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
             <Image style={styles.logo} source={require('../assets/logo.png')}/>
             <Text style={styles.logoText}>The Technologies Made Better</Text>
             </View>
            <View style={styles.loginButton}>
                <Text style={styles.buttonsText}>LOGIN</Text>
            </View>
            <View style={styles.registerButton}>
                <Text style={styles.buttonsText}>REGISTER</Text>
            </View>
        </ImageBackground>
    );
}
 const styles = StyleSheet.create({
     background: {
         flex: 1,
         justifyContent: 'flex-end',
         alignItems: 'center'

     },
     loginButton:{
         width: '50%',
         height: 70,
         backgroundColor: colors.primary,
         margin:60,
         alignItems:'center',
         borderRadius:30
     },
     logo: {
         width: 200,
         height: 200,
         borderRadius: 30
        },
        logoContainer:{
        flexWrap: 'wrap',
         position: 'absolute',
        top: 200,
        alignItems: 'center',
        
     },
     logoText:{
         color: colors.white,
         fontSize: 30,
         fontStyle: 'italic',
         fontWeight: '500'

     },
     registerButton: {
         width: '50%',
         height: 70,
         backgroundColor: colors.secondary,
         bottom:40,
         alignItems: 'center',
         borderRadius: 30,
     },

     buttonsText: {
        color: colors.white,
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '500',
        top: 20,
        fontWeight: 'bold'
     }
     
 })

export default WelcomeScreen;