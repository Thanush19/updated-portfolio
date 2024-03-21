import React from "react";
import ach from "../../img/achievement.png";

const Achivement = () => {
  return (
    <div
      className="bg-black"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: "bold", marginTop: "30px" }}>Achievement</h1>
        <div>
          <img
            src={ach}
            alt="Achievement"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Achivement;
