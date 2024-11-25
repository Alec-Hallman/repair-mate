import { useContext, useState } from "react";
import "../../Styles/purpleBox.css";
import HeaderText from "./HeaderText";
import { appModel } from "../../Models/appModel";
import SmallClaim from "./SmallClaim";
import DisplayClaim from "./DisplayClaim";
const PurpleBox = ({ w1Text, bText, w2Text, userClaims }) => {
  const [selectedClaim, setSelectedClaim] = useState({});
  function displayClaim() {
    if (selectedClaim.problem === undefined && userClaims.length > 0) {
      return (
        <>
          {userClaims.map((claim, index) => (
            <div
              onClick={() => {
                setSelectedClaim(claim);
                console.log("selected Claim", selectedClaim);
              }}
            >
              <SmallClaim claim={claim}></SmallClaim>
              {/**console.log(claim)*/}
            </div>
          ))}
        </>
      );
    } else if (selectedClaim.problem !== undefined) {
      return (
        <DisplayClaim
          selectedClaim={selectedClaim}
          setSelectedClaim={setSelectedClaim}
        ></DisplayClaim>
      );
    }
  }
  return (
    <div className="PurpleBox-container">
      <HeaderText
        large={true}
        w1Text={w1Text}
        bText={bText}
        w2Text={w2Text}
        style={{ position: "relative", top: "150px" }}
      ></HeaderText>
      <div className="PurpleBox">{displayClaim()}</div>
    </div>
  );
};
export default PurpleBox;
