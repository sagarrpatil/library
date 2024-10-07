"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _styles = require("@mui/material/styles");
var _EnhancedTableToolbar = _interopRequireDefault(require("./EnhancedTableToolbar"));
var _CommonDropDwn = _interopRequireDefault(require("./CommonDropDwn"));
var _CommonDropFamily = _interopRequireDefault(require("./CommonDropFamily"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ProceedButton = _ref => {
  let {
    disabled,
    onClick,
    children,
    buttonStyles
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    disabled: disabled,
    onClick: onClick,
    sx: buttonStyles
  }, children);
};
const StyledTableRow = (0, _styles.styled)(_material.TableRow)(_ref2 => {
  let {
    theme,
    rowStyles,
    selectedStyles
  } = _ref2;
  return {
    ...rowStyles,
    "&.Mui-selected": selectedStyles
  };
});
const PlanSelection = _ref3 => {
  let {
    activeStep,
    reEnrollBySC,
    onClick,
    fetchCompletionStatus,
    planData,
    fetchMemberPlan,
    saveMemberPlan,
    containerStyles,
    rowStyles,
    selectedRowStyles,
    buttonStyles,
    tableCellStyles,
    costStyles,
    viewDetailsStyles
  } = _ref3;
  const [loaderShow, setLoaderShow] = (0, _react.useState)(false);
  const [selected, setSelected] = (0, _react.useState)(0);
  const [data, setData] = (0, _react.useState)(planData);
  const [listOfCost, setListOfCost] = (0, _react.useState)([]);
  const [listOfEnrollCost, setListOfEnrollCost] = (0, _react.useState)([]);
  const [familyList, setFamilyList] = (0, _react.useState)([]);
  const [selectedFamily, setSelectedFamily] = (0, _react.useState)(null);
  const clientId = sessionStorage.getItem("CLIENT_ID");
  const subId = JSON.parse(localStorage.getItem("CurrentLoginUser"))?.id;
  (0, _react.useEffect)(() => {
    const fetchData = async () => {
      setLoaderShow(true);
      try {
        await fetchCompletionStatus(subId, activeStep);
        const plans = planData;
        setData(planData);
        setSelectedFamily(plans[0].categoryAmountList[0].category);
        setListOfCost(plans.map(plan => plan.categoryAmountList[0].amount));
        setListOfEnrollCost(plans.map(plan => plan.enrollmentFeesList[0].amount));
        setFamilyList(plans.map(plan => plan.categoryAmountList[0].category));
        const memberPlan = await fetchMemberPlan(subId);
        if (memberPlan) {
          const index = plans.findIndex(x => x.planId === memberPlan.planCode);
          const flagRemoveDependent = plans[index].categoryAmountList.some(x => x.category === memberPlan.category);
          const updatedFamily = [...familyList];
          const updatedCosts = [...listOfCost];
          const updatedEnrollCosts = [...listOfEnrollCost];
          updatedFamily[index] = flagRemoveDependent ? memberPlan.category : plans[index].categoryAmountList[0].category;
          updatedCosts[index] = flagRemoveDependent ? memberPlan.amount : plans[index].categoryAmountList[0].amount;
          if (memberPlan.enrollmentFeesList.some(v => v.amount === memberPlan.appFee)) {
            updatedEnrollCosts[index] = memberPlan.appFee;
          }
          setListOfCost(updatedCosts);
          setFamilyList(updatedFamily);
          setListOfEnrollCost(updatedEnrollCosts);
          setSelectedFamily(updatedFamily[index]);
          setSelected(index);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoaderShow(false);
      }
    };
    fetchData();
  }, [subId, clientId, activeStep, fetchCompletionStatus, planData, fetchMemberPlan]);
  const handleClick = index => {
    if (!reEnrollBySC) {
      setSelected(index);
    }
  };
  const submitPlanRequest = async e => {
    if (e.detail === 1) {
      const obj = {
        subId,
        planCode: data[selected].planId,
        amount: listOfCost[selected],
        appFee: listOfEnrollCost[selected],
        category: familyList[selected],
        planType: "Core"
      };
      setLoaderShow(true);
      try {
        const response = await saveMemberPlan(obj);
        if (response.data.response) {
          onClick();
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoaderShow(false);
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: containerStyles
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      width: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Paper, {
    sx: {
      width: "100%",
      mb: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_EnhancedTableToolbar.default, {
    title: reEnrollBySC ? `Your current plan ${data[selected]?.planId} is selected for your reference and cannot be changed.` : "Review the plans available, compare premiums and click the ADD button.",
    planSelected: data[selected],
    costSelected: listOfCost[selected],
    enrollFeeSelected: listOfEnrollCost[selected],
    selectedFamily: selectedFamily,
    reEnrollBySC: reEnrollBySC
  }), /*#__PURE__*/_react.default.createElement(_material.TableContainer, {
    style: {
      height: "38vh"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Table, {
    sx: {
      minWidth: 750
    }
  }, /*#__PURE__*/_react.default.createElement(_material.TableBody, null, data && data.map((row, index) => {
    const isItemSelected = index === selected;
    return /*#__PURE__*/_react.default.createElement(StyledTableRow, {
      hover: true,
      className: reEnrollBySC ? "disableSCcss" : "",
      onClick: () => handleClick(index),
      role: "radio",
      "aria-checked": isItemSelected,
      key: row.planInfo,
      selected: isItemSelected,
      rowStyles: rowStyles,
      selectedStyles: selectedRowStyles
    }, /*#__PURE__*/_react.default.createElement(_material.TableCell, {
      padding: "checkbox",
      style: tableCellStyles
    }, /*#__PURE__*/_react.default.createElement(_material.Radio, {
      checked: isItemSelected,
      value: row.planInfo,
      sx: {
        color: "#162242"
      },
      name: "radio-buttons",
      inputProps: {
        "aria-label": "A"
      }
    })), /*#__PURE__*/_react.default.createElement(_material.TableCell, {
      padding: "none",
      style: tableCellStyles
    }, "Add ", /*#__PURE__*/_react.default.createElement("b", null, row.planId)), !reEnrollBySC && /*#__PURE__*/_react.default.createElement(_material.TableCell, {
      align: "left",
      style: tableCellStyles
    }, listOfEnrollCost[index] !== undefined && /*#__PURE__*/_react.default.createElement(_CommonDropDwn.default, {
      value: row.enrollmentFeesList,
      index: index,
      disabled: reEnrollBySC,
      selectedIndex: selected === index,
      selectedEnrollFee: listOfEnrollCost[index],
      selectCost: (value, ind) => {
        const list = [...listOfEnrollCost];
        list[ind] = value;
        setListOfEnrollCost(list);
      }
    })), /*#__PURE__*/_react.default.createElement(_material.TableCell, {
      align: "left",
      style: tableCellStyles
    }, familyList[index] && /*#__PURE__*/_react.default.createElement(_CommonDropFamily.default, {
      value: row.categoryAmountList,
      index: index,
      disabled: reEnrollBySC,
      selectedIndex: selected === index,
      selectedFamily: familyList[index],
      selectCost: (value, ind) => {
        const amount = row.categoryAmountList.find(x => x.category === value).amount;
        const updatedFamilyList = [...familyList];
        const updatedCostList = [...listOfCost];
        updatedFamilyList[ind] = value;
        updatedCostList[ind] = amount;
        setSelectedFamily(value);
        setListOfCost(updatedCostList);
        setFamilyList(updatedFamilyList);
      }
    })), /*#__PURE__*/_react.default.createElement(_material.TableCell, {
      align: "right",
      style: costStyles
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "cost-per-month"
    }, listOfCost[index]?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    }))), /*#__PURE__*/_react.default.createElement(_material.TableCell, {
      align: "right",
      style: tableCellStyles
    }, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
      onClick: () => window.open(row.link)
    }, /*#__PURE__*/_react.default.createElement("span", {
      style: viewDetailsStyles
    }, "VIEW DETAILS"))));
  }))))), /*#__PURE__*/_react.default.createElement(_material.Toolbar, null, /*#__PURE__*/_react.default.createElement(_material.Tooltip, {
    title: "Proceed",
    arrow: true
  }, /*#__PURE__*/_react.default.createElement(ProceedButton, {
    disabled: reEnrollBySC,
    onClick: submitPlanRequest,
    buttonStyles: buttonStyles
  }, "Proceed")))));
};
var _default = exports.default = PlanSelection;