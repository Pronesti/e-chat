import React, {useEffect, useState} from 'react';
import openSocket from 'socket.io-client';
import './index.css';

const App = () => {
  var socket = openSocket('http://localhost:3001/')
  var newChat= [];

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([{msg:"Hola"},{msg:"Todo Bien?"}])

  useEffect(() => {  
    socket.on('new message', function(msg){
      writeMessage(msg)
     });
  },[])

  const writeMessage = (msg) => {
   //newChat = chat.concat(msg); 
   //newChat = [...chat, msg]; //this two takes inital State, but doesn not work with modified state 
   //setChat(newChat);
   chat.push(msg); //this mutates :( and works, but does not re-render itself
  }

  const sendMessage = () => {
    if(message === ""){
      alert("Write something please");
    }else{
      socket.emit('send message', message);
      setMessage("");
    }
    console.log(chat);
}

  return (
    <div>
    <ul id="messages">{chat.map((msg, index) => <li key={index}>{msg.msg}</li>)}</ul>
      <form>
        <input id="m" autoComplete="off" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button type="button" onClick={sendMessage}>Send</button>
      </form>
      
    </div>)
}

export default App
