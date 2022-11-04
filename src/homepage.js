import "./homepage.css";
import ProfileHeader from "./profilesection/profilesection";
import LinkSection from "./linksection/linksection";
import BeforeFooter from "./sectionbforefooter/sectionbeforefooter";

function Homepage() {
  return (
    <div className="App">
      <ProfileHeader />
      <LinkSection />
      <BeforeFooter />
    </div>
  );
}

export default Homepage;
