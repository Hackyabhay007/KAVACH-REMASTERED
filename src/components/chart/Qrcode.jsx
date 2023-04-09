import React from 'react';

function QRCode({ data, size }) {
  const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}&size=${size}x${size}`;
  return (
    <img src={url} alt="QR Code" />
  );
}

export default QRCode;
