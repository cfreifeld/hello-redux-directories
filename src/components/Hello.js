import React from 'react';
const Hello = ({message, onClick, reset}) => {
  return (
      <div>
        <h1>{message}</h1>
        <button onClick={onClick}>Click</button>
        <button onClick={reset}>Reset</button>
      </div>
  )}
export default Hello
