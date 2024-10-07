"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommonDropDwn;
var _react = require("react");
var _material = require("@mui/material");
function CommonDropDwn(_ref) {
  let {
    value,
    // List of values to display in the dropdown
    index,
    // The index for the dropdown
    selectedIndex,
    // Flag to check if this dropdown is selected
    selectedEnrollFee,
    // Selected fee for the dropdown
    disabled,
    // If the dropdown should be disabled
    selectCost // Callback to update the selected cost
  } = _ref;
  const [selectedValue, setSelectedValue] = (0, _react.useState)("");
  const [list] = (0, _react.useState)(value); // The dropdown values list

  const handleChange = event => {
    setSelectedValue(event.target.value);
    selectCost(event.target.value, index); // Call the parent callback to pass selected value and index
  };
  (0, _react.useEffect)(() => {
    if (list.length > 0) {
      setSelectedValue(list[0].amount); // Set initial value to the first item's amount
    }
  }, [list]);
  return /*#__PURE__*/React.createElement(_material.FormControl, {
    sx: {
      m: 1,
      width: 200
    },
    size: "small"
  }, /*#__PURE__*/React.createElement(_material.Select, {
    value: selectedIndex ? selectedEnrollFee : selectedValue // Use selectedEnrollFee if it's selected
    ,
    style: {
      backgroundColor: "#fff",
      padding: 5,
      color: "#787885",
      width: 200
    },
    disabled: disabled // Disable if props.disabled is true
    ,
    onChange: handleChange // Trigger the handleChange function on selection
  }, list.map((row, idx) => /*#__PURE__*/React.createElement(_material.MenuItem, {
    key: idx,
    value: row.amount
  }, "Enrollment Fee - $", row.amount))));
}