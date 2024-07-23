import { SearchBar, Stats, Footer } from "./components";

// https://geo.ipify.org/api/v2/country,city?apiKey=at_ddQCO1r3qBbABmNPBUzktIooTKUvh&ipAddress=8.8.8.8
function App() {
  return (
    <>
      <main>
        <section className="flex flex-col h-screen relative">
          <SearchBar />
          <Stats />
        </section>
        <section className="data-section"></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
