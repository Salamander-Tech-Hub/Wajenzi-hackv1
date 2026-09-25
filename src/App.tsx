import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import MainPage from "./pages/home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";
import LoadingScreen from "./pages/LoadingScreen";
import RouteLoader from "./components/RouteLoader";
import { WaveGridBackground } from "./components/ui/wave-grid-background";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSeenLoading = sessionStorage.getItem("loadingScreenShown");
    if (hasSeenLoading) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadComplete = () => {
    sessionStorage.setItem("loadingScreenShown", "true");
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <WaveGridBackground
        className="pointer-events-none fixed inset-0 z-0 h-svh w-full opacity-70"
        colorBase="#111111"
        colorHigh="#FFED00"
        waveAmplitude={0.32}
        autoAnimate
        vignette
      />
      <Router>
        <RouteLoader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
