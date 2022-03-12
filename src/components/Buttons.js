import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      {...props}
      style={{
        marginRight: '4px',
        color: "blueviolet",
        fontSize: "14px",
        border: "1px",
        borderRadius: "50px",
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
