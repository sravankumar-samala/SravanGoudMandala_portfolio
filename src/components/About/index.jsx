// import { v4 as uuid } from "uuid";
import "./index.css";

const bioDetailsArr = [
  { Name: "Mandala Sravan Goud" },
  { "Date of Birth": "04th February 1993" },
  { Father: "Mr. Srinivas" },
  { Mother: "Mrs. Veeramani" },
  { Qualification: "Graduated (Degree) from Gouthami degree college" },
  { Professional: "Business (Restaurant)" },
  { "Present Designation": "Mandal Youth Vice President" },
  { "Religion & Nationality": "Hindu - Indian" },
  {
    "Permanent Address":
      "H-No: 2-88, Village: Domadugu, Mandal: Gummadidala, District: Sangareddy, State: Telangana, Zip Code: 502313",
  },
];

const entryIntoINCData = [
  "Entered mainstream politics in 2011 with the Indian National Congress (INC) party.",
  "Began political career as a Member of the Congress Party.",
  "Recognized for dedication as a social and party worker.",
  "Currently serving as the Mandal Youth Vice President of Gummadidala from the Congress party.",
];

const nsuiAssociationData = [
  "Joined the National Students’ Union of India (NSUI) in 2011.",
  "NSUI is the student wing of the Indian National Congress, founded by Indira Gandhi.",
  "Actively involved in student issues such as fee reimbursement, scholarships, job notifications, bus facilities, and college infrastructure.",
  "Appointed as District Secretary of Sangareddy in Telangana from 2011 to 2013.",
];

export default function About() {
  return (
    <section id="about">
      <h1 className="section-heading">About</h1>
      <div className="about-content-container">
        <div className="bio-container">
          <h2 className="section-sub-heading">Quick Bio</h2>
          <div className="bio-content-wrapper">
            <div className="bio-img-container">
              <img
                src="https://res.cloudinary.com/dwddin0nz/image/upload/v1705637919/Sravangoudmandala-young_h3opld.png"
                alt="bio"
              />
            </div>
            <div className="table-container">
              <table className="bio-content-table" cellPadding={7}>
                <tbody>
                  {bioDetailsArr.map((eachDetail) => {
                    const detailName = Object.keys(eachDetail)[0];
                    const detailInfo = eachDetail[detailName];
                    return (
                      <tr className="bio-detail-row" key={detailName}>
                        <th>{detailName}</th>
                        <td>:</td>
                        <td>{detailInfo}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="services-container">
          <h2 className="section-sub-heading">
            Entry Into INC (Indian National Congress)
          </h2>
          <div className="services-content">
            <div className="content-img-container">
              <img
                src="https://res.cloudinary.com/dwddin0nz/image/upload/v1705752346/Entry-into-INC-SravanGoud_axjk1u.jpg"
                alt="Entry into INC"
              />
            </div>
            <div className="content-container">
              {entryIntoINCData.map((eachService, i) => (
                <p key={i + 1}>&#8658; {eachService}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="services-container">
          <h2 className="section-sub-heading">
            Association with NSUI (2011 - 2013)
          </h2>
          <div className="services-content">
            <div className="content-img-container">
              <img
                src="https://res.cloudinary.com/dwddin0nz/image/upload/v1705752825/NSUI-SravanGoud_l96vew.jpg"
                alt="Association with NSUI"
              />
            </div>
            <div className="content-container">
              {nsuiAssociationData.map((eachService, i) => (
                <p key={i + 1}>&#8658; {eachService}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
