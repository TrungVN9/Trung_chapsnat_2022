
import React, { useEffect, useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import { GiftedChat } from "react-native-gifted-chat";
import db from "../firebase";
import { collection, getDocs, onSnapshot, doc, updateDoc, arrayUnion } from 'firebase/firestore';

export default function ChatScreen() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      let unsubscribeFromNewSnapshots = onSnapshot(doc(db, "Chats", "myFirstChat"), (snapshot) => {
        console.log("New Snapshot! ", snapshot.data().messages);
        setMessages(snapshot.data().messages);
      });
    
      return function cleanupBeforeUnmounting() {
        unsubscribeFromNewSnapshots();
      };
    }, []);
    
    const onSend = useCallback(async (messages = []) => {
      await updateDoc(doc(db, "Chats", "myFirstChat"), {
        messages: arrayUnion(messages[0])
      });
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
  
    return (
      <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
              // current "blue bubble" user
              _id: "1",
              name: "Ashwin",
              avatar: "https://placeimg.com/140/140/any",
          }}
          showUserAvatar={true}
          renderUsernameOnMessage={true}
      />
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });