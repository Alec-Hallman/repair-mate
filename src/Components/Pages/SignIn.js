import LoginField from "../Elements/LoginField";
import "../../Styles/Input.css";
import UserButton from "../Elements/Button";
import SigninPage from "./SigninPage";
import { useContext, useState } from "react";
import { appModel } from "../../Models/appModel";

const SignIn = ({ changeDisplay }) => {
  const { setSignedIn, getUser } = useContext(appModel);
  const [databaseMessage, setMessage] = useState("");
  const click = async (forward) => {
    if (forward) {
      const message = await getUser();
      //console.log(message);
      setMessage(message);
    } else {
      changeDisplay(-1);
    }
  };

  function sign_in() {
    return (
      <div style={{ marginTop: "50px", height: "100%" }}>
        <p className="error-text">{databaseMessage}</p>
        <LoginField></LoginField>
        <div className="bottom-container">
          <UserButton
            text="Go Back"
            green={false}
            onClick={() => {
              click(false);
            }}
          ></UserButton>
          <UserButton
            text="Done"
            green={true}
            onClick={() => {
              click(true);
            }}
          ></UserButton>
        </div>
      </div>
    );
  }
  return <>{sign_in()}</>;
};
export default SignIn;
