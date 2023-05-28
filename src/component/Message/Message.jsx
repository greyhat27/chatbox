import "./Message.css";

const Message = ({ msg, sender }) => {
  return (
    <div className="messages">
      {/* mapping messages */}
      {msg.map((message) => (
        <div
          className={`msg ${message.sender === sender ? "right" : "left"}`}
          key={Math.random()}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default Message;
