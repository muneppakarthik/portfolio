import "./page.scss";
import AboutDeveloperDetails from "@/components/AboutDeveloperDetails/AboutDeveloperDetails";
import Banner from "@/components/Banner/Banner";
import MyServices from "@/components/MyServices/MyServices";
import ContactInformation from "@/components/ContactInformation/ContactInformation";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import WorkEducationHistory from "@/components/WorkEducationHistory/WorkEducationHistory";
import AboutMe from "@/components/AboutMe/AboutMe";

export default function Home() {
  return (
    <div className="home-container">
      <Banner />
      <AboutMe />
      <AboutDeveloperDetails />
      <MyServices />
      <ContactInformation />
      <GetInTouch />
      <NewsLetter />
      <WorkEducationHistory />
    </div>
  );
}
