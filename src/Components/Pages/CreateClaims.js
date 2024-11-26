import { useContext, useEffect, useState } from "react";
import HeaderText from "../Elements/HeaderText";
import UserButton from "../Elements/Button";
import ChoicePicker from "../Elements/ChoisePicker";
import DropDownMenu from "../Elements/DropDownMenu";
import { appModel } from "../../Models/appModel";
import "../../Styles/DropDown.css";
import InputField from "../Elements/InputField";
import LargeInput from "../Elements/LargeInputField";
import { claimModel } from "../../Models/CreateClaimModel";
import LargeButton from "../Elements/LargeButton";

const CreateClaims = () => {
  const { setResidentPage } = useContext(appModel);

  const {
    unitSelection,
    report,
    inUnit,
    onProperty,
    stepCounter,
    progress,
    nextStep,
    selected,
    setSelected,
    w1Text,
    w2Text,
    bText,
    maintenanceSelection,
    maintenanceOptions,
    inUnitonProperty,
    setMaintenance,
    postClaim,
    resetCreateClaim,
  } = useContext(claimModel);

  useEffect(() => {
    resetCreateClaim();
  }, []);

  useEffect(() => {
    if (stepCounter === 12) {
      postClaim();
      setResidentPage(-1);
    }
  }, [stepCounter, postClaim, setResidentPage]);

  function pageState() {
    if (stepCounter === 0) {
      return (
        <>
          <ChoicePicker
            items={unitSelection}
            selected={selected}
            setSelected={inUnitonProperty}
          ></ChoicePicker>
        </>
      );
    } else if (stepCounter === 2) {
      //If in unit was selected
      return (
        <>
          <DropDownMenu
            options={selected === 0 ? inUnit : onProperty}
          ></DropDownMenu>
        </>
      );
      //If on propert was selected
    } else if (stepCounter === 4) {
      return (
        <>
          <LargeInput></LargeInput>
        </>
      );
    } else if (stepCounter === 6) {
      return (
        <>
          <ChoicePicker
            items={maintenanceOptions}
            setSelected={setMaintenance}
            selected={maintenanceSelection}
          ></ChoicePicker>
        </>
      );
    } else if (stepCounter === 8) {
      return (
        <>
          <LargeButton text={"Add photo from device"}></LargeButton>
          <LargeButton text={"Add photo from device"}></LargeButton>
        </>
      );
    } else if (stepCounter === 10) {
      return (
        <div className="report-container">
          {report.map((text, index) => {
            return (
              <p className={index % 2 === 0 ? "normalText" : "noBoldText"}>
                {text}
              </p>
            );
          })}
        </div>
      );
    } else if (stepCounter === 12) {
      setResidentPage(-1);
      return <></>;
    }
  }

  return (
    <>
      <div className="">
        <HeaderText w1Text={progress}></HeaderText>
      </div>
      <HeaderText w1Text={w1Text} w2Text={w2Text} bText={bText}></HeaderText>
      {pageState()}

      <div className="bottom-container">
        <>
          <UserButton
            text={"Back"}
            green={false}
            onClick={() => {
              if (stepCounter > 0) {
                nextStep(false);
              } else {
                setResidentPage(-1);
              }
            }}
          ></UserButton>

          <UserButton
            text={stepCounter !== 10 ? "Next" : "Submit"}
            green={true}
            onClick={() => {
              nextStep(true);
            }}
          ></UserButton>
        </>
      </div>
    </>
  );
};
export default CreateClaims;
