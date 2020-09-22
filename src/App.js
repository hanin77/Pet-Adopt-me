import React from "react";
import ReactDOM from "react-dom";
import Pet from "./component/Pet";
import SearchParams from "./component/SearchParams";
const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
