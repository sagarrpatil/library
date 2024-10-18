import React from "react";
import { useState, useEffect } from "react";

const passwordCheck = {
  chechForNumbers: (string) => {
    var matches = string.match(/\d+/g);
    let value = matches != null ? true : false;
    return value;
  },

  checkForUpperCase: (string) => {
    var matches = string.match(/[A-Z]/);
    let value = matches != null ? true : false;
    return value;
  },

  checkForLowerCase: (string) => {
    var matches = string.match(/[a-z]/);
    let value = matches != null ? true : false;
    return value;
  },

  checkForSymbols: (string) => {
    var symbols = new RegExp(/[^A-Za-z0-9]/);
    let value = symbols.test(string) ? true : false;
    return value;
  },

  checkPwdLength: (string) => {
    let value = string.length > 7 ? true : false;
    return value;
  },
};
const PasswordValidations = (props) => {
  const [isPwdLowercase, setPwdLowercase] = useState(false);
  const [pwdHasSymbol, setPwdHasSymbol] = useState(false);
  const [pwdHasNumbers, setPwdHasNumbers] = useState(false);
  const [isPwdUppercase, setPwdUppercase] = useState(false);
  const [pwdLengthReq, setPwdLengthReq] = useState(false);

  useEffect(() => {
    console.log(props.password);
    let isLowercase = passwordCheck.checkForLowerCase(props.password);
    let hasSymbol = passwordCheck.checkForSymbols(props.password);
    let hasNmbr = passwordCheck.chechForNumbers(props.password);
    let isUpercase = passwordCheck.checkForUpperCase(props.password);
    let pwdLngth = passwordCheck.checkPwdLength(props.password);

    let allPassed =
      isLowercase && hasSymbol && hasNmbr && isUpercase && pwdLngth;

    setPwdLowercase(isLowercase);
    setPwdHasSymbol(hasSymbol);
    setPwdHasNumbers(hasNmbr);
    setPwdUppercase(isUpercase);
    setPwdLengthReq(pwdLngth);
    props.allPassed(allPassed);
  }, [props.password]);

  return (
    <div className="pwd-validations" hidden={props.password.length <= 0}>
      <div
        className={isPwdLowercase ? "valid" : "invalid"}
        style={{ color: isPwdLowercase ? "green" : "red" }}
      >
        <span aria-hidden="true">{isPwdLowercase ? "✓" : "✖"} </span>
        <span className="pwd-validation-txt">
          Password must contain a lower case letter
        </span>
      </div>
      <div
        className={isPwdUppercase ? "valid" : "invalid"}
        style={{ color: isPwdUppercase ? "green" : "red" }}
      >
        <span aria-hidden="true">{isPwdUppercase ? "✓" : "✖"} </span>
        <span className="pwd-validation-txt">
          Password must contain an upper case letter
        </span>
      </div>
      <div
        className={pwdHasSymbol ? "valid" : "invalid"}
        style={{ color: pwdHasSymbol ? "green" : "red" }}
      >
        <span aria-hidden="true">{pwdHasSymbol ? "✓" : "✖"} </span>
        <span className="pwd-validation-txt">
          Password must contain a special character
        </span>
      </div>
      <div
        className={pwdHasNumbers ? "valid" : "invalid"}
        style={{ color: pwdHasNumbers ? "green" : "red" }}
      >
        <span aria-hidden="true">{pwdHasNumbers ? "✓" : "✖"} </span>
        <span className="pwd-validation-txt">
          Password must contain a number
        </span>
      </div>
      <div
        className={pwdLengthReq ? "valid" : "invalid"}
        style={{ color: pwdLengthReq ? "green" : "red" }}
      >
        <span aria-hidden="true">{pwdLengthReq ? "✓" : "✖"} </span>
        <span className="pwd-validation-txt">
          Password must contain at least 8 characters
        </span>
      </div>
    </div>
  );
};
export default PasswordValidations;
