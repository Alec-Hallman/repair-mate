import HeaderText from "./HeaderText";
import InputField from "./InputField";
import "../../Styles/LoginField.css";
//import"../../Styles/Input.css";

const LoginField = () =>{
    return(
        <div>
            
            <HeaderText w1Text={"Please enter Email Address:"}></HeaderText>
            <InputField></InputField>
            
            
            <HeaderText w1Text={"Please enter your Password:"}></HeaderText>
            <InputField></InputField>
            
        </div>

    );

};
export default LoginField;