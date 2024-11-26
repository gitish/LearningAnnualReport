import React from "react";
import MissionImage from "./Missions/MissionImage";

const panelsData = [
  {
    id: 1,
    title: "Polyglot",
    description:
      "Build full-lifecycle and polyglot skills amongst our engineering community",
  },
  {
    id: 2,
    title: "Platform 2.0",
    description:
      "LBG engineers are skilled to excel in the Platform 2.0 environment",
  },
  {
    id: 3,
    title: "GenAI",
    description: "GenAI skills development across capabilities",
  },
  {
    id: 4,
    title: "Awareness",
    description: "Raise awareness about learning",
  },
  {
    id: 5,
    title: "OKR",
    description: "Contribute to meeting the account OKR of 75% certification",
  },
  {
    id: 6,
    title: "Building SPEED skills across capabilities",
    description:
      "PMs understand key tech topics, engineers build Product and APM skills, etc ",
  },
];

const HeroSection = () => {
  return (
    <div>
      <section className="bg-gray-50 text-center bg-red-400 py-60">
        <div class="flex flex-row">
          <div class="basis-1/2">
            <div class="gap-6 p-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Learning@LBG Annual Report 2024
              </h1>
              <p className="text-lg text-gray-600">
                Discover our achievements and growth in 2024, with insights into
                our operations and impact.
              </p>
              <section className="section">
                {panelsData.map((objective) => (
                  <>
                    <h2
                      className="text-xl font-semibold"
                      data-aos-delay="300"
                      data-aos="fade-right"
                      data-aos-easing="ease-in-sine"
                    >
                      {objective.title}
                    </h2>
                    <p
                      data-aos-delay="350"
                      data-aos="fade-right"
                      data-aos-easing="ease-in-sine"
                    >
                      {objective.description}
                    </p>
                  </>
                ))}
              </section>
            </div>
          </div>
          <div class="basis-1/2">
            {<MissionImage missionData={panelsData} />}
          </div>
        </div>

        <h3 className="text-4xl text-gray-50 mb-4">Our Missions</h3>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {panelsData.map((objective) => (
            <div
              className="text-center bg-white p-4 rounded-lg card"
              key={objective.idx}
            >
              <h3 className="text-xl font-semibold">{objective.title}</h3>
              <p>{objective.description}</p>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default HeroSection;
