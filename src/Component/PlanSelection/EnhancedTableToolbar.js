// EnhancedTableToolbar.js
import React from "react";
import { Toolbar, Typography, IconButton, Tooltip } from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

const EnhancedTableToolbar = ({
  title,
  planSelected,
  costSelected,
  enrollFeeSelected,
  selectedFamily,
  reEnrollBySC,
}) => {
  return (
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flex: "1 1 100%" }}>
        {title}
      </Typography>
      {planSelected && !reEnrollBySC && (
        <Tooltip title="More info" arrow>
          <IconButton>
            <InfoRoundedIcon />
          </IconButton>
        </Tooltip>
      )}
      <div>
        <Typography variant="body1">
          {planSelected?.planId} - Cost:{" "}
          {costSelected?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
          , Enrollment Fee:{" "}
          {enrollFeeSelected?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>
      </div>
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
