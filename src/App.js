import "./Styles/homeStyles.css";
import "./App.css";
import HomeButton from "./Components/Elements/HomeButton";
import HeaderText from "./Components/Elements/HeaderText";
import SigninPage from "./Components/Pages/SigninPage";
import UserButton from "./Components/Elements/Button";
import SignInManager, { SignInModel } from "./Models/SignInModel";

function App() {
  return (
    <div className="app">
      <div className="header-container">
        <HomeButton></HomeButton>
      </div>
      <HeaderText text={"this is a header Text"} large={true}></HeaderText>
      <div className="center-container">
        <SignInManager>
          {/** Wrap the page in the require module to pass it the required values*/}
          <SigninPage></SigninPage>
        </SignInManager>
      </div>
    </div>
  );
}

export default App;
