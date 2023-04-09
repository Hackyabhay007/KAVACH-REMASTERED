import React from 'react';

function Profile({ data ,size}) {
  const url = data;
  return (
    <img   style={{width:"150px",display:"inline-block", transform: "scaleX(3)",transform:"scaleY(1)"}} src={url} alt="QR Code" />
  );
}

export default Profile;
