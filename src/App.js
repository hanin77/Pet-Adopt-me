import React, { useState } from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import ThemeContext from "./component/ThemeContext";

// top of App function body

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <AppRouter />
    </ThemeContext.Provider>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
