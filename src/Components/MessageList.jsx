import React from 'react'
import './messageList.css'
import Message from './Message'
import {products} from './data'

const MessageList = () => {
  return (
    
    <div >
    {products.map((item) =>(
      <Message  key = {item.id} img={item.img} link ={item.link} text ={item.text}
       texts ={item.texts} number = {item.number} time = {item.time}/>
    ))}
  </div>
  )
}

export default MessageList
