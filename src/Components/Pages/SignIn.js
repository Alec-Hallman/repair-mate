
import LoginField from "../Elements/LoginField";
import "../../Styles/Input.css";
import UserButton from "../Elements/Button";
const SignIn = () => {
    
    let pick = 1
    function click(){
        pick = 0;
    }

    function sign_in(){
        return(
            <>
            <LoginField></LoginField>
            <UserButton
            text = "Done"
            green = {true}
            onClick={click}
            >
            
            </UserButton>
            </>

            <>
            <UserButton
            text = "Go Back"
            green = {false}
            onClick = {return(SignInPage)}
            >
                
            </UserButton>
            </>
        );
    }
    function renderPage(){
        if (pick === 1) return <>{sign_in()}</>;
        if (pick === 0) return<></> /*next page*/
    }
    return (
        <>
          <>{renderPage()}</>
        </>
      );
};
export default SignIn;