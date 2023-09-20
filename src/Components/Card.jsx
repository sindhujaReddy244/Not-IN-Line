import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="mid-card card">
         {/* <img src={props.src} className="card-img-top" alt="..." />  */}
         <div className="image-container">
    <img src={props.src} className="card-img-top" alt="..." />
  </div>
        <div className="card-body " >
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
