import React from "react";
import "./style.css";
// import { PromiseProvider } from 'mongoose';

// THE ...PROPS MEAN SPREAD ALL OF THE KEYS ONTO THIS ELEMENT
// THAT WAY WE DONT HAVE TO DEFINE THEM ALL INDIVIDUALLY

function ViewBtn(props) {
  return (
    <a href={props.link} alt={props.title} {...props}>
      <button className="btn btn-primary view-btn">View</button>
    </a>
  );
}
export default ViewBtn;
