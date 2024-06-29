import React, { useState } from "react";
import "./PasswordGenerator.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import FloatingButton from "../../FloatingButton";

export default function PasswordGenerator() {
  const [length, setLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const getRandomLower = () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  const getRandomUpper = () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  const getRandomNumber = () =>
    String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  const getRandomSymbol = () => {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  const generatePassword = (lower, upper, number, symbol, length) => {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    );

    if (typesCount === 0) {
      return "";
    }

    for (let i = 0; i < length; i += typesCount) {
      for (let j = 0; j < typesArr.length; j++) {
        const funcName = Object.keys(typesArr[j])[0];
        generatedPassword += randomFunc[funcName]();
      }
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
  };

  const handleGeneratePassword = () => {
    const hasLower = includeLowercase;
    const hasUpper = includeUppercase;
    const hasNumber = includeNumbers;
    const hasSymbol = includeSymbols;

    setPassword(
      generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
    );
  };

  const handleCopyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    }
  };

  return (
    <section id="31" className="section-PasswordGenerator">
      <div className="container-day31">
        <FloatingButton
          day="31"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day31"
          position="left"
        />
        <h3 className="h3-day31">Password Generator</h3>
        <div className="result-container-day31">
          <span className="result">{password}</span>
          <button
            className="btn-day31 btn-copy"
            onClick={handleCopyToClipboard}>
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
        <div className="settings-day31">
          <div className="setting">
            <label>Password Length</label>
            <input
              type="number"
              min="4"
              max="20"
              value={length}
              onChange={(e) => setLength(+e.target.value)}
            />
          </div>
          <div className="setting">
            <label>Include uppercase letters</label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
          </div>
          <div className="setting">
            <label>Include lowercase letters</label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
          </div>
          <div className="setting">
            <label>Include numbers</label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          </div>
          <div className="setting">
            <label>Include symbols</label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>
        </div>
        <button
          className="btn-day31 btn-generate"
          onClick={handleGeneratePassword}>
          Generate Password
        </button>
      </div>
    </section>
  );
}
