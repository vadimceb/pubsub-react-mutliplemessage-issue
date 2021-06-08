import React, { useState, useRef } from 'react'
import './App.css'
import PubSub from 'pubsub-js'
import { TOPIC } from './utils/publish';


// componente principale, contiene la modale, le card per le scelte, i filtri per lo sfondo, l'avatar, il fumetto dell'avatar e i pulsanti
const App = () => {
  // booleano per la gestione del cambio da modale a cards
  const subscribed = useRef(false)

  const [messages, setMessages] = useState([]);

  if (!subscribed.current) {

    console.log('# subscribed', subscribed)
    // viene chiamata quando è in arrivo un nuovo oggetto rappresentante le informazioni della scelta corrente
    PubSub.subscribe(TOPIC, (msg, data) => {
      console.log("# PubSub.subscribe()", data)
      let msgs = messages;
      msgs.push(data);
      setMessages(msgs);
    })
    subscribed.current = true
  }

  return (
    <div id='mainContainer'>
      {/* utile solo per gli sviluppi */}
      <div id='imageBg' className='framePalinsesto' style={{ backgroundColor: 'yellow' }} >
      </div>
      <div>
        <h2>Open browser console</h2>
        <p>
          For each message sent with publish there are 2 messeges received on subscribe
        </p>
      </div>
    </div>
  )
}

export default App