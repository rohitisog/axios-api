import React, { useEffect, useState } from "react";

const QuoteFetcher = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://zenquotes.io/api/today")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setQuote(data[0].q);
          setAuthor(data[0].a);
        }
      })
      .catch((error) => console.error("Error fetching quote:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-5">
      <div className="text-xl text-center font-semibold">"{quote}"</div>
      <div className="mt-2 text-lg text-gray-400">- {author}</div>
    </div>
  );
};

export default QuoteFetcher;
