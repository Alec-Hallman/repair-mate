import { useContext } from "react";
import HeaderText from "./HeaderText";
import InputField from "./InputField";
import { appModel } from "../../Models/appModel";
//import "../../Styles/LoginField.css";
const LoginField = () => {
  const { setEmail, setPassword, setForename } = useContext(appModel);
  return (
    <>
      <p className="normalText">Please enter your Email</p>
      <InputField setInputValue={setEmail}></InputField>
      <p className="normalText">and password</p>
      <InputField setInputValue={setPassword}></InputField>
    </>
  );
};
export default LoginField;
