import "./App.css";
import ProfileHeader from "./profilesection/profilesection";
import LinkSection from "./linksection/linksection";
import BeforeFooter from "./sectionbforefooter/sectionbeforefooter";
import Footer from "./footersection/footer";

function App() {
  return (
    <div className="App">
      <ProfileHeader />
      <LinkSection />
      <BeforeFooter />
      <Footer />
    </div>
  );
}

export default App;
