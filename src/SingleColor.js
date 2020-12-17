import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hexColor, originalColor }) => {
  const bgc = rgb.join(",");
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hexColor.toLowerCase()}`;
  const oColor = originalColor.toLowerCase();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return (
    <article
      className={`color ${index > 20 && "color-light"} ${
        hexValue === oColor && "selected-color"
      }`}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && (
        <p
          className='alert'
          style={{ color: oColor, border: `dashed 2px ${oColor}` }}
        >
          copied to clipboard
        </p>
      )}
    </article>
  );
};

export default SingleColor;
