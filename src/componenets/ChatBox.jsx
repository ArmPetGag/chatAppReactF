import { useEffect, useRef, useState } from 'react';
import Messege from './Messege'
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from '../firebace';


const ChatBox = () => {
  const [messages, setMassages] = useState([]);
  const messegesEndRef = useRef();

  const scrollToBottom = () => {
    messegesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])


  // db ic stanum enq useeffov

  useEffect(() => {
    const q = query(collection(db, "messages"),
      orderBy("createAt"),
      limit(50)

    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMassages(messages);
    });
    return () => unsubscribe
  }, [])

  return (
    <div className="pb-44 pt-20 min-h-screen "
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80")`

      }}>
      {messages.map(message => (<Messege
        key={message.id} message={message}
      />))}
      <div ref={messegesEndRef}></div>
    </div>
  )
}

export default ChatBox