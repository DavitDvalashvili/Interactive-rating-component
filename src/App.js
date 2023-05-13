import "./App.css";
import { useState } from "react";
import Rate from "./components/Rate.jsx";
import Result from "./components/Result.jsx";

export default function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState(null);

  return (
    <div className="App">
      {submit ? (
        <Result rate={rate} />
      ) : (
        <Rate setSubmit={setSubmit} rate={rate} setRate={setRate} />
      )}
    </div>
  );
}
