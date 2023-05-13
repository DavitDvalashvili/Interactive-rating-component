import "./Result.css";
import illustration from "../asset/illustration-thank-you.svg";

export default function Result(props) {
  return (
    <div className="result-div">
      <img src={illustration} alt="illustration" />
      <h3 className="result">You selected {props.rate} out of 5</h3>
      <h1 className="thank">Thank you!</h1>
      <p className="result-paragraph">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
