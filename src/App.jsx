import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Activities from "./components/Activities";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <About />
      <section id="contact">
        <h1 className="section-heading">Contact</h1>
      </section>
      <section id="career">
        <h1 className="section-heading">Career</h1>
      </section>
      <Activities />
      <section id="gallary">
        <h1 className="section-heading">Gallary</h1>
      </section>
    </div>
  );
}

export default App;
