import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <About />
      <section id="career">
        <h1 className="section-heading">Career</h1>
      </section>
      <section id="contact">
        <h1 className="section-heading">Contact</h1>
      </section>
      <section id="activities">
        <h1 className="section-heading">Activities</h1>
      </section>
      <section id="gallary">
        <h1 className="section-heading">Gallary</h1>
      </section>
    </div>
  );
}

export default App;
