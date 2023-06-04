import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { COLORS } from '../constants';

const TypographyWithUnderline = () => {
  const [activeText, setActiveText] = useState('Text 1');

  const handleTextClick = (text) => {
    setActiveText(text);
  };

  return (
    <div style={{ display: "flex" }}>
      <Typography
        onClick={() => handleTextClick('Text 1')}
        style={{
          textDecoration: activeText === 'Text 1' ? 'underline' : 'none',
          cursor: 'pointer',
          color: activeText === 'Text 1' ? COLORS.White : COLORS.textColor,
          padding: 5,
          fontSize: 15
        }}
      >
        Outline
      </Typography>
      <Typography
        onClick={() => handleTextClick('Text 2')}
        style={{
          textDecoration: activeText === 'Text 2' ? 'underline' : 'none',
          cursor: 'pointer',
          color: activeText === 'Text 2' ? COLORS.White : COLORS.textColor,
          padding: 5,
          fontSize: 15
        }}
      >
        Documentation
      </Typography>
    </div>
  );
};

export default TypographyWithUnderline;
