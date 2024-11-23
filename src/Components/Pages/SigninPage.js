import { Button } from "bootstrap";
import "../../Styles/general.css";
import "../../Styles/SignIn.css";
import UserButton from "../Elements/Button";
import HeaderText from "../Elements/HeaderText";
import { useState } from "react";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";
const SigninPage = () => {
  const [signIn, setSignInState] = useState(-1); //By defualt -1, 0 = create account, 1 = sign in
  const changeDisplay = (pageState) => {
    setSignInState(pageState);
    console.log("page state changed");
  };
  function signInOrCreateAccount() {
    return (
      <>
        <HeaderText w1Text={"Please sign in or create an account"}></HeaderText>

        <UserButton
          text={"Create Account"}
          green={true}
          onClick={() => {
            changeDisplay(0); //Change the display to the create account page
          }}
        ></UserButton>
        <UserButton
          text={"Sign In"}
          green={true}
          onClick={() => {
            changeDisplay(1);
          }}
        ></UserButton>
      </>
    );
  }
  function renderPage() {
    if (signIn === -1) return <>{signInOrCreateAccount()}</>;
    if (signIn === 0) return <CreateAccount changeDisplay={changeDisplay} />;
    if (signIn === 1) return <SignIn changeDisplay={changeDisplay} />; //Sign in page will go here
  }

  return (
    <>
      <>{renderPage()}</>
    </>
  );
};
export default SigninPage;
