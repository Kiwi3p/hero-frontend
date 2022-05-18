import React, { useState, useEffect } from "react";
import { CurtainMenuPage } from "./CurtainMenu";

export const NavbarPage = ({ navData }: any) => {
  const mint_button =
    "connect-wallet-button relative mb-10 z-30 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110";
  return (
    <Navbar className="text-white">
      <NavbarToggler navData={navData} />
      <NavbarCollapse>
      <NavbarNav orientation="start">
          <NavbarBrand href="/">HERO GALAXY</NavbarBrand>
        </NavbarNav>
        <NavbarNav orientation="end">
          {navData.map((item: any, index: any) => {
            return (
              <>
                <NavbarItem>
                  <NavbarLink href={item.url}>{item.title}</NavbarLink>
                </NavbarItem>
              </>
            );
          })}
        </NavbarNav>
      </NavbarCollapse>
    </Navbar>
  );
};

/* Navbar logic */

const style: any = {
  navbar: `fixed px-4 py-2  top-0 w-full lg:flex lg:flex-row lg:items-center lg:justify-start z-50`,
  brand: `list-none cursor-pointer font-bold inline-block mr-4 py-1.5 text-3xl whitespace-nowrap hover:text-gray-200`,
  toggler: `block float-right text-4xl lg:hidden focus:outline-none focus:shadow`,
  item: `telex whitespace-pre text-xl cursor-pointer px-4 py-3 hover:text-gray-200`,
  collapse: {
    default: `border-t border-gray-500 fixed left-0 mt-2 shadow py-2 text-center lg:border-none lg:flex lg:flex-grow lg:items-center lg:mt-0 lg:py-0 lg:relative lg:shadow-none`,
    open: `h-auto visible transition-all duration-500 ease-out w-full opacity-100 lg:transition-none`,
    close: `h-auto invisible w-0 transition-all duration-300 ease-in lg:opacity-100 lg:transition-none lg:visible`,
  },
  nav: {
    start: `block mb-0 mr-auto pl-0 lg:flex lg:mb-0 lg:pl-0`,
    middle: `block mb-0 ml-auto pl-0 lg:flex lg:pl-0 lg:mb-0 lg:mx-auto`,
    end: `block pl-0 mb-0 ml-auto lg:flex lg:pl-0 lg:mb-0`,
  },
};

const Context = React.createContext({});

const Navbar = ({ children, className }: any) => {
  const [open, setOpen] = React.useState(false);
  const navbarRef = React.useRef<any>([null]);

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // close navbar on click outside when viewport is less than 1024px
  React.useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (window.innerWidth < 1024) {
        if (!navbarRef.current?.contains(event.target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [open, navbarRef]);
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#3c2d59") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <Context.Provider value={{ open, toggle }}>
      <nav
        style={{
          backgroundColor: navColor,
          opacity: "0.9",
          transition: "all 1s",
        }}
        ref={navbarRef}
        className={`${className} ${style.navbar}`}
      >
        {children}
      </nav>
    </Context.Provider>
  );
};

const useToggle = () => React.useContext(Context);

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const NavbarBrand = ({ children, href }: any) => (
  <a href={href} className={style.brand}>
    <strong className="telex">{children}</strong>
  </a>
);

const NavbarToggler = ({ navData }: any) => {
  const { toggle }: any = useToggle();
  return (
    // <button
    //   type="button"
    //   aria-expanded="false"
    //   aria-label="Toggle navigation"
    //   className={style.toggler}
    //   onClick={toggle}
    // >
    //   &#8801;
    // </button>
    <CurtainMenuPage navData={navData} />
  );
};

const NavbarCollapse = ({ children }: any) => {
  const { open }: any = useToggle();
  return (
    <div
      style={{ backgroundColor: "inherit" }}
      className={`${style.collapse.default}
        ${open ? style.collapse.open : style.collapse.close}`}
    >
      {children}
    </div>
  );
};

const NavbarNav = ({ children, orientation }: any) => (
  <ul className={style.nav[orientation]}>{children}</ul>
);

const NavbarItem = ({ children }: any) => (
  <li className={style.item}>{children}</li>
);

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const NavbarLink = ({ children, href, active, activeClass, target }: any) => (
  <a href={href} target={target} className={active ? activeClass : ""}>
    {children}
  </a>
);
