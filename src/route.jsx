import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

function Apps() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

export default Apps;
