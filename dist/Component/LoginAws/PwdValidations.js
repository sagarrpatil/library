"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const passwordCheck = {
  chechForNumbers: string => {
    var matches = string.match(/\d+/g);
    let value = matches != null ? true : false;
    return value;
  },
  checkForUpperCase: string => {
    var matches = string.match(/[A-Z]/);
    let value = matches != null ? true : false;
    return value;
  },
  checkForLowerCase: string => {
    var matches = string.match(/[a-z]/);
    let value = matches != null ? true : false;
    return value;
  },
  checkForSymbols: string => {
    var symbols = new RegExp(/[^A-Za-z0-9]/);
    let value = symbols.test(string) ? true : false;
    return value;
  },
  checkPwdLength: string => {
    let value = string.length > 7 ? true : false;
    return value;
  }
};
const PasswordValidations = props => {
  const [isPwdLowercase, setPwdLowercase] = (0, _react.useState)(false);
  const [pwdHasSymbol, setPwdHasSymbol] = (0, _react.useState)(false);
  const [pwdHasNumbers, setPwdHasNumbers] = (0, _react.useState)(false);
  const [isPwdUppercase, setPwdUppercase] = (0, _react.useState)(false);
  const [pwdLengthReq, setPwdLengthReq] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    console.log(props.password);
    let isLowercase = passwordCheck.checkForLowerCase(props.password);
    let hasSymbol = passwordCheck.checkForSymbols(props.password);
    let hasNmbr = passwordCheck.chechForNumbers(props.password);
    let isUpercase = passwordCheck.checkForUpperCase(props.password);
    let pwdLngth = passwordCheck.checkPwdLength(props.password);
    let allPassed = isLowercase && hasSymbol && hasNmbr && isUpercase && pwdLngth;
    setPwdLowercase(isLowercase);
    setPwdHasSymbol(hasSymbol);
    setPwdHasNumbers(hasNmbr);
    setPwdUppercase(isUpercase);
    setPwdLengthReq(pwdLngth);
    props.allPassed(allPassed);
  }, [props.password]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pwd-validations",
    hidden: props.password.length <= 0
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: isPwdLowercase ? "valid" : "invalid",
    style: {
      color: isPwdLowercase ? "green" : "red"
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, isPwdLowercase ? "✓" : "✖", " "), /*#__PURE__*/_react.default.createElement("span", {
    className: "pwd-validation-txt"
  }, "Password must contain a lower case letter")), /*#__PURE__*/_react.default.createElement("div", {
    className: isPwdUppercase ? "valid" : "invalid",
    style: {
      color: isPwdUppercase ? "green" : "red"
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, isPwdUppercase ? "✓" : "✖", " "), /*#__PURE__*/_react.default.createElement("span", {
    className: "pwd-validation-txt"
  }, "Password must contain an upper case letter")), /*#__PURE__*/_react.default.createElement("div", {
    className: pwdHasSymbol ? "valid" : "invalid",
    style: {
      color: pwdHasSymbol ? "green" : "red"
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, pwdHasSymbol ? "✓" : "✖", " "), /*#__PURE__*/_react.default.createElement("span", {
    className: "pwd-validation-txt"
  }, "Password must contain a special character")), /*#__PURE__*/_react.default.createElement("div", {
    className: pwdHasNumbers ? "valid" : "invalid",
    style: {
      color: pwdHasNumbers ? "green" : "red"
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, pwdHasNumbers ? "✓" : "✖", " "), /*#__PURE__*/_react.default.createElement("span", {
    className: "pwd-validation-txt"
  }, "Password must contain a number")), /*#__PURE__*/_react.default.createElement("div", {
    className: pwdLengthReq ? "valid" : "invalid",
    style: {
      color: pwdLengthReq ? "green" : "red"
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, pwdLengthReq ? "✓" : "✖", " "), /*#__PURE__*/_react.default.createElement("span", {
    className: "pwd-validation-txt"
  }, "Password must contain at least 8 characters")));
};
var _default = exports.default = PasswordValidations;