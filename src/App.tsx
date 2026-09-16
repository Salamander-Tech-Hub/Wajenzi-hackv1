import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import MainPage from "./pages/home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";
import LoadingScreen from "./pages/LoadingScreen";
import ChatWidget from "./components/ChatWidget";
import RouteLoader from "./components/RouteLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen loading screen
    const hasSeenLoading = sessionStorage.getItem('loadingScreenShown');
    if (hasSeenLoading) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadComplete = () => {
    sessionStorage.setItem('loadingScreenShown', 'true');
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <Router>
        <RouteLoader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <ChatWidget />
      </Router>
    </>
  );
}

export default App;
