import Image from "next/image";
import "./page.scss";
import AboutDeveloperDetails from "@/components/about-developer-details/AboutDeveloperDetails";
import Banner from "@/components/banner/banner";

export default function Home() {
  return (
    <div className="home-container">
      <Banner />
      <AboutDeveloperDetails />
    </div>
  );
}
