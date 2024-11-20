import { useContext, useEffect, useState } from "react";
import { appModel } from "../../Models/appModel";
import HeaderText from "../Elements/HeaderText";
import UserButton from "../Elements/Button";

const PAGE_STATES = {
  INITIAL: -1,
  CREATECLAIM: 0,
  SEECLAIMS: 1,
};

const ResidentHome = () => {
  const { residentForename, setHeaderText, bText, w2Text } =
    useContext(appModel);
  const [pageState, setPageState] = useState(PAGE_STATES.INITIAL);

  useEffect(() => {
    if (pageState === PAGE_STATES.INITIAL) {
      setHeaderText(["Hello", "Alec", ", welcome back!"]);
    }
  }, [bText, w2Text, setHeaderText]);

  function showPage() {
    if (pageState === -1) {
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
              setPageState(PAGE_STATES.CREATECLAIM);
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
              setPageState(PAGE_STATES.SEECLAIMS);
            }}
          ></UserButton>
        </>
      );
    } else if (pageState === PAGE_STATES.CREATECLAIM) {
      return (
        <>
          <p>Create a claim page</p>
        </>
      );
    } else if (pageState === PAGE_STATES.SEECLAIMS) {
      return (
        <>
          <p>See claims</p>
        </>
      );
    }
  }
  return <>{showPage()}</>;
};
export default ResidentHome;
