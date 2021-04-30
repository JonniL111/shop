import React, { useState } from 'react';

function Input({
  name = 'name',
  className = '',
  type = 'text',
  placeholder = '',
  
}) {
  const [value, setValue] = useState('');
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <>      
      <input {...{ name, className, type, placeholder, value }} onChange={changeHandler} />
    </>
  );
}

export default Input;
