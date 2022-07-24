import React, {useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import db from "../../firebase";

const auth = getAuth();

export function useAuthentication() {
	const [user, setUser] = useState();

	const [userData, setUserData] = useState();
	useEffect(() => {
		const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, async (user) => {
			// const userDataRef = doc(db, '')
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const userRef = doc(db, 'Users', user.uid)
				setUser(user);
				console.log("USER ID: ", userRef)
				const userSnap = await getDoc(userRef)
				const userData = userSnap.data()
				console.log("User Snap Data: ", userSnap.data())
				setUserData(userData)
			} else {
				// User is signed out
				setUser(undefined);
				setUserData(undefined);
			}
			});

			return unsubscribeFromAuthStatusChanged;
		}, []);

	return {
		user, userData
	};
}