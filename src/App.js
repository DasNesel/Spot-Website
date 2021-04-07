import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import DownloadSection from "./components/DownloadSection.js";
import VideoSection from "./components/VideoSection";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <VideoSection />
      <DownloadSection />
      <TeamSection/>
    </div>
  );
}

export default App;
