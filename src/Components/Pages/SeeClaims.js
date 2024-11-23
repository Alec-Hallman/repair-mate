import { useContext, useEffect } from "react";
import PurpleBox from "../Elements/PurpleBox";
import { appModel } from "../../Models/appModel";

const SeeClaims = () => {
  const { setHeaderText } = useContext(appModel);
  useEffect(() => {
    setHeaderText(["Here are your", "past", "maintenance requests"]);
  });
  return (
    <>
      <PurpleBox></PurpleBox>
    </>
  );
};
export default SeeClaims;
