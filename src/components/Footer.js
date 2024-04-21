import React from 'react';
import pdf from "../assets/BusinessPlan.pdf"

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-sm p-4 text-center">
      <a href={pdf} target="_blank" className="underline">Business Plan</a>
      <p>References in Business Plan</p>
      <p>Image References: <a href="https://www.pexels.com/" className="underline">Pexels</a></p>
    </footer>
  );
}

export default Footer;
