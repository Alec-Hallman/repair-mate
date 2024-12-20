import { useContext, useEffect, useState } from "react";
import { appModel } from "../../Models/appModel";
import HeaderText from "../Elements/HeaderText";
import UserButton from "../Elements/Button";
import CreateClaims from "./CreateClaims";
import ClaimModel, { claimModel } from "../../Models/CreateClaimModel";
import SeeClaims from "./SeeClaims";

const PAGE_STATES = {
  INITIAL: -1,
  CREATECLAIM: 0,
  SEECLAIMS: 1,
};

const ResidentHome = () => {
  const {
    userForename,
    setHeaderText,
    bText,
    w2Text,
    residentPageState,
    setResidentPage,
    signedIn,
  } = useContext(appModel);
  useEffect(() => {
    setResidentPage(-1);
  }, [signedIn]);
  const { resetCreateClaim } = useContext(claimModel);
  useEffect(() => {
    if (residentPageState === PAGE_STATES.INITIAL || residentPageState === -1) {
      setHeaderText(["Hello", userForename, ", welcome back!"]);
    }
  }, [bText, w2Text, setHeaderText, residentPageState]);
  function showPage() {
    if (residentPageState === -1) {
      return (
        <>
          <HeaderText
            w1Text={"Got a problem you want fixed?"}
            large={false}
          ></HeaderText>
          <UserButton
            green={true}
            text={"Create a claim"}
            onClick={() => {
              resetCreateClaim();
              setResidentPage(PAGE_STATES.CREATECLAIM);
            }}
          ></UserButton>
          <HeaderText
            w1Text={"Or do you want to see your past claims?"}
            large={false}
          ></HeaderText>
          <UserButton
            green={true}
            text={"See claims"}
            onClick={() => {
              setResidentPage(PAGE_STATES.SEECLAIMS);
            }}
          ></UserButton>
        </>
      );
    } else if (residentPageState === PAGE_STATES.CREATECLAIM) {
      return <CreateClaims></CreateClaims>;
    } else if (residentPageState === PAGE_STATES.SEECLAIMS) {
      return (
        <>
          <SeeClaims></SeeClaims>
        </>
      );
    }
  }
  return <>{showPage()}</>;
};
export default ResidentHome;
