import Header from "./components/Header";

function App() {
  return (
    <div className="app-container">
      <Header />
      <section id="home">
        <h1>Home</h1>
      </section>
      <section id="about">
        <h1>About</h1>
      </section>
      <section id="career">
        <h1>Career</h1>
      </section>
      <section id="contact">
        <h1>Contact</h1>
      </section>
      <section id="activities">
        <h1>Activities</h1>
      </section>
      <section id="gallary">
        <h1>Gallary</h1>
      </section>
    </div>
  );
}

export default App;
