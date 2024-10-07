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
Object.defineProperty(exports, "PlanSelection", {
  enumerable: true,
  get: function () {
    return _PlanSelection.default;
  }
});
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _Header = _interopRequireDefault(require("./Component/Header"));
var _PlanSelection = _interopRequireDefault(require("./Component/PlanSelection"));
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// import BasicButtonGroup from "./Button"

const App = () => {
  const handleFetchCompletionStatus = async (subId, activeStep) => {
    // Your API call here
  };
  const dataInno = [{
    planId: "Elite MD 2",
    link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Elite-MD-Plan-Brochure.pdf",
    enrollmentFeesList: [{
      id: 24,
      amount: 125,
      activeFlag: true,
      index: 1
    }, {
      id: 23,
      amount: 100,
      activeFlag: true,
      index: 2
    }, {
      id: 22,
      amount: 75,
      activeFlag: true,
      index: 3
    }, {
      id: 21,
      amount: 50,
      activeFlag: true,
      index: 4
    }],
    categoryAmountList: [{
      category: "Primary",
      amount: 192.9
    }]
  }, {
    planId: "Elite MD 4",
    link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Elite-MD-Plan-Brochure.pdf",
    enrollmentFeesList: [{
      id: 24,
      amount: 125,
      activeFlag: true,
      index: 1
    }, {
      id: 23,
      amount: 100,
      activeFlag: true,
      index: 2
    }, {
      id: 22,
      amount: 75,
      activeFlag: true,
      index: 3
    }, {
      id: 21,
      amount: 50,
      activeFlag: true,
      index: 4
    }],
    categoryAmountList: [{
      category: "Primary",
      amount: 213.97
    }]
  }, {
    planId: "Elite MD 6",
    link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Elite-MD-Plan-Brochure.pdf",
    enrollmentFeesList: [{
      id: 24,
      amount: 125,
      activeFlag: true,
      index: 1
    }, {
      id: 23,
      amount: 100,
      activeFlag: true,
      index: 2
    }, {
      id: 22,
      amount: 75,
      activeFlag: true,
      index: 3
    }, {
      id: 21,
      amount: 50,
      activeFlag: true,
      index: 4
    }],
    categoryAmountList: [{
      category: "Primary",
      amount: 219.87
    }]
  }, {
    planId: "Optimum-MD 1",
    link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
    enrollmentFeesList: [{
      id: 24,
      amount: 125,
      activeFlag: true,
      index: 1
    }, {
      id: 23,
      amount: 100,
      activeFlag: true,
      index: 2
    }, {
      id: 22,
      amount: 75,
      activeFlag: true,
      index: 3
    }, {
      id: 21,
      amount: 50,
      activeFlag: true,
      index: 4
    }],
    categoryAmountList: [{
      category: "Primary",
      amount: 251.29
    }]
  }, {
    planId: "Optimum-MD 2",
    link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
    enrollmentFeesList: [{
      id: 24,
      amount: 125,
      activeFlag: true,
      index: 1
    }, {
      id: 23,
      amount: 100,
      activeFlag: true,
      index: 2
    }, {
      id: 22,
      amount: 75,
      activeFlag: true,
      index: 3
    }, {
      id: 21,
      amount: 50,
      activeFlag: true,
      index: 4
    }],
    categoryAmountList: [{
      category: "Primary",
      amount: 298.61
    }]
  }, {
    planId: "Optimum-MD 3",
    link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
    enrollmentFeesList: [{
      id: 24,
      amount: 125,
      activeFlag: true,
      index: 1
    }, {
      id: 23,
      amount: 100,
      activeFlag: true,
      index: 2
    }, {
      id: 22,
      amount: 75,
      activeFlag: true,
      index: 3
    }, {
      id: 21,
      amount: 50,
      activeFlag: true,
      index: 4
    }],
    categoryAmountList: [{
      category: "Primary",
      amount: 323.3
    }]
  }, {
    planId: "Optimum-MD 4",
    link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
    enrollmentFeesList: [{
      id: 24,
      amount: 125,
      activeFlag: true,
      index: 1
    }, {
      id: 23,
      amount: 100,
      activeFlag: true,
      index: 2
    }, {
      id: 22,
      amount: 75,
      activeFlag: true,
      index: 3
    }, {
      id: 21,
      amount: 50,
      activeFlag: true,
      index: 4
    }],
    categoryAmountList: [{
      category: "Primary",
      amount: 377.8
    }]
  }, {
    planId: "Optimum-MD 5",
    link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
    enrollmentFeesList: [{
      id: 24,
      amount: 125,
      activeFlag: true,
      index: 1
    }, {
      id: 23,
      amount: 100,
      activeFlag: true,
      index: 2
    }, {
      id: 22,
      amount: 75,
      activeFlag: true,
      index: 3
    }, {
      id: 21,
      amount: 50,
      activeFlag: true,
      index: 4
    }],
    categoryAmountList: [{
      category: "Primary",
      amount: 395.41
    }]
  }, {
    planId: "Optimum-MD 6",
    link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
    enrollmentFeesList: [{
      id: 24,
      amount: 125,
      activeFlag: true,
      index: 1
    }, {
      id: 23,
      amount: 100,
      activeFlag: true,
      index: 2
    }, {
      id: 22,
      amount: 75,
      activeFlag: true,
      index: 3
    }, {
      id: 21,
      amount: 50,
      activeFlag: true,
      index: 4
    }],
    categoryAmountList: [{
      category: "Primary",
      amount: 502.26
    }]
  }, {
    planId: "Optimum-MD 7",
    link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
    enrollmentFeesList: [{
      id: 24,
      amount: 125,
      activeFlag: true,
      index: 1
    }, {
      id: 23,
      amount: 100,
      activeFlag: true,
      index: 2
    }, {
      id: 22,
      amount: 75,
      activeFlag: true,
      index: 3
    }, {
      id: 21,
      amount: 50,
      activeFlag: true,
      index: 4
    }],
    categoryAmountList: [{
      category: "Primary",
      amount: 614.11
    }]
  }];
  const handleFetchPlanData = async (subId, clientId) => {
    // Your API call here
    return {
      response: dataInno
    }; // Return the data in the expected format
  };
  const handleFetchMemberPlan = async subId => {
    // Your API call here
    return null; // Return the member plan data
  };
  const handleSaveMemberPlan = async data => {
    // Your API call here
    return {
      data: {
        response: true
      }
    }; // Simulate a successful save response
  };
  const handleClick = () => {
    console.log("Plan selected");
  };
  const containerStyles = {
    margin: "-2%"
  };
  const rowStyles = {
    backgroundColor: "#F4F4F4"
  };
  const selectedRowStyles = {
    backgroundColor: "#08C289"
  };
  const buttonStyles = {
    backgroundColor: "#0e234d",
    color: "#ffffff",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#420045",
      boxShadow: "0 4px 8px 0 #eae8db, 0 2px 4px 0 #eae8db"
    },
    "&:focus": {
      outline: "none"
    },
    "&:disabled": {
      backgroundColor: "#BDBDBD",
      color: "#ffffff"
    }
  };
  const tableCellStyles = {
    paddingTop: 0,
    paddingBottom: 0
  };
  const costStyles = {
    fontWeight: 700,
    fontSize: "25px",
    color: "#000"
  };
  const viewDetailsStyles = {
    fontSize: 13,
    fontWeight: "bold",
    color: "#009cde"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 100
    }
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    onClick: () => {},
    rightButtonText: "text",
    buttonBg: "white",
    buttonTextColor: "white",
    background: "white",
    logoWidth: 180,
    logoImage: "https://dev.enroll.innovativepartnerslp.com/static/media/logo-innovation.d37870b8.png"
  }), /*#__PURE__*/_react.default.createElement(_PlanSelection.default, {
    activeStep: 0,
    reEnrollBySC: false,
    onClick: handleClick,
    fetchCompletionStatus: handleFetchCompletionStatus,
    planData: dataInno,
    fetchMemberPlan: handleFetchMemberPlan,
    saveMemberPlan: handleSaveMemberPlan,
    containerStyles: containerStyles,
    rowStyles: rowStyles,
    selectedRowStyles: selectedRowStyles,
    buttonStyles: buttonStyles,
    tableCellStyles: tableCellStyles,
    costStyles: costStyles,
    viewDetailsStyles: viewDetailsStyles
  }));
};
_reactDom.default.render(/*#__PURE__*/_react.default.createElement(App, null), document.getElementById("root"));