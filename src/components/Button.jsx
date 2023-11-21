// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ children, ...props }) => {
  return (
    <>
      <button
        className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
