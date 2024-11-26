import React from "react";

function SessionCard({ val, key }) {
  return (
    <div
      className="ag-courses_item"
      data-aos="flip-left"
      data-aos-delay={val.animateDelay}
    >
      <button className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          <img src={val.image.src} alt={val.image.alt} />
        </div>

        <div className="ag-courses-item_date-box">
          {val.numbers}
          <span className="ag-courses-item_date"> {val.value}</span>
        </div>
      </button>
    </div>
  );
}

export default SessionCard;
