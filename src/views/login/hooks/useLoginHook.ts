import illustration0 from "../img/illustration0.svg";
import illustration1 from "../img/illustration1.svg";
import illustration2 from "../img/illustration2.svg";
import illustration3 from "../img/illustration3.svg";
import illustration4 from "../img/illustration4.svg";
import illustration5 from "../img/illustration5.svg";
import illustration6 from "../img/illustration6.svg";
import { ILoginForm, IErrorMsg } from "../type.d";

export const setBg = () => {
  switch (String(new Date().getDay())) {
    case "0":
      return illustration0;
    case "1":
      return illustration1;
    case "2":
      return illustration2;
    case "3":
      return illustration3;
    case "4":
      return illustration4;
    case "5":
      return illustration5;
    case "6":
      return illustration6;
    default:
      return illustration4;
  }
};

export const checkPwdVal = (loginForm: ILoginForm): boolean => {
  return Boolean(loginForm.password);
};

export const checkUserVal = (loginForm: ILoginForm, errorMsg: IErrorMsg) => {
  return checkPhone(loginForm, errorMsg);
};

export const checkPhone = (
  loginForm: ILoginForm,
  errorMsg: IErrorMsg
): boolean => {
  const isUser = Boolean(loginForm.username);
  const isUserLen = loginForm.username.length === 11;
  errorMsg.userErr = !isUser ? "请输入手机号" : "";
  errorMsg.userErr = !isUserLen ? "请输入正确的手机号" : "";

  return isUser && isUserLen;
};

export const cleckFormData = (
  loginForm: ILoginForm,
  errorMsg: IErrorMsg
): boolean => {
  const isUser = Boolean(loginForm.username);
  const isUserLen = loginForm.username.length === 11;
  const isPwd = Boolean(loginForm.password);

  errorMsg.userErr = !isUser ? "请输入手机号" : "";
  errorMsg.userErr = !isUserLen ? "请输入正确的手机号" : "";
  errorMsg.pwdErr = !isPwd ? "请输入验证码" : "";
  return isUser && isUserLen && isPwd;
};
