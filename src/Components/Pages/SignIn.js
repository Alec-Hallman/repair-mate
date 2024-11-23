
import LoginField from "../Elements/LoginField";
import "../../Styles/Input.css";
import UserButton from "../Elements/Button";
import SigninPage from "./SigninPage";
const SignIn = () => {
    
    let pick = 0
    function click(){
        pick = 1;
    }
    function back(){
        pick = -1;
        console.log(pick)
    }

    function sign_in(){
        return(
            <>
            <LoginField></LoginField>
            <UserButton
            text = "Done"
            green = {true}
            onClick={click}
            ></UserButton>

            <UserButton
            text = "Go Back"
            green = {false}
            onClick = {back}
            ></UserButton>

            

            
            </>
        );
    }
    function renderPage(){
        if (pick === 0) return <>{sign_in()}</>;
        if (pick === 1) return<></> /*next page*/;
        if (pick === -1) return <SigninPage/>;
            
    }
    return (
        <>
          <>{renderPage()}</>
        </>
      );
};
export default SignIn;