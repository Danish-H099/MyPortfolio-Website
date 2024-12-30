import React from 'react'

function ChatboxIcon() {
    return (
        <div className='chatbot w-24 h-20 flex fixed justify-center items-center border-red-500 border-2 rounded-2xl left-10 bottom-16 cursor-pointer hover:bg-red-500 hover:text-white'>
          <h1 className='text-white'><a href='#chatbot'>Chatbot</a></h1>
        </div>
    )
}

export default ChatboxIcon
