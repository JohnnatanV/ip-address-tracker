import "./Form.css";
import arrow from "./assets/icon-arrow.svg";

function Form() {
  return (
    <form action={""}>
      <input
        className="search-box"
        placeholder="Search for any IP address or domain"
        type="text"
        id="ipaddress"
        name="ipaddress"
        required
      />
      <button className="search-box-btn" type="submit">
        <img src={arrow} alt="arrow-icon" />
      </button>
    </form>
  );
}

export default Form;
