import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const appModel = createContext(null);

const InfoManager = ({ children }) => {
  var [page, setPage] = useState(0); //Declare a global variable Page
  var [accountId, setId] = useState(""); //declare variable for account Id
  const [signedIn, setSignedIn] = useState(false);
  const [userForename, setForename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resident, setResidentStatus] = useState("");
  const [selectedProblem, setProblem] = useState("");
  const [propertyId, setProperty] = useState("");
  const [unitNumber, setUnit] = useState("");
  const [residentPageState, setResidentPage] = useState(-1);
  const [[w1Text, bText, w2Text], setHeaderText] = useState([
    "Hey",
    "...",
    " wait, who are you?",
  ]);
  const [userClaims, setUserClaims] = useState({});

  useEffect(() => {
    setHeaderText(["Hey", "...", " wait, who are you?"]);
  }, [signedIn]);

  const postAccount = async () => {
    const apiUrl =
      "https://5a44gaw8n6.execute-api.us-east-2.amazonaws.com/prod/";
    const userData = {
      email: email,
      password: password,
      role: resident,
      foreName: userForename,
      unitNumber: unitNumber,
      phoneNumber: phoneNumber,
      propertyId: propertyId,
    };
    try {
      const responce = await axios.post(apiUrl, userData);
      console.log(responce.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUser = async () => {
    const apiUrl =
      "https://5a44gaw8n6.execute-api.us-east-2.amazonaws.com/prod/getUser";
    try {
      const responce = await axios.get(apiUrl, {
        params: {
          email: email,
          password: password,
        },
      });
      const simpleResponce = JSON.stringify(responce.data.body);
      const parsedRepsonce = JSON.parse(simpleResponce);
      const parseAgain = JSON.parse(parsedRepsonce);
      const userData = parseAgain.userData;
      console.log(parseAgain);
      setSignedIn(true);
      setPhoneNumber(userData.phoneNumber);
      setResidentStatus(userData.role);
      setUnit(userData.unitNumber);
      setForename(userData.foreName);
      setProperty(userData.propertyId);
      console.log(
        "PhoneNumber set to:",
        phoneNumber,
        "Property set to: ",
        propertyId,
        "received property: ",
        userData.propertyId
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const changePage = (newPage) => {
    //Create a function to change page
    setPage(newPage); //Actually change the page
  };
  return (
    <appModel.Provider
      value={{
        userClaims,
        unitNumber,
        phoneNumber,
        email,
        password,
        userForename,
        selectedProblem,
        w1Text,
        bText,
        w2Text,
        page,
        accountId,
        resident,
        signedIn,
        residentPageState,
        propertyId,
        setUserClaims,
        setUnit,
        setPhoneNumber,
        postAccount,
        setResidentPage,
        setProblem,
        setPage,
        setId,
        setEmail,
        setPassword,
        setForename,
        setResidentStatus,
        setSignedIn,
        setHeaderText,
        getUser,
        setProperty,
      }}
    >
      {children}
    </appModel.Provider>
  );
};
export default InfoManager;
