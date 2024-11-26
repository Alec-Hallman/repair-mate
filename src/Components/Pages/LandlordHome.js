import { useContext, useEffect, useState } from "react";
import { appModel } from "../../Models/appModel";
import HeaderText from "../Elements/HeaderText";
import PurpleBox from "../Elements/PurpleBox";
import axios from "axios";
const LandlordHome = () => {
  const {
    setHeaderText,
    bText,
    w2Text,
    userForename,
    userClaims,
    propertyId,
    setUserClaims,
  } = useContext(appModel);
  var [refreshClicked, setRefreashed] = useState(false);
  const reloadPage = () => {
    setRefreashed(!refreshClicked);
    setUserClaims({});
  };
  useEffect(() => {
    setHeaderText(["Hello", userForename, ", welcome back!"]);
  }, [bText, w2Text, setHeaderText]);
  useEffect(() => {
    //console.log(propertyId);
    const fetchData = async () => {
      const apiUrl =
        "https://5a44gaw8n6.execute-api.us-east-2.amazonaws.com/prod/getLandlordClaims";
      try {
        const response = await axios.get(apiUrl, {
          params: {
            propertyId: propertyId,
            //userEmail: email,
          },
        });
        console.log(response);
        const parsed = JSON.parse(response.data.body);
        setUserClaims(parsed.userData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [refreshClicked]);

  function mRequests() {
    return (
      <>
        <PurpleBox
          userClaims={userClaims}
          w1Text="Here's what"
          bText="currently"
          w2Text="needs your attention:"
          resetLandlord={reloadPage}
        ></PurpleBox>
      </>
    );
  }
  return mRequests();
};
export default LandlordHome;
