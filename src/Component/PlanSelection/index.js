import React, { useEffect, useState } from "react";
import {
  TextField,
  Table,
  TableCell,
  Modal,
  TableBody,
  Radio,
  TableHead,
  TableContainer,
  TableRow,
  Button,
  Box,
  Tooltip,
  Paper,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import CommonDropDwn from "./CommonDropDwn";
import CommonDropFamily from "./CommonDropFamily";

const ProceedButton = ({ disabled, onClick, children, buttonStyles }) => (
  <Button
    variant="contained"
    disabled={disabled}
    onClick={onClick}
    sx={buttonStyles}
  >
    {children}
  </Button>
);

const StyledTableRow = styled(TableRow)(
  ({ theme, rowStyles, selectedStyles }) => ({
    ...rowStyles,
    "&.Mui-selected": selectedStyles,
  }),
);

const PlanSelection = ({
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
  viewDetailsStyles,
}) => {
  const [loaderShow, setLoaderShow] = useState(false);
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState(planData);
  const [listOfCost, setListOfCost] = useState([]);
  const [listOfEnrollCost, setListOfEnrollCost] = useState([]);
  const [familyList, setFamilyList] = useState([]);
  const [selectedFamily, setSelectedFamily] = useState(null);
  const clientId = sessionStorage.getItem("CLIENT_ID");
  const subId = JSON.parse(localStorage.getItem("CurrentLoginUser"))?.id;

  useEffect(() => {
    const fetchData = async () => {
      setLoaderShow(true);
      try {
        await fetchCompletionStatus(subId, activeStep);
        const plans = planData;

        setData(planData);
        setSelectedFamily(plans[0].categoryAmountList[0].category);
        setListOfCost(plans.map((plan) => plan.categoryAmountList[0].amount));
        setListOfEnrollCost(
          plans.map((plan) => plan.enrollmentFeesList[0].amount),
        );
        setFamilyList(plans.map((plan) => plan.categoryAmountList[0].category));

        const memberPlan = await fetchMemberPlan(subId);
        if (memberPlan) {
          const index = plans.findIndex(
            (x) => x.planId === memberPlan.planCode,
          );
          const flagRemoveDependent = plans[index].categoryAmountList.some(
            (x) => x.category === memberPlan.category,
          );

          const updatedFamily = [...familyList];
          const updatedCosts = [...listOfCost];
          const updatedEnrollCosts = [...listOfEnrollCost];

          updatedFamily[index] = flagRemoveDependent
            ? memberPlan.category
            : plans[index].categoryAmountList[0].category;
          updatedCosts[index] = flagRemoveDependent
            ? memberPlan.amount
            : plans[index].categoryAmountList[0].amount;
          if (
            memberPlan.enrollmentFeesList.some(
              (v) => v.amount === memberPlan.appFee,
            )
          ) {
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
  }, [
    subId,
    clientId,
    activeStep,
    fetchCompletionStatus,
    planData,
    fetchMemberPlan,
  ]);

  const handleClick = (index) => {
    if (!reEnrollBySC) {
      setSelected(index);
    }
  };

  const submitPlanRequest = async (e) => {
    if (e.detail === 1) {
      const obj = {
        subId,
        planCode: data[selected].planId,
        amount: listOfCost[selected],
        appFee: listOfEnrollCost[selected],
        category: familyList[selected],
        planType: "Core",
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

  return (
    <div style={containerStyles}>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar
            title={
              reEnrollBySC
                ? `Your current plan ${data[selected]?.planId} is selected for your reference and cannot be changed.`
                : "Review the plans available, compare premiums and click the ADD button."
            }
            planSelected={data[selected]}
            costSelected={listOfCost[selected]}
            enrollFeeSelected={listOfEnrollCost[selected]}
            selectedFamily={selectedFamily}
            reEnrollBySC={reEnrollBySC}
          />

          <TableContainer style={{ height: "38vh" }}>
            <Table sx={{ minWidth: 750 }}>
              <TableBody>
                {data &&
                  data.map((row, index) => {
                    const isItemSelected = index === selected;
                    return (
                      <StyledTableRow
                        hover
                        className={reEnrollBySC ? "disableSCcss" : ""}
                        onClick={() => handleClick(index)}
                        role="radio"
                        aria-checked={isItemSelected}
                        key={row.planInfo}
                        selected={isItemSelected}
                        rowStyles={rowStyles}
                        selectedStyles={selectedRowStyles}
                      >
                        <TableCell padding="checkbox" style={tableCellStyles}>
                          <Radio
                            checked={isItemSelected}
                            value={row.planInfo}
                            sx={{ color: "#162242" }}
                            name="radio-buttons"
                            inputProps={{ "aria-label": "A" }}
                          />
                        </TableCell>
                        <TableCell padding="none" style={tableCellStyles}>
                          Add <b>{row.planId}</b>
                        </TableCell>
                        {!reEnrollBySC && (
                          <TableCell align="left" style={tableCellStyles}>
                            {listOfEnrollCost[index] !== undefined && (
                              <CommonDropDwn
                                value={row.enrollmentFeesList}
                                index={index}
                                disabled={reEnrollBySC}
                                selectedIndex={selected === index}
                                selectedEnrollFee={listOfEnrollCost[index]}
                                selectCost={(value, ind) => {
                                  const list = [...listOfEnrollCost];
                                  list[ind] = value;
                                  setListOfEnrollCost(list);
                                }}
                              />
                            )}
                          </TableCell>
                        )}
                        <TableCell align="left" style={tableCellStyles}>
                          {familyList[index] && (
                            <CommonDropFamily
                              value={row.categoryAmountList}
                              index={index}
                              disabled={reEnrollBySC}
                              selectedIndex={selected === index}
                              selectedFamily={familyList[index]}
                              selectCost={(value, ind) => {
                                const amount = row.categoryAmountList.find(
                                  (x) => x.category === value,
                                ).amount;
                                const updatedFamilyList = [...familyList];
                                const updatedCostList = [...listOfCost];
                                updatedFamilyList[ind] = value;
                                updatedCostList[ind] = amount;

                                setSelectedFamily(value);
                                setListOfCost(updatedCostList);
                                setFamilyList(updatedFamilyList);
                              }}
                            />
                          )}
                        </TableCell>
                        <TableCell align="right" style={costStyles}>
                          <span className="cost-per-month">
                            {listOfCost[index]?.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </span>
                        </TableCell>
                        <TableCell align="right" style={tableCellStyles}>
                          <IconButton onClick={() => window.open(row.link)}>
                            <span style={viewDetailsStyles}>VIEW DETAILS</span>
                          </IconButton>
                        </TableCell>
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Toolbar>
          <Tooltip title="Proceed" arrow>
            <ProceedButton
              disabled={reEnrollBySC}
              onClick={submitPlanRequest}
              buttonStyles={buttonStyles}
            >
              Proceed
            </ProceedButton>
          </Tooltip>
        </Toolbar>
      </Box>
    </div>
  );
};

export default PlanSelection;
