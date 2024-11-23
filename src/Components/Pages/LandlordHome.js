import { useContext, useEffect} from "react";
import { appModel } from "../../Models/appModel";
import HeaderText from "../Elements/HeaderText";
import PurpleBox from "../Elements/PurpleBox";
const LandlordHome = () =>{
    const { residentForename, setHeaderText, bText, w2Text } =
    useContext(appModel);
    useEffect(() => {
        
        setHeaderText(["Hello", "Keenan", ", welcome back!"]);
        
      }, [bText, w2Text, setHeaderText]);

    
    function mRequests(){
        return(
            <>
                <PurpleBox w1Text = "Here's what" bText= "currently" w2Text="needs your attention:"></PurpleBox>
            </>
        )
    }
    return mRequests();
};
export default LandlordHome;