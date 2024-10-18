import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Paper } from "@mui/material";
import { Amplify } from "aws-amplify";
import { defaultStorage } from "aws-amplify/utils";
import { cognitoUserPoolsTokenProvider } from "aws-amplify/auth/cognito";
import { signIn, resetPassword, confirmResetPassword } from "aws-amplify/auth";
import CircularProgress from "@mui/material/CircularProgress";
import PasswordValidations from "./PwdValidations";

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
  const [screen, setScreen] = React.useState("Login");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoader] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmNewPassword, setConfirmNewPassword] = React.useState("");
  const [disableSendBtn, setDisableSendBtn] = React.useState(true);
  const [message, setMessage] = React.useState("");
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
  async function resetPasswordMethod(e) {
    e?.preventDefault?.();
    setLoader(true);
    try {
      const output = await resetPassword({
        username: username,
      });
      const { nextStep } = output;
      switch (nextStep.resetPasswordStep) {
        case "CONFIRM_RESET_PASSWORD_WITH_CODE":
          const codeDeliveryDetails = nextStep.codeDeliveryDetails;
          setScreen("OtpVerification");
          setMessage(
            `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`,
          );
          break;
        case "DONE":
          console.log("Successfully reset password.");
          break;
      }
      setLoader(false);
    } catch (error) {
      setError(String(error));
      setLoader(false);
    }
  }
  const handleConfirmVerification = async (e) => {
    e?.preventDefault?.();
    setLoader(true);
    if (newPassword.trim() === confirmNewPassword.trim()) {
      try {
        setLoader(false);
        await confirmResetPassword({
          username: username,
          confirmationCode: code,
          newPassword: newPassword.trim(),
        });
        setScreen("Login");
        setError("");
        setCode("");
        setPassword(newPassword.trim());
      } catch (error) {
        setError(String(error));
        setLoader(false);
      }
    } else {
      setError("Please enter same password");
      setLoader(false);
    }
  };
  React.useEffect(() => {
    setError(null);
  }, [username, password]);
  const toggleResetBtn = (allPassed) => {
    setDisableSendBtn(!allPassed);
  };
  return (
    <div style={style.background}>
      <Box sx={style.boxStyle}>
        <Paper elevation={3}>
          <Grid container>
            <Grid item xs={12} sx={style.GridStye}>
              <img src={logoImage} style={{ width: "70%" }} />
            </Grid>
            <Grid item xs={12} style={{ background: cardBgColor, padding: 20 }}>
              {error && <p style={style.errorMessage}>{error}</p>}
              {screen === "Login" && (
                <form onSubmit={(e) => signInMethod(e)}>
                  <h4 style={style.labelHeadLogin}>
                    Sign in with your email and password
                  </h4>
                  <p style={{ margin: 0 }}>Email</p>
                  <input
                    style={style.input}
                    type="text"
                    placeholder="Enter Email"
                    value={username}
                    disabled={loading}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />

                  <p style={{ margin: 0, paddingTop: 10 }}>Password</p>
                  <input
                    style={style.input}
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    disabled={loading}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    style={style.forgotPassword}
                    onClick={() => setScreen("Forgot")}
                  >
                    Forgot your password?
                  </span>
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
              )}
              {screen === "Forgot" && (
                <form onSubmit={(e) => resetPasswordMethod(e)}>
                  <h3>Forgot your password?</h3>
                  <h4 style={{ ...style.labelHeadLogin, fontSize: 13 }}>
                    Enter your Email and we will send a message to reset your
                    password.
                  </h4>
                  <p style={{ margin: 0 }}>Email</p>
                  <input
                    style={style.input}
                    type="text"
                    placeholder="Enter Email"
                    value={username}
                    disabled={loading}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    style={{ backgroundColor: buttonBg, ...style.buttonStyle }}
                    disabled={loading}
                    onClick={(e) => resetPasswordMethod(e)}
                  >
                    {!loading ? (
                      "RESET MY PASSWORD"
                    ) : (
                      <CircularProgress color="#fff" size="30px" />
                    )}
                  </Button>
                </form>
              )}
              {screen === "OtpVerification" && (
                <form onSubmit={(e) => handleConfirmVerification(e)}>
                  <p>{message}</p>
                  <br />
                  <p style={{ margin: 0 }}>Code</p>
                  <input
                    style={style.input}
                    type="number"
                    placeholder="Code"
                    value={code}
                    disabled={loading}
                    onChange={(e) => setCode(e.target.value)}
                    required
                  />
                  <br />
                  <p style={{ margin: 0 }}>New Password</p>
                  <input
                    style={style.input}
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    disabled={loading}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <br />
                  <p style={{ margin: 0 }}>Confirm Password</p>
                  <input
                    style={style.input}
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmNewPassword}
                    disabled={loading}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
                  />
                  <br />
                  <Button
                    type="submit"
                    style={{ backgroundColor: buttonBg, ...style.buttonStyle }}
                    disabled={loading || disableSendBtn}
                    onClick={(e) => handleConfirmVerification(e)}
                  >
                    {!loading ? (
                      "CHANGE PASSWORD"
                    ) : (
                      <CircularProgress color="#fff" size="30px" />
                    )}
                  </Button>
                  <PasswordValidations
                    password={newPassword}
                    allPassed={toggleResetBtn}
                  />
                </form>
              )}
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
  labelHeadLogin: {
    fontSize: "16px",
    color: "#000",
    fontWeight: 400,
  },
  input: {
    width: "90%",
    height: "30px",
    borderRadius: "5px",
    padding: "2px 12px",
    marginTop: "3px",
    fontSize: "14px",
    boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075)",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    lineHeight: 1.42857,
  },
  forgotPassword: {
    color: "#337ab7",
    cursor: "pointer",
    marginTop: "10px",
    display: "block",
    paddingTop: "5px",
  },
  errorMessage: {
    padding: "5px",
    fontSize: "14px",
    background: "#f5f5f5",
    border: "2px solid #d64958",
    color: "#d64958",
    marginBottom: "10px",
    fontWeight: 400,
  },
};
