import { calculateInvestmentResults, formatter, formatterINR } from "../util/investment.js";

export default function Results({ data }) {
  const annualData = calculateInvestmentResults(data);
  const initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;
  
  
  return (
      <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {annualData.map((row) => {
            const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
            const totalAmountInvested = row.valueEndOfYear - totalInterest;
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatterINR.format(row.valueEndOfYear)}</td>
              <td>{formatterINR.format(row.interest)}</td>
              <td>{formatterINR.format(totalInterest)}</td>
              <td>{formatterINR.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
