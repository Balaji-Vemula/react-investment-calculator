import logo from "../../public/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="" />
      <h1 id="header">Investment Calculator</h1>
    </header>
  );
}
