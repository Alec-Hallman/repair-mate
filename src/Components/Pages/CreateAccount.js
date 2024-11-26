import { useContext, useEffect, useState } from "react";
import UserButton from "../Elements/Button";
import ChoicePicker from "../Elements/ChoisePicker";
import InputField from "../Elements/InputField";
import { appModel } from "../../Models/appModel";
import LoginField from "../Elements/LoginField";

const CreateAccount = ({ changeDisplay }) => {
  const {
    setResidentStatus,
    setSignedIn,
    postAccount,
    setPhoneNumber,
    setUnit,
    setForename,
    setProperty,
    email,
    password,
    userForename,
    phoneNumber,
    propertyId,
  } = useContext(appModel);
  const options = ["Resident", "Landlord/Property Management"];
  const [invalid, setInvalid] = useState(false);
  const [selected, setSelected] = useState(-1);
  var [pageState, setPageState] = useState(-1);
  const nextPageState = (forward) => {
    if (forward) {
      if (selected === 0) {
        setResidentStatus("resident");
      } else if (selected === 1) {
        setResidentStatus("landlord");
      }
      if (
        email !== "" &&
        password !== "" &&
        phoneNumber !== "" &&
        userForename !== "" &&
        propertyId !== "" &&
        selected !== -1
      ) {
        postAccount();
        setSignedIn(true);
      } else {
        setInvalid(true);
      }
    }
    setPageState(pageState);
  };
  function Resident() {
    return (
      <div>
        <p className="normalText">Please enter your unit number</p>
        <InputField setInputValue={setUnit}></InputField>
      </div>
    );
  }
  function PhoneNumber() {
    return (
      <>
        <p className="normalText">Please provide a phone number</p>
        <InputField setInputValue={setPhoneNumber}></InputField>
      </>
    );
  }
  function ResorLord() {
    return (
      <>
        {invalid ? (
          <p style={{ color: "red", fontWeight: "500", fontSize: "20px" }}>
            Please fill out all information
          </p>
        ) : (
          <></>
        )}
        <div>
          <p className="normalText">Please enter your full name</p>
          <InputField setInputValue={setForename}></InputField>
          <p className="normalText">
            Please enter the address of the building{" "}
          </p>

          <InputField setInputValue={setProperty}></InputField>
          <ChoicePicker
            items={options}
            setSelected={(index) => {
              setSelected(index);
            }}
            selected={selected}
          ></ChoicePicker>
          {selected === 0 ? Resident() : <></>}
          {PhoneNumber()}
          <LoginField></LoginField>
        </div>
        {/** Here will be the enter email/password */}
      </>
    );
  }
  return (
    <div style={{ marginTop: "120px", height: "100%" }}>
      {ResorLord()}
      <div className="bottom-container">
        <>
          <UserButton
            green={false}
            text={"Back"}
            onClick={() => {
              if (pageState === -1) {
                changeDisplay(-1);
              } else {
                nextPageState(false);
              }
            }}
          ></UserButton>
        </>
        <UserButton
          green={true}
          text="Done"
          onClick={() => {
            nextPageState(true);
          }}
        ></UserButton>
      </div>
    </div>
  );
};
export default CreateAccount;
