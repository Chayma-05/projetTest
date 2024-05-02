import React from 'react';

const Form = ({ onSubmit, children }) => {
  return (
    <div className="wrapper">
     <div className="form-box register">
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </div>
    </div>
  );
};

export default Form;