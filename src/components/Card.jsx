import React, { useState } from "react";

function Card(props) {
  const [isBooped, setIsBooped] = useState(false);

  function handleHover() {
    setIsBooped(true);
  }

  function handleExit() {
    setIsBooped(false);
  }
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
      <div
        onMouseEnter={handleHover}
        style={{
          display: "inline-block",
          backfaceVisibility: "hidden",
          transform: isBooped ? `scale(1.1)` : null,
          transition: `transform 150ms`
        }}
        onMouseLeave={handleExit}
        id="card"
        className="card flex-fill"
      >
        <img className="card-img-top" src={props.imgURL} alt="sp-clip" />
        <div className="card-body flex-fill">
          <h5 className="card-title">{props.by}</h5>
          <p className="card-text">{props.quote}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
