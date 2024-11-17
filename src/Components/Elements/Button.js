const UserButton = ({ text, green, onClick }) => {
  return (
    <>
      <button className={green ? "greenButton" : "redButton"} onClick={onClick}>
        {text}
      </button>
    </>
  );
};
export default UserButton;
