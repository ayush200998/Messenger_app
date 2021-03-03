import React, { useState , useEffect } from 'react'
import {  FormControl, Input, IconButton } from '@material-ui/core'
import Message from './Message.js'
import db from './firebase'
import firebase from 'firebase'
import FlipMove  from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import './App.css';

function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{}])
  const [username , setUsername] = useState('')

  // For setting the username one time only.
  useEffect(() => {
    setUsername(prompt("Enter your name"))
  } , [])

  
  const sendMessage = (event) => {
    event.preventDefault()

      db.collection('messages').add({
        message: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput('')
    }

    // useEffect for the database.
  // 1. onSnapshot looks for a change in the document.
  //    if(change){
  //    onSnapshot() runs  
  //    }

  // 2. snapshot refers to the whole document of the message collection.
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp' , 'desc')
    .onSnapshot(snapshot => { 
      setMessages(snapshot.docs.map(doc =>  doc.data() ))
    })
  }, [])

  

  return (
    <div className="App">
      
        <h1>Messenger Clone</h1>
        <h2>Welcome {username}</h2>
      <form className='app_form'>
        <FormControl className='app_formControl'>
          {/* <InputLabel>Enter text....</InputLabel> */}
          <Input placeholder='Enter text....' className='app_input' value={input} onChange={(event) => setInput(event.target.value)} />

          <IconButton
           className='app_iconButton'
           disabled={!input}
           variant="contained"
           color="primary"
           type='submit'
           onClick={sendMessage}
          >
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map((message) => (
           <Message key={message.timestamp} username={username} message={message}/>
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
