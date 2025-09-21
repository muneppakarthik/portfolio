import Image from "next/image";
import "./page.scss";
import AboutDeveloperDetails from "@/components/about-developer-details/AboutDeveloperDetails";

export default function Home() {
  return (
    <div className="portfolio-container">
      <main className="home-container">
        <p>Hi</p>
        <AboutDeveloperDetails />
      </main>
    </div>
  );
}
