import React from 'react';
import './Toast.css';

function Toast(props) {
  const isSuccess = props.isSuccess;

  return (
    <div>
      {isSuccess ? 'si' : 'no'}
    </div>
  );
}

export default Toast;
