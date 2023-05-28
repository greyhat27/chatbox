import { useState } from "react";
import "./App.css";
import Chatbox from "./component/ChatBox/Chatbox";

function App() {
  const [chatBoxes, setChatBoxes] = useState([]);
  const [messages, setMessages] = useState([]);

  //adding chatboxes on click
  const handleClick = () => {
    setChatBoxes((prev) => [...prev, { id: Math.random() }]);
  };

  //function to handle send messages
  const handleSend = (message, sender) => {
    setMessages([...messages, { text: message, sender }]);
  };

  //function to close chatbox
  const handleClose = (index) => {
    setChatBoxes((prev) => prev.filter((i) => i.id !== index));
  };

  return (
    <div className="App">
      <button className="openChatBtn" onClick={handleClick}>
        Open Chatbox
      </button>
      <div className="chatBoxes">
        {chatBoxes.map((chatBox) => (
          <Chatbox
            key={chatBox.id}
            messages={messages}
            handleSend={handleSend}
            sender={chatBox.id}
            handleClose={handleClose}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
