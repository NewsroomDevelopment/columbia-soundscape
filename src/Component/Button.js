import React from 'react';

const ButtonAudio  = ({ 
    border="none",
    color="pink",
    height = "200px",
    radius = "50%",
    width = "200px",
    children = "I'm a pink circle!",
  }) => {
    return (
        <button 
        style={{
           backgroundColor: color,
           border,
           borderRadius: radius,
           height,
           width
        }}
        >
        {children}
        </button>
    );
};

export default ButtonAudio;
  