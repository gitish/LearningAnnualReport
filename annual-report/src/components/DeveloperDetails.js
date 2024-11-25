import React from 'react';

// Sample developer data
const developers = [
  {
    id: 1,
    name: "Arjun Guglani",
    image: "./img/Arjun.png", // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Shailendra Shail",
    image: "./img/Shail.png",
  },
  {
    id: 3,
    name: "Jasbeer Phooli",
    image: "./img/Jasbeer.png",
  },
  {
    id: 4,
    name: "Neha Seth",
    image: "./img/Neha.png", // Replace with actual image URLs
  },
  {
    id: 5,
    name: "Bhanu Dilawari",
    image: "./img/Bhanu.png",
  },
  {
    id: 6,
    name: "Pramod Kamath",
    image: "./img/Pramod.png",
  },
  {
    id: 7,
    name: "Abhishek Kapoor",
    image: "./img/Abhishek.png",
  },
];

const DeveloperDetails = () => {
  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">Meet Our Team members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {developers.map((developer) => (
          <div
            key={developer.id}
            className="text-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={developer.image}
              alt={developer.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{developer.name}</h3>
            <p className="text-gray-600">{developer.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeveloperDetails;
