"use client";

import { FormEvent, useState } from "react";
import { v4 } from "uuid";
import { Message } from "../types/types";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const handleMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!message) return;

    const messageToSend = message;
    const id = v4();

    setMessage("");

    const data = {
      id,
      message,
      created_at: Date.now(),
      username: "Mauricio Cardoso",
      profilePic:
        "https://scontent.fbfh10-1.fna.fbcdn.net/v/t39.30808-6/321792431_543417104363881_3987439919762727301_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oJTFJ77rb9YAX9tFo-X&_nc_ht=scontent.fbfh10-1.fna&oh=00_AfCQJcXanc4N9B5pPmaVPXy-MAaeSIiNDapcKkPHVq4feA&oe=63D3753F",
      email: "mauriciocardoso@email.com",
    } as Message;
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
