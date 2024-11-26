import React from "react";
import "./sessions.css";
import learningHours from "../../assets/learning-image.png";
import learningSession from "../../assets/learning-session.png";
import SessionCard from "./SessionCard";

// images
import peopleInlighten from "../../assets/people-Inlighten.png";
import traineesImage from "../../assets/trainees.png";
import certificateImage from "../../assets/certifications.png";
import keyAreasImage from "../../assets/key-areas.png";
import benefitsImage from "../../assets/calculated-benefits.png";

function Sessions() {
  const sessionsData = [
    {
      numbers: "5000+",
      value: "Learning Hours",
      image: {
        src: learningHours,
        alt: "Learning Image",
      },
      animateDelay: 300
    },
    {
      numbers: "100+",
      value: "Learning Sessions",
      image: {
        src: learningSession,
        alt: "Learning Sessions",
      },
      animateDelay: 350
    },
    {
      numbers: "50+",
      value: "People Inlighten",
      image: {
        src: peopleInlighten,
        alt: "People Inlighten",
      },
      animateDelay: 400
    },
    {
      numbers: "30+",
      value: "New Trainers",
      image: {
        src: traineesImage,
        alt: "New Trainers",
      },
      animateDelay: 450
    },
    {
      numbers: "20+",
      value: "New Certifications",
      image: {
        src: certificateImage,
        alt: "New Certifications",
      },
      animateDelay: 500
    },
    {
      numbers: "6",
      value: "Key Areas",
      image: {
        src: keyAreasImage,
        alt: "Key Areas",
      },
      animateDelay: 550
    },
    {
      numbers: "£1 Millions",
      value: "Calulated Benefits",
      image: {
        src: benefitsImage,
        alt: "Calulated Benefits",
      },
      animateDelay: 600
    },
  ];
  return (
    <>
      <section id="sessions">
        <div className="ag-format-container">
          <h1 className="text-4xl text-center font-bold text-stone-50 mb-4">
            Scale, Growth and Profits
          </h1>
          <div className="ag-courses_box">
            {sessionsData.map((val, key) => (
              <SessionCard val={val} key={key} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Sessions;
