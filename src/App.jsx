import Title from "./Title";
import Form from "./Form";
import Pattern from "./Pattern";
import Infotron from "./Infotron";
import Footer from "./Footer";

// https://geo.ipify.org/api/v2/country,city?apiKey=at_ddQCO1r3qBbABmNPBUzktIooTKUvh&ipAddress=8.8.8.8
function App() {
  return (
    <>
      <main>
        <section className="main-section">
          <Pattern />
          <Title />
          <Form />
        </section>
        <section className="data-section">
          <Infotron />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
