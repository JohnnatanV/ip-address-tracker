import Title from "./Title";
import Form from "./Form";
import Pattern from "./Pattern";

// https://geo.ipify.org/api/v2/country,city?apiKey=at_ddQCO1r3qBbABmNPBUzktIooTKUvh&ipAddress=8.8.8.8
function App() {
  return (
    <>
      <main>
        <section>
          <Pattern />
          <Title />
          <Form />
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
