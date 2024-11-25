import { useContext } from "react";
import "../../Styles/purpleBox.css";
import UserButton from "./Button";
import { appModel } from "../../Models/appModel";
const DisplayClaim = ({ selectedClaim, setSelectedClaim }) => {
  const { resident } = useContext(appModel);
  return (
    <>
      <div className="largeClaim">
        <div className="top-row">
          <p className="normalText">{selectedClaim.problem}</p>
          <p className="description-text"> | {selectedClaim.location} |</p>
          <p className="description-text">
            {" "}
            submitted by: {selectedClaim.forename} |
          </p>
        </div>
        <p className="normalText">Description:</p>
        <p className="description-text">{selectedClaim.description}</p>
        <p className="normalText">Can maintenance enter your unit?</p>
        <p className="description-text">{selectedClaim.maintenance}</p>
        <p className="normalText">Contact Information:</p>
        <p className="description-text">Email: {selectedClaim.userEmail}</p>
        {resident === "landlord" ? (
          <div className="bottomClaim-container">
            <UserButton green={true} text={"Change Status"}></UserButton>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="bottom-container">
        <UserButton
          green={false}
          text={"back"}
          onClick={() => {
            setSelectedClaim({});
          }}
        ></UserButton>
      </div>
    </>
  );
};
export default DisplayClaim;
