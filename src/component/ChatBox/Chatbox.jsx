import { useState } from "react";
import Message from "../Message/Message";
import "./Chatbox.css";
import CloseIcon from "@mui/icons-material/Close";

const Chatbox = ({ messages, handleSend, sender, handleClose }) => {
  const [message, setMessage] = useState("");

  //function to handle send click
  const handleMsgSend = () => {
    //if msg empty then show alert
    if (message === "") {
      alert("Please enter message!");
      return;
    }

    handleSend(message, sender);
    setMessage("");
  };
  return (
    <div className="chatBox">
      <div className="chatWindow">
        <div className="nav">
          <span>ChatBox</span>
          <CloseIcon className="closeBtn" onClick={() => handleClose(sender)} />
        </div>
        <Message msg={messages} sender={sender} />
        <div className="inputSection">
          <input
            type="text"
            name=""
            id="input"
            placeholder="Type message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="sendBtn" onClick={handleMsgSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
