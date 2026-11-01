"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <h2 className="text-4xl mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="btn bg-red-500 hover:bg-red-700 text-gray-50 rounded-lg"
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorPage;
