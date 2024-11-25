import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

import { appModel } from "./appModel";

export const claimModel = createContext(null);

const ClaimModel = ({ children }) => {
  const { email, propertyId, unitNumber, setUserClaims, userForename } =
    useContext(appModel);
  const postClaim = async () => {
    const apiUrl =
      "https://5a44gaw8n6.execute-api.us-east-2.amazonaws.com/prod/createClaims";
    const claimData = {
      userEmail: email,
      propertyId: propertyId,
      unitNumber: unitNumber,
      description: description,
      location: report[1],
      maintenance: report[7],
      problem: report[3],
      forename: userForename,
    };
    console.log(
      "Sending this info to database:",
      email,
      propertyId,
      unitNumber,
      description,
      report[1],
      report[7],
      report[3]
    );
    try {
      const responce = await axios.post(apiUrl, claimData);
      console.log("Success! I think: ", responce);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserClaims = async () => {
    const apiUrl =
      "https://5a44gaw8n6.execute-api.us-east-2.amazonaws.com/prod/getUserClaims?userEmail=hallman.alec13@gmail.com";

    try {
      // Send the email as a query parameter
      const response = await axios.get(apiUrl, {
        params: {
          userEmail: email,
        },
      });
      const parsed = JSON.parse(response.data.body);
      setUserClaims(parsed.userData); //sets user claims to a JSOn object
    } catch (error) {
      console.log("Error fetching user claims:", error.message);
    }
  };

  const onProperty = [
    "Elevators",
    "Garbage Disposal",
    "Damaged Property",
    "Other",
  ];
  const inUnit = ["Plumbing", "Internet", "Climate Control", "Power", "Other"];
  const [progress, setProgress] = useState([
    "0",
    "--",
    "0",
    "--",
    "0",
    "--",
    "0",
    "--",
    "0",
    "-->Done!",
  ]);
  const maintenanceOptions = [
    "Yes, enter anytime",
    "No, I would like to be there",
    "Please call or email me before entering",
  ];
  const w1TextOptions = ["", "", "Please", "", ""];
  const bTextOptions = [
    "Where",
    "What",
    "describe",
    "If required",
    "(Optional)",
  ];
  const w2TextOptions = [
    "are you having the issue?",
    "type of problem are you having?",
    "your issue",
    "can maintenance enter your unit?",
    "If possible, please upload a photo of the issue",
  ];
  const [w1Text, setW1Text] = useState(w1TextOptions[0]);
  const [bText, setBText] = useState(bTextOptions[0]);
  const [w2Text, setW2Text] = useState(w2TextOptions[0]);
  const [selected, setSelected] = useState(-1);
  const [maintenanceSelection, setMaintenanceSelection] = useState(-1);
  var [stepCounter, setCounter] = useState(0);
  const [inUnitState, setUnitState] = useState("");
  const [description, setDescription] = useState("");
  const [report, setReport] = useState([
    "Where is the issue: ",
    "",
    "Type of problem: ",
    "",
    "description",
    "",
    "Maintenance preference: ",
    "",
    "Photo: ",
    "",
  ]);
  const unitSelection = ["In unit", "On property"];
  const [problemSelected, setProblemSelected] = useState(-1);
  const nextStep = (forward) => {
    //console.log("Next step triggered", progress, stepCounter);
    if (forward) {
      //move to the next page
      const updatedProgress = [...progress];
      updatedProgress[stepCounter] = "✅";
      setProgress(updatedProgress);
      setCounter((stepCounter += 2));
    } else {
      // go back
      setCounter((stepCounter -= 2)); // change the page state number
      const updatedProgress = [...progress]; //update the step string
      updatedProgress[stepCounter] = "0";
      setProgress(updatedProgress);
    }
    setBText(bTextOptions[stepCounter / 2]);
    setW1Text(w1TextOptions[stepCounter / 2]);
    setW2Text(w2TextOptions[stepCounter / 2]);
  };

  const inUnitonProperty = (index) => {
    setSelected(index);
  };
  const generateReport = () => {
    const newReport = [...report];
    newReport[1] = unitSelection[selected];
    if (selected === 0) {
      newReport[3] = inUnit[problemSelected];
    } else {
      console.log(selected);
      newReport[3] = onProperty[problemSelected];
    }
    newReport[5] = description;
    newReport[7] = maintenanceOptions[maintenanceSelection];
    setReport(newReport);
  };

  useEffect(() => {
    // Regenerate the report whenever maintenanceSelection changes
    generateReport();
  }, [maintenanceSelection]);

  const setMaintenance = (value) => {
    setMaintenanceSelection(value);
  };

  return (
    <claimModel.Provider
      value={{
        maintenanceSelection,
        unitSelection,
        w1Text,
        w2Text,
        bText,
        inUnit,
        onProperty,
        stepCounter,
        progress,
        selected,
        maintenanceOptions,
        report,
        setMaintenance,
        setProgress,
        setCounter,
        nextStep,
        setSelected,
        inUnitonProperty,
        setProblemSelected,
        setDescription,
        postClaim,
        getUserClaims,
      }}
    >
      {children}
    </claimModel.Provider>
  );
};
export default ClaimModel;
