import React from 'react'
import Chatbox from './chaboxt'
import { getDatabase, ref, push, set, onValue, remove } from 'firebase/database';

const Chat = () => {
  return (
    <div className='devesh flex flex-row-reverse  '>
      <div className='w-screen xl:w-1/2'>
        <Chatbox /> 
      </div>
      {/* <div className=''>
        {
          users.map((user) =>
          
        )}
      </div> */}
    </div>
  )
}

export default Chat