import React from "react";
import Search from "../search/Search";
import Navbar from "./Navbar";
import s from "./Header.module.scss";
import { useLocation } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { miceBg, mainBg, secondaryBg, review, logo } from "../../assets/";
import HeaderTitle from "./HeaderTitle";
import { getContext } from "../../Context";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const { pathname } = useLocation();
  const changeHeaderBg = () => {
    switch (pathname) {
      case "/":
        return {
          background: `url(${mainBg}) no-repeat center / cover`,
          height: "90vh",
        };
      case "/sales":
        return {
          background: `url(${miceBg}) no-repeat center / cover`,
          height: "90vh",
        };
      case "/loctions":
        return {
          background: `url(${secondaryBg}) no-repeat center / cover`,
          height: "90vh",
        };
      case "/reviews":
        return {
          background: `url(${review}) no-repeat center / cover`,
          height: "90vh",
        };
      default:
        return {
          background: ``,
          height: "",
        };
    }
  };

  const { setShowSidebar } = getContext();

  return (
    <header>
      {/* !MOBILE SIDEBAR HANDLER */}

      <motion.div
        className={`py-5 relative`}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={changeHeaderBg()}
      >
        <div className={`flex items-center justify-center md:hidden py-5`}>
          <button
            className={`absolute left-[30px] top-[40px]`}
            onClick={() => setShowSidebar(true)}
          >
            <HiMenuAlt1 size={30} />
          </button>
          <div className={`w-[60px]`}>
            <img src={logo} alt="logo" className={`w-full`} />
          </div>
        </div>
        <Navbar />
        <div className="container">
          {pathname !== "/products" && pathname !== "/cartPage" ? (
            <HeaderTitle />
          ) : null}
          <Search />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
