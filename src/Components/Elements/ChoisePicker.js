import { useState } from "react";
import "../../Styles/CreateAccount.css";

const ChoicePicker = ({ items }) => {
  const [selected, setSelected] = useState(-1);
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
            {selected === index ? (
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
