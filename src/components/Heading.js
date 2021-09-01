import React from "react";

function Heading(props) {
  return (
    <div>
      <h1
        style={{
          fontSize: "1.2rem",
          color: "#002659",
          textShadow: "1px 1px 3px black",
        }}
      >
        {" "}
        {props.title}{" "}
      </h1>
      <p
        style={{
          fontSize: "0.5rem",
          color: "#002659",
          textShadow: "1px 1px 3px black",
        }}
      >
        {" "}
        {props.para}{" "}
      </p>
    </div>
  );
}

export default Heading;
