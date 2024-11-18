import { useState } from "react";
import "../../Styles/CreateAccount.css";

const ChoicePicker = ({ items, setSelected, selected }) => {
  const changeSelection = (index) => {
    setSelected(index);
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
              <p className="normalText">0</p>
            )}
            <p className="normalText">{items[index]}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default ChoicePicker;
