import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Grid, Paper } from "@mui/material";
import "./index.css";
import { Amplify } from "aws-amplify";
import { defaultStorage } from "aws-amplify/utils";
import { cognitoUserPoolsTokenProvider } from "aws-amplify/auth/cognito";
import { signIn } from "aws-amplify/auth";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoginAws({
  logoImage,
  cardBgColor,
  buttonBg,
  userPool,
  onSuccessAction,
}) {
  const authConfig = {
    Cognito: userPool,
  };

  Amplify.configure({
    Auth: authConfig,
  });

  cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoader] = React.useState(false);
  async function signInMethod(e) {
    e?.preventDefault?.();
    setLoader(true);
    const credentials = { username, password };
    try {
      const { isSignedIn, nextStep } = await signIn(credentials);
      onSuccessAction({ isSignedIn, nextStep });
      setLoader(false);
    } catch (error) {
      setError(String(error));
      setLoader(false);
    }
  }
  React.useEffect(() => {
    setError(null);
  }, [username, password]);
  return (
    <div style={style.background}>
      <Box sx={style.boxStyle}>
        <Paper elevation={3}>
          <Grid container>
            <Grid item xs={12} sx={style.GridStye}>
              <img src={logoImage} style={{ width: "70%" }} />
            </Grid>
            <Grid item xs={12} style={{ background: cardBgColor, padding: 20 }}>
              {error && <p class="a-errorMessage">{error}</p>}
              <form onSubmit={(e) => signInMethod(e)}>
                <h4 className="label-head-login">
                  Sign in with your email and password
                </h4>
                <p style={{ margin: 0 }}>Email</p>
                <input
                  class="a-input"
                  type="text"
                  placeholder="Enter Email"
                  value={username}
                  disabled={loading}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

                <p style={{ margin: 0, paddingTop: 10 }}>Password</p>
                <input
                  class="a-input"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  disabled={loading}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span class="forgot-pawd">Forgot your password?</span>
                <Button
                  type="submit"
                  style={{ backgroundColor: buttonBg, ...style.buttonStyle }}
                  disabled={loading}
                  onClick={(e) => signInMethod(e)}
                >
                  {!loading ? (
                    "Sign In"
                  ) : (
                    <CircularProgress color="#fff" size="30px" />
                  )}
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
const style = {
  buttonStyle: {
    fontSize: "14px",
    fontWeight: 700,
    margin: "20px 0 10px",
    height: "40px",
    color: "#fff",
    backgroundImage: "none",
    border: "0px solid #2e6da4",
    borderRadius: "4px",
    width: "100%",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  boxStyle: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "2%",
    "& > :not(style)": {
      m: 1,
      width: 400,
      height: "auto",
    },
  },
  GridStye: { justifyContent: "center", display: "flex" },
  background: {
    background: "#808080",
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
};
