import HeaderText from "./HeaderText";
import InputField from "./InputField";
//import "../../Styles/LoginField.css";

const LoginField = () => {
  return (
    <>
      <p className="normalText">Please enter your Email</p>
      <InputField></InputField>
      <p className="normalText">and password</p>
      <InputField></InputField>
    </>
  );
};
export default LoginField;
