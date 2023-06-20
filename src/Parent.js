import React, { useState } from 'react';
import ModelForm from './ModelForm';

const Parent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleEditClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={handleEditClick}>Edit</button>
      {showPopup && <ModelForm onClose={handleClosePopup} />}
    </div>
  );
};

export default Parent;
