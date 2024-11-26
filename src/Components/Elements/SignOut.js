import { useContext } from "react";
import { appModel } from "../../Models/appModel";

const SignOut = () => {
  const { setSignedIn } = useContext(appModel);
  return (
    <div
      className="signout-button"
      onClick={() => {
        setSignedIn(false);
      }}
    >
      <img className="signout-image" alt="userimg" src="./user.png"></img>
    </div>
  );
};
export default SignOut;
