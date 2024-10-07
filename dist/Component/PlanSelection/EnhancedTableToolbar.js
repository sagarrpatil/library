"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _InfoRounded = _interopRequireDefault(require("@mui/icons-material/InfoRounded"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// EnhancedTableToolbar.js

const EnhancedTableToolbar = _ref => {
  let {
    title,
    planSelected,
    costSelected,
    enrollFeeSelected,
    selectedFamily,
    reEnrollBySC
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.Toolbar, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h6",
    component: "div",
    sx: {
      flex: "1 1 100%"
    }
  }, title), planSelected && !reEnrollBySC && /*#__PURE__*/_react.default.createElement(_material.Tooltip, {
    title: "More info",
    arrow: true
  }, /*#__PURE__*/_react.default.createElement(_material.IconButton, null, /*#__PURE__*/_react.default.createElement(_InfoRounded.default, null))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body1"
  }, planSelected?.planId, " - Cost:", " ", costSelected?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  }), ", Enrollment Fee:", " ", enrollFeeSelected?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  }))));
};
var _default = exports.default = EnhancedTableToolbar;