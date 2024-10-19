import { Fragment } from "react";
import Logo from "../../assets/Navbar/Logo.svg";
import "./Logo.styles.css";

const MyLogo = () => {
  return (
    <Fragment>
      <a href="/Barman-s-Portfolio">
        <div className="logo-component flex flex-row pt-3">
          <img src={Logo} width={16} height={16} className="mr-2" />
          <p className="text-white">Ayush</p>
        </div>
      </a>
    </Fragment>
  );
};

export default MyLogo;
