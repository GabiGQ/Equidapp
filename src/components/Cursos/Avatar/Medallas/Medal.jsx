// Medal.jsx
import React from 'react';

const Medal = ({ unlocked, imageUnlocked, imageLocked }) => {
  const imageUrl = unlocked ? imageUnlocked : imageLocked;
  const style = unlocked ? {} : { filter: 'grayscale(100%)', opacity: '0.5' };
  return <img src={imageUrl} alt="Medalla" style={style} />;
};

export default Medal;
