import "../../Styles/Input.css";

const InputField = ({ setInputValue }) => {
  return (
    <>
      <input
        className="input"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      ></input>
    </>
  );
};
export default InputField;
