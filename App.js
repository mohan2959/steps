import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function hnadleClicPRe() {
    if (step > 1) setStep(step - 1);
  }
  function hnadleClicNExt() {
    if (step < 3) setStep(step + 1);
  }
  return (
    <div>
      <button className="close " onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#Fff" }}
              onClick={hnadleClicPRe}
              className="previous"
            >
              previous
            </button>
            <button
              style={{ background: "green", color: "#fff" }}
              onClick={hnadleClicNExt}
              className="Next"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
