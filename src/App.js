import logo from "./logo.svg";
import NavbarComponent from "./Components/Navbar/Navbar.component";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Landing/Landing.component";
import FixedFooter from "./Components/Footer/FixedFooter.component";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
      <FixedFooter/>
    </div>
  );
}

export default App;
