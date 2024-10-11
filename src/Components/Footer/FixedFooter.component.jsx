import { Fragment } from "react";
import Cigar from "../../assets/Footer/Cigar.svg";

const FixedFooter = () => {
  return (
    <Fragment>
      <footer
        className="footer py-2 mt-auto"
        style={{
          position: "fixed",
          bottom: "0",
          height: "4vh",
          zIndex: "5",
          width: "100vw",
          backgroundColor: "#1b222f",
        }}
      >
        <div className="container flex justify-center text-white">
          &copy; Made with ❤️ and
          <img style={{width : "20px" , height :"20px"}} className="mx-2 text-white" src={Cigar} />
          by Barman
        </div>
      </footer>
    </Fragment>
  );
};

export default FixedFooter;
