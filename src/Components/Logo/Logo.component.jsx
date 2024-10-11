import { Fragment } from "react";
import Logo from "../../assets/Navbar/Logo.svg"

const MyLogo = () => {
  return (
    <Fragment>
      <div className="logo-component flex flex-row pt-3 ">
        <img src={Logo} width={16} height={16} className="mr-2" />
        <p className="text-white">Ayush</p>
      </div>
    </Fragment>
  );
};

export default MyLogo;
