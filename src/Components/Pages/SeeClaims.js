import { useContext, useEffect } from "react";
import PurpleBox from "../Elements/PurpleBox";
import { appModel } from "../../Models/appModel";
import { claimModel } from "../../Models/CreateClaimModel";
import UserButton from "../Elements/Button";

const SeeClaims = () => {
  const { setHeaderText, userClaims, setResidentPage } = useContext(appModel);
  const { getUserClaims } = useContext(claimModel);
  useEffect(() => {
    setHeaderText(["Here are your", "past", "maintenance requests"]);
    getUserClaims();
  }, []);

  return (
    <>
      <PurpleBox userClaims={userClaims}></PurpleBox>
    </>
  );
};
export default SeeClaims;
