import { useContext, useState } from "react";
import { appModel } from "../../Models/appModel";
import { claimModel } from "../../Models/CreateClaimModel";

const DropDownMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  const { setProblemSelected } = useContext(claimModel);
  const selectedItem = (option) => {
    setProblemSelected(option);
    console.log("Selected: ", option);
  };
  return (
    <div className="dropdown-container">
      <button onClick={toggleDropDown} className="dropdown-button">
        Select Option ▼
      </button>
      {isOpen ? (
        <>
          <ul className="backdrop-container">
            {options.map((option, index) => {
              return (
                <div
                  onClick={() => {
                    selectedItem(index);
                  }}
                >
                  <li className="dropdown-item">{option}</li>
                </div>
              );
            })}
          </ul>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default DropDownMenu;
