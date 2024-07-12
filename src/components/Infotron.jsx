import "./Infotron.css";

function Infotron() {
  return (
    <div className="container">
      <ul>
        <li className="card-container">
          <h6 className="card-data">IP Address</h6>
          <p className="card-data-content">192.212.174.101</p>
        </li>
        <li className="split-line"></li>
        <li className="card-container">
          <h6 className="card-data">Location</h6>
          <p className="card-data-content">Brooklyn, NY</p>
          <p className="card-data-content">10001</p>
        </li>
        <li className="split-line"></li>
        <li className="card-container">
          <h6 className="card-data">Timezone</h6>
          <p className="card-data-content">UTC -05:00</p>
        </li>
        <li className="split-line"></li>
        <li className="card-container">
          <h6 className="card-data">ISP</h6>
          <p className="card-data-content">SpaceX Starlink</p>
        </li>
      </ul>
    </div>
  );
}

export default Infotron;
