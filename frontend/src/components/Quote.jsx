import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleRefresh = () => {
    fetchQuote();
  };

  return (
    <div>
      <p className='flex items-center justify-center text-center'>{quote}</p>
      <button className='inline-flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 mt-4' onClick={handleRefresh}>Generate</button>

    </div>
  );
};

export default Quote;
