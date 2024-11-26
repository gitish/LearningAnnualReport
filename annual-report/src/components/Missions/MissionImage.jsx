import React from "react";
import "./mission.css";
import missionBackgroundImage from "../../assets/mission-background.jpg";

function MissionImage({ missionData }) {
  return (
    <div className="container">
      <div className="circle-container">
        <img
          src={missionBackgroundImage}
          alt="MainImage"
          className="circle-image"
        />
      </div>
      <div className="floating-cards">
        {missionData.map((data, index) => (
          <div className={`card card${index + 1}`}>{data.title}</div>
        ))}
      </div>
    </div>
  );
}

export default MissionImage;
