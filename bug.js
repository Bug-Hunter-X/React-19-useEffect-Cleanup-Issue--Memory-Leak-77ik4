import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render.  It sets up an interval that updates count every second.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function: This is crucial to prevent memory leaks. It clears the interval when the component unmounts.
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;