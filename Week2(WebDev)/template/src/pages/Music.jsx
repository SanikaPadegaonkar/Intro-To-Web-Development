import React from 'react';
import { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
  
const Music = () => {
  return (
    <div
      style={{
        display: 'contents',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >
      <h3>This is the Music Inventory.</h3>
      <div>Available items</div>
      <li>Guitars</li>
      <li>Drums</li>
    </div>
  );
};
  
export default Music;