import React from 'react';
import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg';
import member4 from '../assets/member4.jpg';

const teamMembers = [
  { name: "Alex Cheung", role: "Co-founder and Lead Developer", img: member1 },
  { name: "Yuxiang Huang", role: "Co-founder and Lead Developer", img: member2 },
  { name: "Sean Jiang", role: "Co-founder and Business Analyst", img: member3 },
  { name: "Haoyu Yang", role: "Co-founder and Lead Prompt Engineer", img: member4 }
];

const Team = () => {
  return (
    <div className="m-4 p-4">
      <h2 className="text-center text-2xl font-bold my-4">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={member.img} alt={`${member.name}`} className="w-full h-48 object-cover"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{member.name}</div>
              <p className="text-gray-700 text-base">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
