import "./Infotron.css";

function Infotron() {
  return (
    <div className="container">
      <ul>
        <li className="card-container">
          <span className="card-data">IP Address</span>
          <span className="card-data-content">192.212.174.101</span>
        </li>
        <li className="card-container">
          <span className="card-data">Location</span>
          <span className="card-data-content">Brookllyn, NY</span>
          <span className="card-data-content">10001</span>
        </li>
        <li className="card-container">
          <span className="card-data">Timezone</span>
          <span className="card-data-content">UTC -05:00</span>
        </li>
        <li className="card-container">
          <span className="card-data">ISP</span>
          <span className="card-data-content">SpaceX Starlink</span>
        </li>
      </ul>
    </div>
  );
}

export default Infotron;
