"use client";

import { FormEvent, useState } from "react";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const handleMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!message) return;

    const messageToSend = message;

    setMessage("");

    console.log(messageToSend);
  };

  return (
    <form
      onSubmit={handleMessage}
      className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100"
    >
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event?.target.value)}
        placeholder="Enter a message"
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!message}
        className="text-white bg-blue-500 hover:bg-blue-700 font-bold px-4 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
