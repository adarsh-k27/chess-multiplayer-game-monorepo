import React from 'react';

const   WaitingOpponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="loader mb-4">
          <svg
            className="animate-spin h-10 w-10 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.292l1.485 1.485C9.194 18.232 10.555 18 12 18v-4a4 4 0 01-4-4H6c0 1.445.232 2.806.707 4.115L6 17.292z"
            ></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 animate-bounce">
          Waiting for Opponent...
        </h1>
      </div>
    </div>
  );
};

export default WaitingOpponent;
