import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function HomePage () {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Snap Chat</Text>
			<Image source={require('./img1.png')} style={styles.img}/>
            <TouchableOpacity >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.loginText}>Sign Out</Text>
		</View>
    )
}
const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "yellow"
	},	
    textTitle: {
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    }, 
	img:{
        flex: 1,
		width: '80%',
		height: '40%',
		marginBottom: 20,
        justifyContent: "center",
	},
    loginText: {
        fontSize: 16,
        backgroundColor: 'lightblue',
        fontWeight: 'bold',
        marginBottom: 20
    }, 
})