import React from "react";
import ReactDOM from "react-dom";
import Pet from "./component/Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <Pet name="name1" animal="animal1" breed="breed1" />
      <Pet name="name2" animal="animal2" breed="breed2" />
      <Pet name="name1" animal="animal3" breed="breed3" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
