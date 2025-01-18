import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-wrap items-center justify-between bg-[#f5f5eb] p-4 ">
      {/* Left: Tree Icon (Placeholder) */}
      <div className="w-12 h-12 bg-[url('/tree.png')] bg-cover"></div>

      {/* Center: Search Bar */}
      <div className="flex items-center border rounded-full bg-white px-4 py-2 shadow-sm w-full md:w-1/2 mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Zoeken..."
          className="flex-grow outline-none bg-transparent text-sm"
        />
        <button className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Right: Language & Login */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0">
        <div className="text-sm text-green-700 cursor-pointer">
          Netherlands ▼
        </div>
        <button className="flex items-center space-x-2 text-sm text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 11c1.645 0 3-1.35 3-3s-1.355-3-3-3-3 1.35-3 3 1.355 3 3 3zM5 21h14c0-4.418-3.582-8-8-8s-8 3.582-8 8z"
            />
          </svg>
          <span>Inloggen</span>
        </button>
      </div>
    </div>
  );
}
