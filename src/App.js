import "./Styles/homeStyles.css";
import "./App.css";
import HomeButton from "./Components/Elements/HomeButton";
import HeaderText from "./Components/Elements/HeaderText";
import SigninPage from "./Components/Pages/SigninPage";
import UserButton from "./Components/Elements/Button";
import SignInManager, { SignInModel } from "./Models/SignInModel";
import InfoManager from "./Models/appModel";
import Homepage from "./Components/Pages/HomePage";

function pageStates() {}

function App() {
  return (
    <InfoManager>
      <Homepage></Homepage>
    </InfoManager>
  );
}

export default App;
