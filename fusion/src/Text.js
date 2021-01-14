import "./index.css";
import React from "react";
const Text = () => {
  return (
    <div className="banner">
      <div
        className="mission-statement-display"
        style={{ marginBottom: "100px" }}
      >
        <p>WHERE ALBERTA'S TECH INDUSTRY</p>
        <p>CONVERGES TO RELEASE BOUNDLESS ENERGY</p>
      </div>
      <div className="platform-statement-display">
        <p>Fusion is a networking platform that provides a centralized</p>
        <p>database of events and lectures hosted by technology based</p>
        <p>organizations from Alberta</p>
      </div>
    </div>
  );
};
export default Text;
