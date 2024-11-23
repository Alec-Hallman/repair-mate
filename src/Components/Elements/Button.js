import "../../Styles/Button.css";
const UserButton = ({ text, green, onClick }) => {
  const handleClick = () => {
    console.log(`Button clicked: ${text}`); // Log the button text or any desired information
    if (onClick) {
      onClick(); // Call the passed onClick function, if any
    }
  };

  return (
    <>
      <button className={green ? "greenButton" : "redButton"} onClick={handleClick}>
        {text}
      </button>
    </>
  );
};
export default UserButton;
