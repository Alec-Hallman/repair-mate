import { useContext } from "react";
import "../../Styles/purpleBox.css";
import UserButton from "./Button";
import { appModel } from "../../Models/appModel";
import ChangeStatus from "./ChangeStatus";
const DisplayClaim = ({ selectedClaim, setSelectedClaim, setStatus }) => {
  const { resident } = useContext(appModel);
  return (
    <>
      <div className="largeClaim">
        <div className="top-row">
          <p className="normalText">{selectedClaim.problem}</p>
          <p className="description-text">
            {" "}
            |{" "}
            {selectedClaim.location === "In unit"
              ? "Unit: " + selectedClaim.unitNumber
              : selectedClaim.location}{" "}
            |
          </p>
          <p className="description-text">
            {" "}
            submitted by: {selectedClaim.forename} |
          </p>
        </div>
        <div className="top-row" style={{ marginTop: "15px" }}>
          <p className="description-text">{selectedClaim.date}</p>
        </div>
        <p className="normalText">Description:</p>
        <p className="description-text">{selectedClaim.description}</p>
        <p className="normalText">Can maintenance enter your unit?</p>
        <p className="description-text">{selectedClaim.maintenance}</p>
        <p className="normalText">Contact Information:</p>
        <p className="description-text">Email: {selectedClaim.userEmail}</p>
        <p className="normalText">Status: </p>
        <p className="description-text">{selectedClaim.status}</p>
        <div className="status-container">
          {resident === "landlord" ? (
            <UserButton
              green={true}
              text={"Change Status"}
              onClick={() => {
                setStatus(true);
              }}
            ></UserButton>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
export default DisplayClaim;
