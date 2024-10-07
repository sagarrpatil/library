"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;
var React = _interopRequireWildcard(require("react"));
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Header(_ref) {
  let {
    background,
    logoImage,
    logoWidth,
    rightButtonText,
    onClick,
    buttonBg,
    buttonTextColor
  } = _ref;
  return /*#__PURE__*/React.createElement(_AppBar.default, {
    position: "fixed",
    sx: {
      background: background
    }
  }, /*#__PURE__*/React.createElement(_Toolbar.default, {
    sx: {
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h6",
    component: "div",
    sx: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      display: "contents"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoImage,
    width: logoWidth ? logoWidth : 180
  })), rightButtonText && /*#__PURE__*/React.createElement(_Button.default, {
    sx: {
      background: buttonBg,
      color: buttonTextColor
    },
    onClick: () => onClick()
  }, rightButtonText)));
}