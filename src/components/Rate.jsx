import star from "../asset/icon-star.svg";
import "./Rate.css";

export default function Rate(props) {
  const buttons = [1, 2, 3, 4, 5];

  return (
    <div className="rate-div">
      <img src={star} alt="star" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div>
        {buttons.map((item) => {
          return (
            <button
              onClick={() => {
                props.setRate(item);
              }}
              key={item}
              className={props.rate === item ? "active" : ""}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button
        className="submit"
        onClick={() => {
          if (props.rate) {
            props.setSubmit(true);
          }
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
