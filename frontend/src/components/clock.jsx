import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="text-7xl font-bold text-center mt-8">
     {time}
    </div>
  );
};

export default Clock;
