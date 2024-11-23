import "../../Styles/homeStyles.css";
const HeaderText = ({ w1Text, bText, w2Text, large, style }) => {
  return (
    <>
      <div className="header-container" style={style}>
        <p className={large ? "l_headerText" : "s_headerText"}>{w1Text}</p>
        <p className={large ? "bl_headerText" : "bs_headerText"}>{bText}</p>
        <p className={large ? "l_headerText" : "s_headerText"}>{w2Text}</p>
      </div>
    </>
  );
};
export default HeaderText;
