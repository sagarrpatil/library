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
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const App = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, "Hello", /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: "Click Me!",
    onClick: () => alert('Button Clicked!')
  }));
};
_reactDom.default.render(/*#__PURE__*/_react.default.createElement(App, null), document.getElementById('root'));