import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import store from "./store";
// top of App function body

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
