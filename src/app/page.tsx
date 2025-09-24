import "./page.scss";
import AboutDeveloperDetails from "@/components/about-developer-details/AboutDeveloperDetails";
import Banner from "@/components/banner/banner";
import MyServices from "@/components/myServices/MyServices";
import ContactInformation from "@/components/ContactInformation/ContactInformation";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <div className="home-container">
      <Banner />
      <AboutDeveloperDetails />
      <MyServices />
      <ContactInformation />
      <GetInTouch />
      <NewsLetter />
    </div>
  );
}
