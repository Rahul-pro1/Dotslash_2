import React, { useState } from "react";
import responses from "./responses.json";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() === "") return; // Don't process empty input

    // Add user message to messages state
    const newUserMessage = { text: inputText, isUser: true };
    setMessages([...messages, newUserMessage]);
    setInputText(""); // Clear input field

    // Generate bot response after a short delay (simulating server response)
    setTimeout(() => {
      const randomIndex = Math.floor(
        Math.random() * responses.responses.length
      );
      const botResponse = responses.responses[randomIndex];
      const newBotMessage = { text: botResponse, isUser: false };
      setMessages([...messages, newBotMessage]);
    }, 500);
  };

  return (
    <div className="max-w-lg mx-auto mt-60 px-4">
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4" style={{ height: "400px", overflowY: "auto" }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${
                message.isUser
                  ? "text-right text-blue-600 self-end"
                  : "text-left text-green-600 self-start"
              }`}
            >
              <div
                className={`p-2 rounded-lg inline-block ${
                  message.isUser
                    ? "bg-blue-200 rounded-br-none"
                    : "bg-green-200 rounded-bl-none"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="bg-gray-200 p-2">
          <div className="flex items-center justify-between">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Type your message here..."
              className="flex-grow border rounded p-2 focus:outline-none"
            />
            <button
              type="submit"
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
          {inputText.trim() !== "" && (
            <div className="mt-2 text-right text-gray-500">
              {inputText}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Chat;
