import { useState } from "react";

import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 30000,
    annualInvestment: 3000,
    expectedReturn: 6,
    duration: 3,
  });

  const inputIsValid = userInput.duration >0;

  const handleInputChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
      // Here we are using square brackets to fetch the string in the variable inputIdentifier
      //  or else using directly the variable without square brackets creates the literal varaible name
      //  as a key not takes the string stored in it for the key
    }));
  };
  return (
    <>
      <Header />
      <InputForm userInput={userInput} onChangeData={handleInputChange} />
      {inputIsValid && <Results data={userInput}/>}
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
    </>
  );
}

export default App;
