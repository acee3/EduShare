import React from 'react';

const Banner = () => {
  return (
    <div className="h-screen flex items-center justify-center text-white text-9xl font-bold"
         style={{
           background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
           backgroundSize: "400% 400%",
           animation: "gradientBG 15s ease infinite"
         }}>
      <div>
        EduShare
        <p className="text-center text-xl font-thin mt-2">Expanding Horizons Through Shared Knowledge</p>
      </div>
    </div>
  );
}

export default Banner;
