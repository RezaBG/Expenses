import React from "react";
import ReactDOM from "react-dom";

const page = (
  <div>
    <img src="./react-logo.png" width="40px" />
    <h1>FUnc fact about React</h1>
    <ul>
      <li>fact 1</li>
      <li>fact 2</li>
      <li>fact 3</li>
      <li>fact 4</li>
    </ul>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
