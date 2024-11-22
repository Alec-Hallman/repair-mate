import { useContext } from "react";
import "../../Styles/Input.css";
import ClaimModel, { claimModel } from "../../Models/CreateClaimModel";

const LargeInput = () => {
  const { setDescription } = useContext(claimModel);
  return (
    <>
      <input
        className="large-input"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></input>
    </>
  );
};
export default LargeInput;
