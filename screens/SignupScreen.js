import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useState} from "react"
import { doc, setDoc } from "firebase/firestore";
import db from "../firebase";

export default function LoginScreen({navigation}) {
	const [registerEmail, setRegisterEmail] = useState();
	const [registerPassword, setRegisterPassword] = useState();

	const auth = getAuth();

	async function handleSubmit() {
		console.log("handle submit envoked!!")

		await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
		.then((userCredential) => {
			const user = userCredential.user;
			auth.currentUser = user;
			console.log("making a new user on firestroe");
			setDoc(doc(db, "Users", user.uid), {
			  // make sure to change these to match the fields on your firestore!
			  username: user.email,
			  bio: "",
			});
		  })
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log("Error when signing up!!!", errorMessage);
		});


	}
	return (
        <View style={styles.container}>
            <Text style={styles.bigBlue}>Sign Up Chat Snap</Text>
			<Image source={require('./img1.png')} style={styles.img}/>
            <View style={styles.inputView}>
                <TextInput style={styles.TextInput}
                    placeholder='Email'
                    placeholderTextColor="#003f5c"
                    onChangeText={(registerEmail) => setRegisterEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.TextInput}
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor="#003f5c"
                    onChangeText={(registerPassword) => setRegisterPassword(password)}
                />
            </View>
            <TouchableOpacity style={styles.signupBtn} onPress={() => {
				handleSubmit();
			}}>
                <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
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
	img:{
		width: '80%',
		height: '30%',
		marginBottom: 20,
	},
	redirectBtn: {
		width:"80%",
		borderRadius:25,
		height:50,
		alignItems:"center",
		justifyContent:"center",
		marginTop:40,
		backgroundColor:"grey",
		color: "white"
	},
	inputView: {
		backgroundColor: "white",
		borderRadius: 30,
		width: 250,
		height: 50,
		marginBottom: 20,
		alignItems: "center",
		textAlign: "center"
	},
	TextInput: {
		height: 50,
		flex: 1,
		padding: 10,
		marginLeft: 20,
		alignContent: 'center',
		justifyContent: 'center',
	},
	bigBlue: {
		flex: 1,
		color: 'black',
		fontWeight: 'bold',
		fontSize: 30,
		padding: 50,
		alignItems: 'center',
	},
	signupBtn: {
		width: 120,
		borderRadius: 25,
		height: 50,
		alignItems:"center",
		justifyContent:"center",
		marginTop:40,
		marginBottom: 50,
		backgroundColor:"white",
	}
})