import React from 'react';
import image1 from '../assets/sadchild1.jpg';
import image2 from '../assets/sadchild2.jpg';

const sections = [
  {
    id: 1,
    text: "According to the American Bar Association, the United States is underfunding schools by $150 billion dollars per year. The problem is even worse in low-income areas. Schools need funding to provide teaching resources such as textbooks, workbooks, computers, interactive whiteboards, art supplies, musical instruments, and sport equipment. For example, since schools would have a different number of students each year, this requires a different number of resources each year.",
    img: image1,
    reverse: false
  },
  {
    id: 2,
    text: "Due to this change in the number of resources, schools might have more resources than they needed and it would be more beneficial societally if they could lend the spare resources to other schools. However, currently it is very difficult to have such a flow of resources because of the barrier of communication between different schools. The lack of resource flow is increasing the gap in educational quality between schools in poorer and richer areas, resulting in inequitable access to higher education for the American students.",
    img: image2,
    reverse: true
  },
  // Add more sections as needed
];

const ProblemStatement = () => {
  return (
    <div className="mx-4 mt-12 mb-24 p-4 border rounded-lg shadow-lg bg-gray-200">
      <h2 className="font-bold text-xl">Problem Statement</h2>
      <p className='text-center text-lg'>	
        The lack of educational funding in the US is causing a nation-wide shortage of teaching resources, lowering the quality of education for middle and high schoolers. 
      </p>
      <hr className='bg-black h-0.5 my-3'/>
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

export default ProblemStatement;
