import "../../Styles/purpleBox.css";
import HeaderText from "./HeaderText";
const PurpleBox = ({ w1Text, bText, w2Text }) => {
  return (
    <div className="PurpleBox-container">
      <HeaderText
        large={true}
        w1Text={w1Text}
        bText={bText}
        w2Text={w2Text}
        style={{ position: "relative", top: "150px" }}
      ></HeaderText>
      <div className="PurpleBox"></div>
    </div>
  );
};
export default PurpleBox;
