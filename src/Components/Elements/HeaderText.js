import "../../Styles/homeStyles.css";
const HeaderText = ({ text, large }) => {
  return (
    <>
      <div>
        <p className={large ? "l_headerText" : "s_headerText"}>{text}</p>
      </div>
    </>
  );
};
export default HeaderText;
