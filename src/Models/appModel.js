import { createContext, useState } from "react";

export const appModel = createContext(null);

const InfoManager = ({ children }) => {
  var [page, setPage] = useState(0); //Declare a global variable Page
  var [accountId, setId] = useState(""); //declare variable for account Id
  const [resident, setResident] = useState(true);
  const [signedIn, setSignedIn] = useState(false);
  const [userForename, setForename] = useState("Alec");
  const [[w1Text, bText, w2Text], setHeaderText] = useState([
    "Hey",
    "...",
    " wait, who are you?",
  ]);
  const changePage = (newPage) => {
    //Create a function to change page
    setPage(newPage); //Actually change the page
  };
  return (
    <appModel.Provider
      value={{
        w1Text,
        bText,
        w2Text,
        page,
        accountId,
        resident,
        signedIn,
        setPage,
        setId,
        setResident,
        setSignedIn,
        setHeaderText,
      }}
    >
      {children}
    </appModel.Provider>
  );
};
export default InfoManager;
