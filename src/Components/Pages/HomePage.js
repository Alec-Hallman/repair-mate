import { useCallback, useContext } from "react";
import InfoManager, { appModel } from "../../Models/appModel";
import HeaderText from "../Elements/HeaderText";
import HomeButton from "../Elements/HomeButton";
import SigninPage from "./SigninPage";
import ResidentHome from "./ResidentHome.js";
import LandlordHome from "./LandlordHome.js";
import ClaimModel from "../../Models/CreateClaimModel.js";
import SignOut from "../Elements/SignOut.js";

const Homepage = () => {
  const { signedIn, resident, w1Text, w2Text, bText, setSignedIn } =
    useContext(appModel);
  function showPages() {
    if (signedIn) {
      //user is signed in
      if (resident === "resident") {
        return (
          <ClaimModel>
            <ResidentHome></ResidentHome>
          </ClaimModel>
        );
        //Show resident page
      } else {
        //show landlord page
        return <LandlordHome />;
      }
    } else {
      //user is not signed in Show sign in information
      return <SigninPage></SigninPage>;
    }
  }
  return (
    <>
      <div className="app">
        <div className="header-container">
          <HomeButton></HomeButton>
        </div>
        <div style={{ marginTop: "10px" }}></div>
        <HeaderText
          w1Text={w1Text}
          bText={bText}
          w2Text={w2Text}
          large={true}
        ></HeaderText>
        <div className="center-container">
          {/** Wrap the page in the require module to pass it the required values*/}
          {showPages()}
        </div>
      </div>
    </>
  );
};
export default Homepage;
