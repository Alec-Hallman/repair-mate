import "../../Styles/homeButton.css";
import SignOut from "./SignOut";
const HomeButton = () => {
  return (
    <>
      <div className="home-container">
        <img
          className="homeButton"
          src="repair_logo.png"
          alt="logo"
          onClick={() => {
            console.log("button has been clicked");
          }}
        ></img>
        <img
          alt="logoText"
          src="./ResuMateText.png"
          className="logo-text"
        ></img>
        <SignOut></SignOut>
      </div>
    </>
  );
};
export default HomeButton;
