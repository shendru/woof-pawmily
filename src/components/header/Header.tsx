import React from "react";
import logo from "../../assets/images/logo.png";
import "./header.css";

function Header() {
  return (
    <header className="">
      <div className="p-2">
        <a href="/" className="flex items-center justify-center p-2 mb-2">
          <img src={logo} alt="" className="w-[18%]" />
        </a>
        <nav>
          <div className="md:w-[80%] md:mx-auto sm:w-[100%]">
            <div className="flex justify-center sm:w-full xl:w-[80%] mx-auto border-b-4 border-t border-l border-r border-[#E98842] rounded-lg gap-5 text-[1.2rem] font-bold text-[#14192C] text-center">
              <a
                className="nav-links px-5 py-1 hover:text-[#E98842] hover:bg-[rgba(255,255,255,0.5)]"
                href=""
                style={{ width: "190px" }}
              >
                HOME
              </a>
              <a
                className="nav-links px-5 py-1 hover:text-[#E98842] hover:bg-[rgba(255,255,255,0.5)]"
                href=""
                style={{ width: "190px" }}
              >
                PAWPEDIA
              </a>
              <a
                className="nav-links px-5 py-1 hover:text-[#E98842] hover:bg-[rgba(255,255,255,0.5)]"
                href=""
                style={{ width: "190px" }}
              >
                PRODUCTS
              </a>
              <a
                className="nav-links px-5 py-1 hover:text-[#E98842] hover:bg-[rgba(255,255,255,0.5)]"
                href=""
                style={{ width: "190px" }}
              >
                ABOUT
              </a>
              <a
                className="nav-links px-5 py-1 hover:text-[#E98842] hover:bg-[rgba(255,255,255,0.5)]"
                href=""
                style={{ width: "190px" }}
              >
                CONTACT
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
