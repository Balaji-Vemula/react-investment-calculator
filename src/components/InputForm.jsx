export default function InputForm({ userInput, onChangeData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeData("initialInvestment", event.target.value)
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
              onChangeData("annualInvestment", event.target.value)
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
              onChangeData("expectedReturn", event.target.value)
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
            onChange={(event) => onChangeData("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
