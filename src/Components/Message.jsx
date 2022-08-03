import React from 'react'
import "./message.css"
import {products} from './data'

const Message = ({text,texts,number,time}) => {
  return (
    <div className='Each-Line'>
        <div className='dp'>
             <img src='' alt="" className = 'img' />
        </div>

        <div className ='div1'>
          
          <div className='text-and-time'>
            <h4>{text}</h4>
            <p className = 'time'>{time}</p>
            </div>

          <div className = 'div2'>
            <p className ='texts'>{texts} </p>
            <p className = 'number'>{number}</p>
          </div>
            
           
        </div>
    </div>
  )
}

export default Message
