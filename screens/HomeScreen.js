import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, signOut } from "firebase/auth";


export default function HomeScreen({ navigation }) {
	const auth = getAuth();
	const user = auth.currentUser;

	console.log(user, "<--- user in the home screen")

	if (user !== null) {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.logoutBtn} onPress={() => {
					signOut(auth).then(() => {
						// Sign-out successful.
						user = null;
					}).catch((error) => {
						// An error happened.
						// should we do something with that error??
					});
				}}>
					<Text style={styles.inputView}>sign out</Text>
				</TouchableOpacity >
					<Text style={styles.loginText}>Hello, {user.email}! </Text>
				<TouchableOpacity style={styles.logoutBtn}
					onPress={() => navigation.navigate("Chat")}
				>
					<Text style={styles.item}>Chat</Text>
				</TouchableOpacity>
			</View>
			)
	} else if (user === null) {
		return (
		<View style={styles.container}>
		<TouchableOpacity
			onPress={() => navigation.navigate("Login")}
		>
			<Text style={styles.item}>login</Text>
		</TouchableOpacity>

		<TouchableOpacity
			onPress={() => navigation.navigate("Signup")}
		>
			<Text style={styles.item}>signup</Text>
		</TouchableOpacity>
		</View>
		);
	}
}
const styles = StyleSheet.create({
	logoutBtn: {
		width:"50%",
		borderRadius:25,
		margin: 25,
		height:50,
		alignItems:"center",
		justifyContent:"center",
		backgroundColor:"white",
		color: "black"
	},
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center", 
		backgroundColor: "yellow",
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
		backgroundColor: "yellow",
		borderRadius: 25,
		margin: 20,
		alignContent: 'center',
	},
	inputView: {
		flex: 1,
		backgroundColor: "white",
		borderRadius: 30,
		width: "70%",
		height: 40,
		marginBottom: 20,
		alignItems: "center",
		textAlign: "center"
	},
});