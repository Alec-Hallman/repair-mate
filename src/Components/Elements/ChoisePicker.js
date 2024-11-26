import { useState } from "react";
import "../../Styles/CreateAccount.css";

const ChoicePicker = ({ items, setSelected, selected }) => {
  const changeSelection = (index) => {
    setSelected(index);
  };
  const [singleClaim, setSingleClaim] = useState({});
  const claimClicked = (claim) => {
    setSingleClaim(claim);
  };
  return (
    <>
      <div>
        {items.map((item, index) => (
          <div
            className="option-container"
            onClick={() => {
              changeSelection(index);
            }}
          >
            {selected != null && selected === index ? (
              <p className="normalText">✅</p>
            ) : (
              <p className="normalText">☐</p>
            )}
            <p className="normalText">{item}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default ChoicePicker;
