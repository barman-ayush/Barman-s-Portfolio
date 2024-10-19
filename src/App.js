import logo from "./logo.svg";
import NavbarComponent from "./Components/Navbar/Navbar.component.jsx";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Landing/Landing.component.jsx";
import FixedFooter from "./Components/Footer/FixedFooter.component.jsx";
import Works from "./Components/Works/works.component.jsx";
import Contact from "./Components/Contact/Contact.component.jsx";
import AboutPage from "./Components/About/aboutPage.component.jsx";


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/Barman-s-Portfolio" element={<LandingPage/>} />
        <Route path="/Barman-s-Portfolio/works" element={<Works/>} />
        <Route path="/Barman-s-Portfolio/contact" element={<Contact/>} />
        <Route path="/Barman-s-Portfolio/about" element={<AboutPage/>} />
      </Routes>
      <FixedFooter/>
    </div>
  );
}

export default App;
