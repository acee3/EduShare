import React from 'react';
// import solutionImage from '../assets/solution.png';
import image1 from '../assets/solution1.jpg';
import image2 from '../assets/solution2.jpg';
import image3 from '../assets/solution3.jpg';

const sections = [
  {
    id: 1,
    text: "We are going to make an online sharing platform that connects the resources between different middle and high schools. The platform will list information about the resources available in each school and allow a flow of resources between different schools to share their resources.",
    img: image1,
    reverse: false
  },
  {
    id: 2,
    text: "Teachers and school officials will be able to communicate on this platform by explaining what their school requires and what the school is able to provide. The solution will use a complex algorithm that leverages AI to find the best way to share resources among schools. This solution is feasible because it wouldn't be too much work for schools to post the extra resources they have, and communication would be very easy and convenient with the online platform.",
    img: image2,
    reverse: true
  },
  {
    id: 3,
    text: "The cost of moving the resources would be negligible compared to the cost of buying the additional resources. Therefore, this solution saves money for middle and high schools by allowing them to share a common pool of resources. The educational platform will also provide transportation for these resources between schools to decrease the workload for the schools.",
    img: image3,
    reverse: false
  },
  // Add more sections as needed
];

const Solution = () => {
  return (
    <div className="m-4 p-4 border rounded-lg shadow-lg solution-background text-white">
      <h2 className="font-bold text-xl">Our Solution</h2>
      {/* <img src={solutionImage} alt="Solution Wireframe" className="my-4"/> */}
      {sections.map((section) => (
        <div key={section.id} className={`flex flex-col md:flex-row items-center mb-8 ${section.reverse ? "md:flex-row-reverse" : ""}`}>
          <div className="md:w-1/2 p-4">
            <img src={section.img} alt="Problem illustration" className="w-full h-auto rounded-lg shadow-lg image-glass"/>
          </div>
          <div className="md:w-1/2 md:px-6">
            <p className="text-lg leading-relaxed">{section.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Solution;
