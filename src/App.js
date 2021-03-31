import logo from './img/logo.svg';
import appStore from './img/appStore.svg';
import googlePlay from './img/google-play-badge.svg';
import pointer from './img/placeholder.svg';
import './App.css';
import { Link } from "react-scroll";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import DownloadSection from "./components/DownloadSection.js";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <VideoSection />
      <DownloadSection />
    </div>
  );
}

export default App;
