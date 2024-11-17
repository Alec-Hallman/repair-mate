import { Button } from "bootstrap";
import "../../Styles/general.css";
import "../../Styles/SignIn.css";
import UserButton from "../Elements/Button";
import HeaderText from "../Elements/HeaderText";
import { useState } from "react";
const SigninPage = () => {
  const [signIn, setSignInState] = useState(-1);
  const changeDisplay = (pageState) => {
    setSignInState(pageState);
    console.log("page state changed");
  };
  return (
    <>
      <HeaderText text={"Please sign in or create an account"}></HeaderText>
      <div className="CC_SI-container">
        <UserButton
          text={"Create Account"}
          green={true}
          onClick={() => {
            changeDisplay(0);
          }}
        ></UserButton>
        <UserButton text={"Sign In"} green={true}></UserButton>
      </div>
    </>
  );
};
export default SigninPage;
