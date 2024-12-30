
function Chatbot() {
    async function sendMessage() {

        const input = document.getElementById("user-input").value;

        const url = 'https://api.together.xyz/v1/chat/completions';
        const options = {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer b429895ff18da8b0bf078c5b6c53576f2fb55a11d4ea729ee89865b99fbe225c',
          },
          body: JSON.stringify({
            model: 'meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo',
            response_format: {type: 'json_schema'},
            messages: [{role: 'user', content: input}],
          })
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            const message = data.choices[0].message.content;
            document.getElementById("response-box").innerText = message;
        } catch (error) {
            console.error(error);
            document.getElementById("response-box").innerText = "Error: "+error;
        }
    }
    
    return (
        <>
            <div id="chatbot" className="chatbot-container flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
                <input id="user-input" type="text" placeholder="Ask me a question" className="p-2 mb-4 w-80 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button onClick={sendMessage} className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Send
                </button>
                <div id="response-box" className="mt-4 p-4 bg-gray-800 w-80 rounded text-white">this is the resulst</div>
            </div>

        </>
    )
}

export default Chatbot
