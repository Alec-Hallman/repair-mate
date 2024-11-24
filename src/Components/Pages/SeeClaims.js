import { useContext, useEffect } from "react";
import PurpleBox from "../Elements/PurpleBox";
import { appModel } from "../../Models/appModel";
import { claimModel } from "../../Models/CreateClaimModel";

const SeeClaims = () => {
  const { setHeaderText } = useContext(appModel);
  const { getUserClaims } = useContext(claimModel);
  useEffect(() => {
    setHeaderText(["Here are your", "past", "maintenance requests"]);
    getUserClaims();
  }, []);

  return (
    <>
      <PurpleBox></PurpleBox>
    </>
  );
};
export default SeeClaims;
