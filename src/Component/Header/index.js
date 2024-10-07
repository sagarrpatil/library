import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Header({
  background,
  logoImage,
  logoWidth,
  rightButtonText,
  onClick,
  buttonBg,
  buttonTextColor,
}) {
  return (
    <AppBar position="fixed" sx={{ background: background }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "contents",
          }}
        >
          <img src={logoImage} width={logoWidth ? logoWidth : 180} />
        </Typography>
        {rightButtonText && (
          <Button
            sx={{ background: buttonBg, color: buttonTextColor }}
            onClick={() => onClick()}
          >
            {rightButtonText}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
