import "./page.scss";
import AboutDeveloperDetails from "../components/aboutDeveloperDetails/AboutDeveloperDetails";
import Banner from "../components/banner/Banner";
import MyServices from "../components/myServices/MyServices";
import ContactInformation from "../components/contactInformation/ContactInformation";
import GetInTouch from "../components/getInTouch/GetInTouch";
import NewsLetter from "../components/newsLetter/NewsLetter";
import WorkEducationHistory from "../components/workEducationHistory/WorkEducationHistory";

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
