import logo from "./logo.svg";
import NavbarComponent from "./Components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Landing/Landing.jsx";
import FixedFooter from "./Components/Footer/FixedFooter.jsx";
import Works from "./Components/works/works.jsx";
import Contact from "./Components/Contact/Contact.jsx"
import AboutPage from "./Components/About/aboutPage.jsx";


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/works" element={<Works/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
      <FixedFooter/>
    </div>
  );
}

export default App;
