import { useContext, useState } from "react";
import UserButton from "../Elements/Button";
import ChoicePicker from "../Elements/ChoisePicker";
import InputField from "../Elements/InputField";
import { appModel } from "../../Models/appModel";
import LoginField from "../Elements/LoginField";

const CreateAccount = ({ changeDisplay }) => {
  const { setResident, setSignedIn, signedIn } = useContext(appModel);
  const options = ["Resident", "Landlord/Property Management"];
  const [selected, setSelected] = useState(-1);
  var [pageState, setPageState] = useState(-1);
  function PageState() {
    if (pageState === -1) return <>{ResorLord()}</>;
    if (pageState === 0) return <>{Resident()}</>;
    if (pageState === 1) return <>{Landlord()}</>;
  }
  const nextPageState = (forward) => {
    if (forward) {
      if (pageState === 0 || pageState === 1) {
        setSignedIn(true);
      } else if (pageState === -1 && selected === 1) {
        //Land lord selected when page changed
        pageState += 2; //change page to the landlord create account page
        setResident(false); //set that in the app model
        //console.log("added 2 to page state");
      } else {
        pageState += 1;
      }
    } else {
      if (pageState === 1 && selected === 1) {
        pageState -= 2;
      } else {
        pageState -= 1;
      }
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
        <div>
          <ChoicePicker
            items={options}
            setSelected={(index) => {
              setSelected(index);
            }}
            selected={selected}
          ></ChoicePicker>
          <LoginField></LoginField>
        </div>
        {/** Here will be the enter email/password */}
      </>
    );
  }
  return (
    <>
      {PageState()}
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
          text={pageState < 0 ? "Next" : "Done"}
          onClick={() => {
            nextPageState(true);
          }}
        ></UserButton>
      </div>
    </>
  );
};
export default CreateAccount;
