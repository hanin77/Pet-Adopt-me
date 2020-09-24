import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
