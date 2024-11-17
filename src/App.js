import "./Styles/homeStyles.css";
import "./App.css";
import HomeButton from "./Components/Elements/HomeButton";
import HeaderText from "./Components/Elements/HeaderText";
import SigninPage from "./Components/Pages/SigninPage";
import UserButton from "./Components/Elements/Button";

function App() {
  return (
    <div className="app">
      <div className="header-container">
        <HomeButton></HomeButton>
      </div>
      <HeaderText text={"this is a header Text"} large={true}></HeaderText>
      <SigninPage></SigninPage>
    </div>
  );
}

export default App;
