import React from "react";
import Main from "./Main";
import "./ContentCard.css";
import vector from "./image/Vector 769.svg";

const ContentCard = () => {
  return (
    <div>
      <div className="header row">
        <div className="col-md-6">
          <h5 className="find">Find By Name or Phone Number</h5>
        </div>
        <div className="col-md-6 d-flex">
          <p className="pe-5">
            <span>Gender&nbsp;&nbsp;&nbsp;</span>
            <span className="font-monospace">
              Female &nbsp; <img src={vector} alt="" />
            </span>
          </p>
          <p>
            <span>Member Status&nbsp;&nbsp;&nbsp;</span>
            <span className="font-monospace">
              Active Member &nbsp;
              <img src={vector} alt="" />
            </span>
          </p>
        </div>
      </div>
      <hr />
      <Main />
      <Main />
      <Main />
      <Main />
      <Main />
      <Main />
    </div>
  );
};

export default ContentCard;
