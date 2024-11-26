import { useState } from "react";
import "../../Styles/ChangeStatus.css";
import ChoicePicker from "./ChoisePicker";
import HeaderText from "./HeaderText";
import UserButton from "./Button";

const ChangeStatus = ({ changeStatus }) => {
  const options = ["Under Review", "Worker assigned", "Completed"];
  const [selectedStatus, setStatus] = useState("");
  return (
    <div className="changeStatus-background">
      <div className="changeStatus-container">
        <p className="normalText">What do you want to set the status to?</p>
        <ChoicePicker
          items={options}
          selected={selectedStatus}
          setSelected={setStatus}
        ></ChoicePicker>
        <div className="submitButton">
          <UserButton
            green={true}
            text={"Submit"}
            onClick={() => {
              changeStatus(false);
            }}
          ></UserButton>
        </div>
      </div>
    </div>
  );
};
export default ChangeStatus;
