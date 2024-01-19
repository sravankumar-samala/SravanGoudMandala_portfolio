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

export default function About() {
  return (
    <section id="about">
      <h1 className="section-heading">About</h1>
      <div className="about-content-container">
        <div className="bio-container">
          <h2>Quick Bio</h2>
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
      </div>
    </section>
  );
}
