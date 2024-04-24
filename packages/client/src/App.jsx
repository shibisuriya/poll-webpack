import React, { Fragment } from "react";

export default function App() {
  let name = "مرحبا بك";
  return (
    <Fragment>
      <div>
        {name} 1. This is my name
      </div>
      <div>
        <bdi>{name}</bdi> 1. This is my name
      </div>
      <div>
        <span style={{ unicodeBidi: "isolate" }}>{name}</span> 4
      </div>
    </Fragment>
  );
}
