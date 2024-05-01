import arrow from "./assets/icon-arrow.svg";
import background from "./assets/pattern-bg-desktop.png";

// https://geo.ipify.org/api/v2/country,city?apiKey=at_ddQCO1r3qBbABmNPBUzktIooTKUvh&ipAddress=8.8.8.8
function App() {
  return (
    <>
      <main>
        <section>
          <div className="bg-container">
            <img src={background} alt="background-image" className="bg-img" />
          </div>
          <h1 className="main-title">IP Address Tracker</h1>
          <form action={""}>
            <input
              placeholder="Search for any IP address or domain"
              type="text"
              id="ipaddress"
              name="ipaddress"
              required
            />
            <button type="submit">
              <img src={arrow} alt="arrow-icon" />
            </button>
          </form>
        </section>
        <section>
          <span>IP Address</span>
          <span>Location</span>
          <span>Timezone</span>
          <span>UTC /* add offset value dynamically using the API */</span>
          <span>ISP</span>
        </section>
      </main>
      <footer>
        <article className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </article>
      </footer>
    </>
  );
}

export default App;
