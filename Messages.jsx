import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

/* Source: https://www.cometchat.com/tutorials/build-a-chat-app-with-react-native-gifted-chat

Display the list of messages whenever the user chooses a conversation
Step 1: Define a state to store the list of messages
Step 2: Define a function to load the list of messages from the chat
Step 3: Call that function by using useEffect hook
Step 4: Transform the response before update the state
Step 5: After updating the state, the component will be re-rendered,
and the list of message will be display on the UI
*/


export default function Messages(){
    const [ messages, setMessages ] = useState([]);
    // const Image = () => {
    //     return (
    //         {image: "https://images.unsplash.com/photo-1657563495712-d581ce8e4f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
    //     )
    // }
    // useEffect(()=>{
    //     setMessages([
    //     {
    //         _id: 1,
    //         text: "Hello Trung! Do you know what you doing in this project?",
    //         createdAt: new Date(),
    //         user:{
    //         _id: 2,
    //         name: "JavaScript Developer",
    //         avatar: "https://placeimg.com/140/140/any",
    //         text: "Hi Yasen, I think we can come up with a cool idea",
    //         // avatar: "https://placeimg.com/140/140/any",
    //         },
    //     },
    //     ])
    // },[])

    useEffect(() => {
        async function getChat() {
          console.log("starting get!")
          const chatsCol = collection(db, 'Chats');
          const chatsDoc = await getDocs(chatsCol);
          const chatData = chatsDoc.docs.map(doc => doc.data());
          console.log("here chatData", chatData);
          setMessages(chatData[0].messages);
        }
        getChat();
      }, []);
    // const docRef = doc(db, "myFirstChat");
    // const docSnap = await getDoc(docRef);

    const onSend = useCallback((messages= []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    },[])
    return (
        <GiftedChat 
            messages={messages}
            onSend= {messages => onSend(messages)}
            placeholder= "Typing ..."
            user={{
                _id: 1,
                name: "", 
                avatar: "https://placeimg.com/110/110/any",
            }}
            showUserAvatar
            renderUsernameOnMessage
            alwaysShowSend

        />
    );
}