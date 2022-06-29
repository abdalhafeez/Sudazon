import React from 'react'

function Rating({ col }) {
  return (
    <div className={`levels col-${col}`}>
      <i className="bi bi-star" style={{ fontSize: 20, color: "coral" }}>
        {" "}
      </i>
      <i
        className="bi bi-star-half"
        style={{ fontSize: 20, color: "coral" }}
      ></i>
      <i
        className="bi bi-star-fill"
        style={{ fontSize: 20, color: "coral" }}
      ></i>
      <i
        className="bi bi-star-fill"
        style={{ fontSize: 20, color: "coral" }}
      ></i>
      <i
        className="bi bi-star-fill"
        style={{ fontSize: 20, color: "coral" }}
      ></i>
    </div>
  );
}

export default Rating