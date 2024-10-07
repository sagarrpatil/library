import React from "react";
import ReactDOM from "react-dom";
// import BasicButtonGroup from "./Button"
import Header from "./Component/Header";
const App = () => {
  return (
    <div>
      <Header
        onClick={() => {}}
        rightButtonText={"text"}
        buttonBg={"white"}
        buttonTextColor={"white"}
        background={"white"}
        logoWidth={180}
        logoImage={
          "https://dev.enroll.innovativepartnerslp.com/static/media/logo-innovation.d37870b8.png"
        }
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export { default as Button } from "./Button";
export { default as Header } from "./Component/Header";
