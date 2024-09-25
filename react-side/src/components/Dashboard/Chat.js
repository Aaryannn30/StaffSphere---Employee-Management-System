// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// // import './App.css'; // Tailwind included in index.html for now

// const socket = io.connect('http://localhost:5000');

// function App() {
//   const [username, setUsername] = useState('');
//   const [currentMessage, setCurrentMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [showUsernameInput, setShowUsernameInput] = useState(true);

//   useEffect(() => {
//     socket.on('chat message', (data) => {
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });
//   }, []);

//   const handleSubmitUsername = (e) => {
//     e.preventDefault();
//     if (username) {
//       setShowUsernameInput(false);
//     }
//   };

//   const handleMessageSubmit = (e) => {
//     e.preventDefault();
//     if (currentMessage) {
//       const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//       socket.emit('chat message', { username, message: currentMessage, timestamp });
//       setCurrentMessage('');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       {showUsernameInput ? (
//         <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-lg">
//           <h3 className="mb-4 text-xl font-semibold text-center">Enter Your Username</h3>
//           <form onSubmit={handleSubmitUsername} className="flex flex-col gap-4">
//             <input
//               type="text"
//               className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Your Name"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <button
//               type="submit"
//               className="py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
//             >
//               Join Chat
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div className="flex flex-col w-full max-w-lg bg-white rounded-lg shadow-lg">
//           <div className="flex-1 p-4 overflow-y-auto" id="chat-container">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`my-2 p-2 rounded-lg max-w-xs ${
//                   msg.username === username ? 'ml-auto bg-blue-500 text-white' : 'mr-auto bg-gray-200'
//                 }`}
//               >
//                 <span className="block text-sm font-semibold">{msg.username}</span>
//                 <span className="block">{msg.message}</span>
//                 <span className="block mt-1 text-xs text-right text-gray-500">{msg.timestamp}</span>
//               </div>
//             ))}
//           </div>
//           <div className="p-4 border-t">
//             <form id="messages-form" className="flex" onSubmit={handleMessageSubmit}>
//               <input
//                 type="text"
//                 className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Type a message"
//                 value={currentMessage}
//                 onChange={(e) => setCurrentMessage(e.target.value)}
//                 required
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-r-md"
//               >
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Connect to the Socket.IO server
const socket = io.connect('http://localhost:5000');

function App() {
  const [username, setUsername] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showUsernameInput, setShowUsernameInput] = useState(true);

  useEffect(() => {
    const handleMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    socket.on('chat message', handleMessage);
    return () => {
      socket.off('chat message', handleMessage);
    };
  }, []);

  const handleSubmitUsername = (e) => {
    e.preventDefault();
    if (username) {
      setShowUsernameInput(false);
    }
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (currentMessage) {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      socket.emit('chat message', { username, message: currentMessage, timestamp });
      setCurrentMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gradient-to-b from-purple-300 to-[#d9b3ff] text-white">
      {showUsernameInput ? (
        <div className="w-full max-w-lg p-10 mt-32 bg-purple-400 rounded-lg shadow-lg">
          <h3 className="mb-4 text-3xl font-semibold text-center">Enter Your Username</h3>
          <form onSubmit={handleSubmitUsername} className="flex flex-col gap-6">
            <input
              type="text"
              className="p-4 text-lg bg-purple-300 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <button
              type="submit"
              className="py-3 text-lg text-white transition duration-200 bg-purple-500 rounded-md hover:bg-purple-400"
            >
              Join Chat
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col w-[calc(100%-300px)] h-[calc(100vh-140px)] bg-purple-500 rounded-lg shadow-lg mt-16 ml-12">
          <div className="flex-1 p-4 overflow-y-auto" id="chat-container">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-3 rounded-lg max-w-xs ${
                  msg.username === username ? 'ml-auto bg-purple-600 text-white' : 'mr-auto bg-purple-300 text-white'
                }`}
              >
                <span className="block text-sm font-semibold">{msg.username}</span>
                <span className="block">{msg.message}</span>
                <span className="block mt-1 text-xs text-right">{msg.timestamp}</span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-purple-500">
            <form id="messages-form" className="flex" onSubmit={handleMessageSubmit}>
              <input
                type="text"
                className="flex-grow p-2 text-white bg-purple-300 border border-purple-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Type a message"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 text-white transition duration-200 bg-purple-500 hover:bg-purple-400 rounded-r-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
