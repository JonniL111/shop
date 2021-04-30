import React from 'react';

function Form({ className='', onSubmit, children }) {
  return <form {...{ className, onSubmit }}>{children}</form>;
}

export default Form;
