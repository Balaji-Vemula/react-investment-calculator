import { useState } from "react";

export default function InputForm() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 30000,
    annualInvestment: 3000,
    expectedReturn: 6,
    duration: 3,
  });

  const handleInputChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: newValue,
      // Here we are using square brackets to fetch the string in the variable inputIdentifier
      //  or else using directly the variable without square brackets creates the literal varaible name
      //  as a key not takes the string stored in it for the key
    }));
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleInputChange("initialInvestment", event.target.value)
            }
            id="initialInvestment"
            required
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleInputChange("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleInputChange("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) =>
              handleInputChange("duration", event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
