import logo from "./logo.svg";
import NavbarComponent from "./Components/Navbar/Navbar.component";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Landing/Landing.component";
import FixedFooter from "./Components/Footer/FixedFooter.component";
import Works from "./Components/Works/works.component";
import Contact from "./Components/Contact/Contact.component";
import AboutPage from "./Components/About/aboutPage.component";


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/Barman-s-Portfolio" element={<LandingPage/>} />
        <Route path="Barman-s-Portfolio/works" element={<Works/>} />
        <Route path="Barman-s-Portfolio/contact" element={<Contact/>} />
        <Route path="Barman-s-Portfolio/about" element={<AboutPage/>} />
      </Routes>
      <FixedFooter/>
    </div>
  );
}

export default App;
