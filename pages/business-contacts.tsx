import { motion } from "framer-motion";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import DragCat from "../components/animations/DragCat";
import ContentBlock from "../components/ContentBlock";
import TeamBio from "../components/TeamBio";
import Layout from "../components/wrappers/Layout";

// const PDFViewer = dynamic(() => import('../components/PdfViewer'), {ssr: false})

const BusinessContacts: NextPage = () => {
  return (
    <Layout title="team">
      <div className={`bg-doodle max-h-full h-full pb-14`}>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 relative z-30">
          <div className="lg:m-1 lg:my-20 max-w-screen m-6 flex lg:flex-row flex-col ">
            <div className="flex flex-col lg:m-1 ">
              <h2 className="text-9xl my-5 flex items-center text-center telex">
                Meet the Team
              </h2>

              <p className="two-rem flex items-center">
                The Hero Galaxy is a “Battle-To-Earn” metaverse of games and
                challenges, hosted on various NFT Worlds called Battle Planets,
                populated by Heroes (5,555 NFT Avatars), and playable in
                Minecraft.
                <br />
                <br />
                We ayare the team of designers, artists, entreprenuers, and
                engineers who designed it.
              </p>
            </div>
            <div className="relative z-30 lg:pl-20 self-center  lg:pt-0 flex lg:flex-row flex-col vw-test lg:overflow-x-hidden overflow-hidden new-width2 justify-center">
              <div className="absolute z-50 flex flex-row w-96 h-96 w-12 overflow-hidden h-12 lg:top-40 top-20">
                <motion.div
                  style={{
                    width: 557,
                    height: 557,
                    zIndex: -1,
                  }}
                  animate={{
                    x: [0, 27, 7, -40, 0, -27, -7, 0],
                    y: [0, 24, 27, 7, -7, -40, -27, 0],
                  }}
                  transition={{
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity,
                  }}
                  className="overflow-show"
                >
                  <div className="w-96 h-96 absolute top-0"></div>
                  <img src="/img/space helmet cat 1.png" alt="helmet cat" />
                </motion.div>
                <motion.div
                  style={{
                    width: 216,
                    height: 216,
                    zIndex: -1,
                  }}
                  animate={{
                    x: [0, -27, 7, -40, 0, 27, -7, 0],
                    y: [0, -24, 27, 7, -7, 30, 27, 0],
                  }}
                  transition={{
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity,
                  }}
                  className="overflow-show"
                >
                  <div className="w-96 h-96 absolute top-0"></div>
                  <img src="/img/floating helmet 1.png" alt="cat helmet" />
                </motion.div>
              </div>
              <motion.div
                style={{
                  width: 557,
                  height: 557,
                  zIndex: -1,
                }}
                animate={{
                  x: [0, 20, 7, -30, 0, -20, -7, 0],
                  y: [0, 40, 27, 7, -7, -40, -20, 0],
                }}
                transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                className="overflow-show half-size"
              >
                {/* <img
                  className="absolute lg:w-52 w-12 top-10 right-96"
                  src="img/planet1.png"
                  alt="planet 1"
                />
                <img
                  className="absolute lg:w-52 w-12 right-52 top-80"
                  src="img/planet2.png"
                  alt="planet 2"
                />
                <img
                  className="absolute lg:w-52 w-12 right-0 top-10"
                  src="img/planet3.png"
                  alt="planet 3"
                /> */}
                <img
                  className="absolute lg:w-max w-96 lg:top-40 right-10 lg:-right-20 lg:top-5 top-10"
                  src="/uploads/Group 44.png"
                  alt="planet 3"
                />
              </motion.div>
              {/* <motion.div
                className="absolute lg:w-96 w-80"
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 6, repeat: Infinity }}
              >
                <img
                  className="overflow-visible z-10"
                  src="img/blackhole 1.svg"
                  alt="blackhole"
                />
              </motion.div> */}
            </div>
          </div>
          <div className="w-full text-center pb-8">
            <h1 className="font-bold telex text-white py-10 text-6xl md:text-4xl lg:text-5xl font-heading pb-2">
              TEAM
            </h1>
          </div>
          <TeamBio />
        </section>
        <section className="relative z-50 flex justify-center">
          <div className="bg-white rounded-lg m-4 p-6" data-aos="fade-up">
            <div className="flex items-center space-x-6 mb-4">
              <div>
                <p className="text-8xl text-gray-700 font-normal mb-1">
                  Contact us
                </p>
                <p className="text-5xl text-blue-600 font-normal">
                  info@heroGalaxy.com
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 leading-normal font-normal text-3xl">
                Do you want to know more about how we could help you? Don’t
                hesitate to get in touch with us.
              </p>
            </div>
            <div className="mt-auto pt-10 pb-6 flex items-center flex-row justify-end">
              <a
                className="flex flex-row items-center"
                href="mailto:info@heroGalaxy.io"
              >
                <span className="text-4xl dongle text-blue-600 mx-2">
                  Contact us
                </span>
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="#2463EB"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BusinessContacts;
