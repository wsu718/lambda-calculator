import React from "react";

export const NumberButton = (props) => {
  return (
    <>
      <button className='numbers' onClick={() => props.setValue(props.button)}>
        {props.button}
      </button>
    </>
  );
};
