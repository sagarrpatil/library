"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _Button.default;
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return _Header.default;
  }
});
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _Header = _interopRequireDefault(require("./Component/Header"));
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import BasicButtonGroup from "./Button"

const App = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, {
    onClick: () => {},
    rightButtonText: "text",
    buttonBg: "white",
    buttonTextColor: "white",
    background: "white",
    logoWidth: 180,
    logoImage: "https://dev.enroll.innovativepartnerslp.com/static/media/logo-innovation.d37870b8.png"
  }));
};
_reactDom.default.render(/*#__PURE__*/_react.default.createElement(App, null), document.getElementById("root"));