import "./page.scss";
import AboutDeveloperDetails from "../components/AboutDeveloperDetails/AboutDeveloperDetails";
import Banner from "../components/Banner/Banner";
import MyServices from "../components/MyServices/MyServices";
import ContactInformation from "../components/ContactInformation/ContactInformation";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import WorkEducationHistory from "../components/WorkEducationHistory/WorkEducationHistory";

export default function Home() {
  return (
    <div className="home-container">
      <Banner />
      <AboutDeveloperDetails />
      <MyServices />
      <ContactInformation />
      <GetInTouch />
      <NewsLetter />
      <WorkEducationHistory />
    </div>
  );
}
