import { createContext, useState } from "react";

export const signInModel = createContext(null);

const SignInManager = ({ children }) => {
  var [page, setPage] = useState(0); //Declare a global variable Page
  var [accountId, setId] = useState(""); //declare variable for account Id
  const changePage = (newPage) => {
    //Create a function to change page
    setPage(newPage); //Actually change the page
  };
  return (
    <signInModel.Provider //return the provider
      value={{
        //give all values and functions above
        page,
        accountId,
        changePage,
      }}
    >
      {children}
    </signInModel.Provider>
  );
};
export default SignInManager;
