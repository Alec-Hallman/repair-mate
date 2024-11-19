import { useCallback, useContext } from "react";
import InfoManager, { appModel } from "../../Models/appModel";
import HeaderText from "../Elements/HeaderText";
import HomeButton from "../Elements/HomeButton";
import SigninPage from "./SigninPage";

const Homepage = () => {
  const { signedIn } = useContext(appModel);
  return (
    <>
      <div className="app">
        <div className="header-container">
          <HomeButton></HomeButton>
        </div>
        <HeaderText text={"this is a header Text"} large={true}></HeaderText>
        <div className="center-container">
          {/** Wrap the page in the require module to pass it the required values*/}
          <InfoManager>
            <SigninPage></SigninPage>
          </InfoManager>
        </div>
      </div>
    </>
  );
};
export default Homepage;
