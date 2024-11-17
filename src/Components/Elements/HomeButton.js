import "../../Styles/homeButton.css";
const HomeButton = () => {
  return (
    <>
      <div>
        <img
          className="homeButton"
          src="repair_logo.png"
          alt="logo"
          onClick={() => {
            console.log("button has been clicked");
          }}
        ></img>
      </div>
    </>
  );
};
export default HomeButton;
