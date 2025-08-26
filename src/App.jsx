
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home"
import Topheader from "./components/Topheader"

export default function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen flex flex-col">
        <Topheader />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}


