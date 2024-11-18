import { useState } from "react";
import UserButton from "../Elements/Button";
import ChoicePicker from "../Elements/ChoisePicker";
import InputField from "../Elements/InputField";

const CreateAccount = () => {
  const options = ["Resident", "Landlord/Property Management"];
  var [pageState, setPageState] = useState(-1);
  function PageState() {
    if (pageState === -1) return <>{ResorLord()}</>;
    if (pageState === 0) return <>{Resident()}</>;
    if (pageState === 1) return <>{Landlord()}</>;
  }
  const nextPageState = (forward) => {
    if (forward) {
      pageState += 1;
    } else {
      pageState -= 1;
    }
    setPageState(pageState);
  };
  function Landlord() {
    return (
      <div>
        <p className="normalText">Please enter your property number</p>
        <p className="smallText">**This sould have been provided via email**</p>
        <InputField></InputField>
        {phoneNumber()}
      </div>
    );
  }
  function Resident() {
    return (
      <div>
        <p className="normalText">Please enter your unit number</p>
        <InputField></InputField>
        {phoneNumber()}
      </div>
    );
  }
  function phoneNumber() {
    return (
      <>
        <p className="noBoldText">optional</p>
        <p className="normalText">Please provide a phone number</p>
        <InputField></InputField>
      </>
    );
  }
  function ResorLord() {
    return (
      <>
        <ChoicePicker items={options}></ChoicePicker>
        {/** Here will be the enter email/password */}
      </>
    );
  }
  return (
    <>
      {PageState()}
      <div className="bottom-container">
        {pageState > -1 ? (
          <>
            <UserButton
              green={false}
              text={"Back"}
              onClick={() => {
                nextPageState(false);
              }}
            ></UserButton>
          </>
        ) : (
          <></>
        )}
        <UserButton
          green={true}
          text={"Next"}
          onClick={() => {
            nextPageState(true);
          }}
        ></UserButton>
      </div>
    </>
  );
};
export default CreateAccount;
