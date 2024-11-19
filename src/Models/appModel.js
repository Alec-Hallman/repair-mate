import { createContext, useState } from "react";

export const appModel = createContext(null);

const InfoManager = ({ children }) => {
  var [page, setPage] = useState(0); //Declare a global variable Page
  var [accountId, setId] = useState(""); //declare variable for account Id
  const [resident, setResident] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const changePage = (newPage) => {
    //Create a function to change page
    setPage(newPage); //Actually change the page
  };
  return (
    <appModel.Provider
      value={{
        page,
        accountId,
        resident,
        signedIn,
        setPage,
        setId,
        setResident,
        setSignedIn,
      }}
    >
      {children}
    </appModel.Provider>
  );
};
export default InfoManager;
