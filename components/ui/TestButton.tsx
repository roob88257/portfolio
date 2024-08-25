import React from "react";

const TestButton = () => {
  const handleClick = () => {
    console.log('Button clicked!');
    window.location.href = 'mailto:rajaditya12527@gmail.com';
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
};

export default TestButton;
