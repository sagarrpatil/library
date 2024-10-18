import React, { useEffect } from "react";
import ReactDOM from "react-dom";
// import BasicButtonGroup from "./Button"
import Header from "./Component/Header";
import PlanSelection from "./Component/PlanSelection";
import LoginAws from "./Component/LoginAws";
const App = () => {
  const handleFetchCompletionStatus = async (subId, activeStep) => {
    // Your API call here
  };
  const dataInno = [
    {
      planId: "Elite MD 2",
      link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Elite-MD-Plan-Brochure.pdf",
      enrollmentFeesList: [
        {
          id: 24,
          amount: 125,
          activeFlag: true,
          index: 1,
        },
        {
          id: 23,
          amount: 100,
          activeFlag: true,
          index: 2,
        },
        {
          id: 22,
          amount: 75,
          activeFlag: true,
          index: 3,
        },
        {
          id: 21,
          amount: 50,
          activeFlag: true,
          index: 4,
        },
      ],
      categoryAmountList: [
        {
          category: "Primary",
          amount: 192.9,
        },
      ],
    },
    {
      planId: "Elite MD 4",
      link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Elite-MD-Plan-Brochure.pdf",
      enrollmentFeesList: [
        {
          id: 24,
          amount: 125,
          activeFlag: true,
          index: 1,
        },
        {
          id: 23,
          amount: 100,
          activeFlag: true,
          index: 2,
        },
        {
          id: 22,
          amount: 75,
          activeFlag: true,
          index: 3,
        },
        {
          id: 21,
          amount: 50,
          activeFlag: true,
          index: 4,
        },
      ],
      categoryAmountList: [
        {
          category: "Primary",
          amount: 213.97,
        },
      ],
    },
    {
      planId: "Elite MD 6",
      link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Elite-MD-Plan-Brochure.pdf",
      enrollmentFeesList: [
        {
          id: 24,
          amount: 125,
          activeFlag: true,
          index: 1,
        },
        {
          id: 23,
          amount: 100,
          activeFlag: true,
          index: 2,
        },
        {
          id: 22,
          amount: 75,
          activeFlag: true,
          index: 3,
        },
        {
          id: 21,
          amount: 50,
          activeFlag: true,
          index: 4,
        },
      ],
      categoryAmountList: [
        {
          category: "Primary",
          amount: 219.87,
        },
      ],
    },
    {
      planId: "Optimum-MD 1",
      link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
      enrollmentFeesList: [
        {
          id: 24,
          amount: 125,
          activeFlag: true,
          index: 1,
        },
        {
          id: 23,
          amount: 100,
          activeFlag: true,
          index: 2,
        },
        {
          id: 22,
          amount: 75,
          activeFlag: true,
          index: 3,
        },
        {
          id: 21,
          amount: 50,
          activeFlag: true,
          index: 4,
        },
      ],
      categoryAmountList: [
        {
          category: "Primary",
          amount: 251.29,
        },
      ],
    },
    {
      planId: "Optimum-MD 2",
      link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
      enrollmentFeesList: [
        {
          id: 24,
          amount: 125,
          activeFlag: true,
          index: 1,
        },
        {
          id: 23,
          amount: 100,
          activeFlag: true,
          index: 2,
        },
        {
          id: 22,
          amount: 75,
          activeFlag: true,
          index: 3,
        },
        {
          id: 21,
          amount: 50,
          activeFlag: true,
          index: 4,
        },
      ],
      categoryAmountList: [
        {
          category: "Primary",
          amount: 298.61,
        },
      ],
    },
    {
      planId: "Optimum-MD 3",
      link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
      enrollmentFeesList: [
        {
          id: 24,
          amount: 125,
          activeFlag: true,
          index: 1,
        },
        {
          id: 23,
          amount: 100,
          activeFlag: true,
          index: 2,
        },
        {
          id: 22,
          amount: 75,
          activeFlag: true,
          index: 3,
        },
        {
          id: 21,
          amount: 50,
          activeFlag: true,
          index: 4,
        },
      ],
      categoryAmountList: [
        {
          category: "Primary",
          amount: 323.3,
        },
      ],
    },
    {
      planId: "Optimum-MD 4",
      link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
      enrollmentFeesList: [
        {
          id: 24,
          amount: 125,
          activeFlag: true,
          index: 1,
        },
        {
          id: 23,
          amount: 100,
          activeFlag: true,
          index: 2,
        },
        {
          id: 22,
          amount: 75,
          activeFlag: true,
          index: 3,
        },
        {
          id: 21,
          amount: 50,
          activeFlag: true,
          index: 4,
        },
      ],
      categoryAmountList: [
        {
          category: "Primary",
          amount: 377.8,
        },
      ],
    },
    {
      planId: "Optimum-MD 5",
      link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
      enrollmentFeesList: [
        {
          id: 24,
          amount: 125,
          activeFlag: true,
          index: 1,
        },
        {
          id: 23,
          amount: 100,
          activeFlag: true,
          index: 2,
        },
        {
          id: 22,
          amount: 75,
          activeFlag: true,
          index: 3,
        },
        {
          id: 21,
          amount: 50,
          activeFlag: true,
          index: 4,
        },
      ],
      categoryAmountList: [
        {
          category: "Primary",
          amount: 395.41,
        },
      ],
    },
    {
      planId: "Optimum-MD 6",
      link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
      enrollmentFeesList: [
        {
          id: 24,
          amount: 125,
          activeFlag: true,
          index: 1,
        },
        {
          id: 23,
          amount: 100,
          activeFlag: true,
          index: 2,
        },
        {
          id: 22,
          amount: 75,
          activeFlag: true,
          index: 3,
        },
        {
          id: 21,
          amount: 50,
          activeFlag: true,
          index: 4,
        },
      ],
      categoryAmountList: [
        {
          category: "Primary",
          amount: 502.26,
        },
      ],
    },
    {
      planId: "Optimum-MD 7",
      link: "https://innovative-partners-s3.s3.us-east-2.amazonaws.com/Agent/Optimum-MD-Plan-Brochure.pdf",
      enrollmentFeesList: [
        {
          id: 24,
          amount: 125,
          activeFlag: true,
          index: 1,
        },
        {
          id: 23,
          amount: 100,
          activeFlag: true,
          index: 2,
        },
        {
          id: 22,
          amount: 75,
          activeFlag: true,
          index: 3,
        },
        {
          id: 21,
          amount: 50,
          activeFlag: true,
          index: 4,
        },
      ],
      categoryAmountList: [
        {
          category: "Primary",
          amount: 614.11,
        },
      ],
    },
  ];
  const handleFetchPlanData = async (subId, clientId) => {
    // Your API call here
    return { response: dataInno }; // Return the data in the expected format
  };

  const handleFetchMemberPlan = async (subId) => {
    // Your API call here
    return null; // Return the member plan data
  };

  const handleSaveMemberPlan = async (data) => {
    // Your API call here
    return { data: { response: true } }; // Simulate a successful save response
  };
  const handleClick = () => {
    console.log("Plan selected");
  };

  const containerStyles = { margin: "-2%" };
  const rowStyles = { backgroundColor: "#F4F4F4" };
  const selectedRowStyles = { backgroundColor: "#08C289" };
  const buttonStyles = {
    backgroundColor: "#0e234d",
    color: "#ffffff",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#420045",
      boxShadow: "0 4px 8px 0 #eae8db, 0 2px 4px 0 #eae8db",
    },
    "&:focus": { outline: "none" },
    "&:disabled": { backgroundColor: "#BDBDBD", color: "#ffffff" },
  };
  const tableCellStyles = { paddingTop: 0, paddingBottom: 0 };
  const costStyles = { fontWeight: 700, fontSize: "25px", color: "#000" };
  const viewDetailsStyles = {
    fontSize: 13,
    fontWeight: "bold",
    color: "#009cde",
  };

  return (
    <div>
     
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export { default as Button } from "./Button";
export { default as Header } from "./Component/Header";
export { default as PlanSelection } from "./Component/PlanSelection";
export { default as LoginAws } from "./Component/LoginAws";
