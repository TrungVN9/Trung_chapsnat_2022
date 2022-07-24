import { Text} from 'react-native';
import { View, TextInput, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { useAuthentication } from '../utils/hooks/useAuthentication';

export default function LoginScreen({navigation}){
    const [email, setEmail] = useState();
    const [ password, setPassword] = useState();
    const [ login, setLogIn ] = useState(false);
	
    const auth = getAuth();
    async function handleSubmit() {
		console.log("handle submit envoked!!")
		await signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user; 
            console.log(user)
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
            console.log(errorCode, "<---- error code");
            console.log(errorMessage, "<--- error message")
		});
	}
    async function handleSignout() {
        console.log("Sign Out!!!")
        await signOut(auth).then(() => {
            console.log("Sign Out Successfully")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.bigBlue}>Chat Snap</Text>
			<Image source={require('./img1.png')} style={styles.img}/>
            <View style={styles.inputView}>
                <TextInput style={styles.TextInput}
                    placeholder='Email'
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.TextInput}
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor="#003f5c"
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => {
				handleSubmit();
			}}>
                <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutBtn} onPress={() => {
                handleSignout();
            }}>
                <Text style={styles.logoutText}>Sign Out</Text>
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
	loginBtn: {
		width: 120,
		borderRadius: 25,
		height: 50,
		alignItems:"center",
		justifyContent:"center",
		marginTop:40,
		backgroundColor:"white",
	},
	logoutBtn: {
		width:120,
		borderRadius: 25,
		height:50,
		alignItems:"center",
		justifyContent:"center",
		marginTop:40,
		marginBottom: 50,
		backgroundColor:"white",
	}
})