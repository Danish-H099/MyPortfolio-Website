import React from 'react'

function Chatbot() {
    async function sendMessage() {
        const input = document.getElementById("user-input").value;
    
        const response = await fetch("https://api.groqcloud.com/chatbot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ input }),
        });
    
        const data = await response.json();
        document.getElementById("response-box").innerText = data.response;
    }
    return (
        <>
            <div id="chatbot" class="chatbot-container flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
                <input id="user-input" type="text" placeholder="Ask me a question" class="p-2 mb-4 w-80 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button onclick={sendMessage} class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Send
                </button>
                <div id="response-box" class="mt-4 p-4 bg-gray-800 w-80 rounded text-white">this is the resulst</div>
            </div>

        </>
    )
}

export default Chatbot
