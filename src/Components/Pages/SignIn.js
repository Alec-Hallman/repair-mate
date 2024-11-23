import LoginField from "../Elements/LoginField";
import "../../Styles/Input.css";
import UserButton from "../Elements/Button";
import SigninPage from "./SigninPage";
import { useContext } from "react";
import { appModel } from "../../Models/appModel";

const SignIn = ({ changeDisplay }) => {
  const { signedIn, setSignedIn } = useContext(appModel);
  const click = (forward) => {
    if (forward) {
      setSignedIn(true);
    } else {
      changeDisplay(-1);
    }
  };

  function sign_in() {
    return (
      <>
        <LoginField></LoginField>
        <div className="bottom-container">
          <UserButton
            text="Done"
            green={true}
            onClick={() => {
              click(true);
            }}
          ></UserButton>
          <UserButton
            text="Go Back"
            green={false}
            onClick={() => {
              click(false);
            }}
          ></UserButton>
        </div>
      </>
    );
  }
  return (
    <>
      <>{sign_in()}</>
    </>
  );
};
export default SignIn;
