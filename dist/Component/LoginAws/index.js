"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoginAws;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _material = require("@mui/material");
var _awsAmplify = require("aws-amplify");
var _utils = require("aws-amplify/utils");
var _cognito = require("aws-amplify/auth/cognito");
var _auth = require("aws-amplify/auth");
var _CircularProgress = _interopRequireDefault(require("@mui/material/CircularProgress"));
var _PwdValidations = _interopRequireDefault(require("./PwdValidations"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function LoginAws(_ref) {
  let {
    logoImage,
    cardBgColor,
    buttonBg,
    userPool,
    onSuccessAction
  } = _ref;
  const authConfig = {
    Cognito: userPool
  };
  _awsAmplify.Amplify.configure({
    Auth: authConfig
  });
  _cognito.cognitoUserPoolsTokenProvider.setKeyValueStorage(_utils.defaultStorage);
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
    const credentials = {
      username,
      password
    };
    try {
      const {
        isSignedIn,
        nextStep
      } = await (0, _auth.signIn)(credentials);
      onSuccessAction({
        isSignedIn,
        nextStep
      });
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
      const output = await (0, _auth.resetPassword)({
        username: username
      });
      const {
        nextStep
      } = output;
      switch (nextStep.resetPasswordStep) {
        case "CONFIRM_RESET_PASSWORD_WITH_CODE":
          const codeDeliveryDetails = nextStep.codeDeliveryDetails;
          setScreen("OtpVerification");
          setMessage(`Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`);
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
  const handleConfirmVerification = async e => {
    e?.preventDefault?.();
    setLoader(true);
    if (newPassword.trim() === confirmNewPassword.trim()) {
      try {
        setLoader(false);
        await (0, _auth.confirmResetPassword)({
          username: username,
          confirmationCode: code,
          newPassword: newPassword.trim()
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
  const toggleResetBtn = allPassed => {
    setDisableSendBtn(!allPassed);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style.background
  }, /*#__PURE__*/React.createElement(_Box.default, {
    sx: style.boxStyle
  }, /*#__PURE__*/React.createElement(_material.Paper, {
    elevation: 3
  }, /*#__PURE__*/React.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    xs: 12,
    sx: style.GridStye
  }, /*#__PURE__*/React.createElement("img", {
    src: logoImage,
    style: {
      width: "70%"
    }
  })), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    xs: 12,
    style: {
      background: cardBgColor,
      padding: 20
    }
  }, error && /*#__PURE__*/React.createElement("p", {
    style: style.errorMessage
  }, error), screen === "Login" && /*#__PURE__*/React.createElement("form", {
    onSubmit: e => signInMethod(e)
  }, /*#__PURE__*/React.createElement("h4", {
    style: style.labelHeadLogin
  }, "Sign in with your email and password"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    style: style.input,
    type: "text",
    placeholder: "Enter Email",
    value: username,
    disabled: loading,
    onChange: e => setUsername(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      paddingTop: 10
    }
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    style: style.input,
    type: "password",
    placeholder: "Enter Password",
    value: password,
    disabled: loading,
    onChange: e => setPassword(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("span", {
    style: style.forgotPassword,
    onClick: () => setScreen("Forgot")
  }, "Forgot your password?"), /*#__PURE__*/React.createElement(_Button.default, {
    type: "submit",
    style: {
      backgroundColor: buttonBg,
      ...style.buttonStyle
    },
    disabled: loading,
    onClick: e => signInMethod(e)
  }, !loading ? "Sign In" : /*#__PURE__*/React.createElement(_CircularProgress.default, {
    color: "#fff",
    size: "30px"
  }))), screen === "Forgot" && /*#__PURE__*/React.createElement("form", {
    onSubmit: e => resetPasswordMethod(e)
  }, /*#__PURE__*/React.createElement("h3", null, "Forgot your password?"), /*#__PURE__*/React.createElement("h4", {
    style: {
      ...style.labelHeadLogin,
      fontSize: 13
    }
  }, "Enter your Email and we will send a message to reset your password."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    style: style.input,
    type: "text",
    placeholder: "Enter Email",
    value: username,
    disabled: loading,
    onChange: e => setUsername(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement(_Button.default, {
    type: "submit",
    style: {
      backgroundColor: buttonBg,
      ...style.buttonStyle
    },
    disabled: loading,
    onClick: e => resetPasswordMethod(e)
  }, !loading ? "RESET MY PASSWORD" : /*#__PURE__*/React.createElement(_CircularProgress.default, {
    color: "#fff",
    size: "30px"
  }))), screen === "OtpVerification" && /*#__PURE__*/React.createElement("form", {
    onSubmit: e => handleConfirmVerification(e)
  }, /*#__PURE__*/React.createElement("p", null, message), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Code"), /*#__PURE__*/React.createElement("input", {
    style: style.input,
    type: "number",
    placeholder: "Code",
    value: code,
    disabled: loading,
    onChange: e => setCode(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "New Password"), /*#__PURE__*/React.createElement("input", {
    style: style.input,
    type: "password",
    placeholder: "New Password",
    value: newPassword,
    disabled: loading,
    onChange: e => setNewPassword(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Confirm Password"), /*#__PURE__*/React.createElement("input", {
    style: style.input,
    type: "password",
    placeholder: "Confirm Password",
    value: confirmNewPassword,
    disabled: loading,
    onChange: e => setConfirmNewPassword(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Button.default, {
    type: "submit",
    style: {
      backgroundColor: buttonBg,
      ...style.buttonStyle
    },
    disabled: loading || disableSendBtn,
    onClick: e => handleConfirmVerification(e)
  }, !loading ? "CHANGE PASSWORD" : /*#__PURE__*/React.createElement(_CircularProgress.default, {
    color: "#fff",
    size: "30px"
  })), /*#__PURE__*/React.createElement(_PwdValidations.default, {
    password: newPassword,
    allPassed: toggleResetBtn
  })))))));
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
    textTransform: "uppercase"
  },
  boxStyle: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "2%",
    "& > :not(style)": {
      m: 1,
      width: 400,
      height: "auto"
    }
  },
  GridStye: {
    justifyContent: "center",
    display: "flex"
  },
  background: {
    background: "#808080",
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  labelHeadLogin: {
    fontSize: "16px",
    color: "#000",
    fontWeight: 400
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
    lineHeight: 1.42857
  },
  forgotPassword: {
    color: "#337ab7",
    cursor: "pointer",
    marginTop: "10px",
    display: "block",
    paddingTop: "5px"
  },
  errorMessage: {
    padding: "5px",
    fontSize: "14px",
    background: "#f5f5f5",
    border: "2px solid #d64958",
    color: "#d64958",
    marginBottom: "10px",
    fontWeight: 400
  }
};