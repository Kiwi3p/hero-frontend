import { ReactNode } from "react";
import { NavbarPage } from "../Navbar";
import AppWrapper from "./AppWrapper";
import PageWrapper from "./PageWrapper";
import { motion } from "framer-motion";
import Stars from "../Stars";
import NavData from "../../data/navBar.json";

type IProps = {
  children?: ReactNode;
  title?: string;
};

const variants = {
  hidden: { opacity: 0, x: 0, y: -50 },
  enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 0, y: -50, transition: { duration: 0.5 } },
};

const Layout = ({ children, title }: IProps) => {
  return (
    <AppWrapper title={title}>
      <NavbarPage navData={NavData} />
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear", ease: "easeOut" }}
      >
        <div className="">
          <div className="">
            <PageWrapper bgClass={``}>{children}</PageWrapper>
          </div>
        </div>
      </motion.div>
      <div className="relative z-10">
        <Stars />
      </div>
    </AppWrapper>
  );
};

export default Layout;
