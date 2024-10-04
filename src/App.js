import logo from "./logo.svg";
import NavbarComponent from "./Components/Navbar/Navbar.component";
import { Route, Routes } from "react-router-dom";
import SideLine from "./Components/SideLine/SideLine.component";
import LandingPage from "./Components/Landing/Landing.component";

function App() {
  return (
    <div className="App">
      <SideLine/>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
