import { useContext } from "react";
import "../../Styles/Input.css";
import { claimModel } from "../../Models/CreateClaimModel";

const LargeInput = () => {
  const { setDescription } = useContext(claimModel);
  return (
    <>
      <textarea
        className="large-input"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></textarea>
    </>
  );
};
export default LargeInput;
