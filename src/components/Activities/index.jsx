import "./index.css";

const servicesData = [
  "Worked as a social activist in Domadugu village.",
  "Advocated for solutions to various issues, protested against government decisions, and sought justice for the people.",
  "Engaged in programs like Palle Pragati, Harithaharam, and Swachh Bharath.",
  "Organized blood camps, medical camps, and distributed essentials.",
  "Assisted financially and helped the poor in the village.",
];

const covidContributionsData = [
  "Provided essential goods and financial support during the Covid-19 pandemic.",
  "Distributed food, rice bags, vegetables, and medicine to migrants and Covid victims.",
  "Supported the unemployed and those affected by the lockdown.",
  "Conducted awareness programs and seminars on Covid-19 precautions and vaccination.",
  "Distributed fruits, vegetables, and organized annadhanam programs for frontline workers.",
  "Organized awareness programs during the Covid second wave.",
];

export default function Activities() {
  return (
    <section id="activities">
      <h1 className="section-heading">Activities</h1>
      <div className="activities-container">
        <div className="services-container">
          <h2 className="section-sub-heading">Social Services</h2>
          <div className="services-content">
            <div className="content-img-container">
              <img
                src="https://res.cloudinary.com/dwddin0nz/image/upload/v1705670072/Sravangoud-distributing-in-school_cbmdgh.jpg"
                alt="social services and activies"
              />
            </div>
            <div className="content-container">
              {servicesData.map((eachService, i) => (
                <p key={i + 1}>&#8658; {eachService}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="services-container">
          <h2 className="section-sub-heading">Covid Crisis Contributions:</h2>
          <div className="services-content">
            <div className="content-img-container">
              <img
                src="https://res.cloudinary.com/dwddin0nz/image/upload/v1705669499/Sravangound-villageDevelopment_bnroex.jpg"
                alt="Distributing in school"
              />
            </div>
            <div className="content-container">
              {covidContributionsData.map((eachData, i) => (
                <p key={i + 1}>&#8658; {eachData}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
