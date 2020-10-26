import React from 'react';


const HappyMessage = () => {
    let message = ["Never let anyone treat you like a yellow starburst. YOU ARE a pink starburst!", 
    "If you think you're too small to make a difference, try sleeping with a mosquito", 
    "Purpose fuels passion", 
    "Chocolate comes from Cocoa, which is a tree... that makes it a plant. Chocolate is salad.", 
    "Why be moody when you can shake your booty"];
    
    var randomMsg = message[Math.floor(Math.random() *
      message.length)];
      return randomMsg
  };




  export default HappyMessage