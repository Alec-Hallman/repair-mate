import { useContext, useState } from "react";
import "../../Styles/purpleBox.css";
import HeaderText from "./HeaderText";
import { appModel } from "../../Models/appModel";
import SmallClaim from "./SmallClaim";
import DisplayClaim from "./DisplayClaim";
import UserButton from "./Button";
import ChangeStatus from "./ChangeStatus";
const PurpleBox = ({
  w1Text,
  bText,
  w2Text,
  userClaims,
  resetLandlord,
  getUserClaims,
}) => {
  const [selectedClaim, setSelectedClaim] = useState({});
  const { setResidentPage, resident } = useContext(appModel);
  const [changeStatus, setStatus] = useState(false);
  //console.log("resident: ", resident);
  function displayClaim() {
    if (
      userClaims !== undefined &&
      selectedClaim.problem === undefined &&
      userClaims.length > 0
    ) {
      return (
        <>
          {userClaims.map((claim, index) => (
            <div
              onClick={() => {
                setSelectedClaim(claim);
                //console.log("selected Claim", selectedClaim);
              }}
            >
              <SmallClaim claim={claim}></SmallClaim>
              {/**console.log(claim)*/}
            </div>
          ))}
        </>
      );
    } else if (
      userClaims !== undefined &&
      selectedClaim.problem !== undefined
    ) {
      return (
        <DisplayClaim
          selectedClaim={selectedClaim}
          setSelectedClaim={setSelectedClaim}
          setStatus={setStatus}
        ></DisplayClaim>
      );
    } else {
      console.log("Showing Nothing");
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="normalText">
            Claims {resident === "resident" ? "you've made" : "residents make"}{" "}
            will appear here
          </p>
        </div>
      );
    }
  }
  return (
    <>
      <div className="purple-container">
        <HeaderText
          large={true}
          w1Text={w1Text}
          bText={bText}
          w2Text={w2Text}
        ></HeaderText>
        <div className="PurpleBox">{displayClaim()}</div>
      </div>
      <div className="bottom-container">
        {resident !== "landlord" || selectedClaim.problem !== undefined ? (
          <UserButton
            green={false}
            text={"Back"}
            onClick={() => {
              if (selectedClaim.problem === undefined) {
                setResidentPage(-1);
              } else {
                setSelectedClaim({});
              }
            }}
          ></UserButton>
        ) : (
          <></>
        )}
      </div>
      {changeStatus ? (
        <ChangeStatus
          claim={selectedClaim}
          changeStatus={setStatus}
        ></ChangeStatus>
      ) : (
        <></>
      )}
      {selectedClaim.problem === undefined ? (
        <button
          className="refresh-button"
          onClick={() => {
            if (resident !== "landlord") {
              getUserClaims();
            } else {
              resetLandlord();
            }
          }}
        >
          refresh
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
export default PurpleBox;
