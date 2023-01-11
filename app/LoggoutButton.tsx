"use client";

const LoggoutButton = () => {
  return (
    <button
      onClick={() => alert("Logout")}
      className="text-white bg-blue-500 hover:bg-blue-700 font-bold px-4 py-2 rounded transition-colors"
    >
      Logout
    </button>
  );
};

export default LoggoutButton;
