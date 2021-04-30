import React from 'react';

function Button({ type = 'button', onClick = null, className = '', children }) {
  onClick = !onClick ? null : onClick;
  return <button {...{ onClick, type, className }}>{children}</button>;
}

export default Button;
