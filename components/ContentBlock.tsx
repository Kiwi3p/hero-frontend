import Image from "next/image";
import { motion } from "framer-motion";
import DragCat from "./animations/DragCat";

const myLoader = ({ src, width, quality }: any) => {
  return `/img/${src}?w=${width}&q=${quality || 75}`;
};

const ContentBlock = (
  { children, align, smallHeader, header, img, blackhole, cat, largeHeader }: any,
  props: any
) => (
  <div className="lg:mt-52">
    {align === "left" ? (
      <div className="lg:m-12 lg:my-20 max-w-screen m-6 flex lg:flex-row flex-col ">
        <div className="flex flex-col lg:m-10 ">
          {smallHeader ? (
            <h2 className="text-2xl my-5 flex items-center telex">{header}</h2>
          ) : largeHeader ? (
            <h2 className="text-6xl my-5 flex items-center telex">{header}</h2>
          ) : (
            <h2 className="text-4xl my-5 flex items-center telex">{header}</h2>
          )}

          <p className="two-rem flex items-center">{children}</p>
        </div>
        <div
          data-aos="fade-up"
          className="lg:pl-10 self-center  lg:pt-0 flex lg:flex-row flex-col vw-test overflow-x-hidden new-width justify-center"
        >
          {/* {props.data.map((item: any, index: any) => {
            return (
                <img
             
                  src={item.IMAGE}
                  alt={item.ALT}
                  key={index}
                />
                );
              })} */}
          <img
            className="object-scale-down relative z-20"
            src={img}
            alt={img}
          />
          {cat ? <DragCat /> : <></>}
          <motion.div
            className="absolute lg:w-96 w-80"
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 6, repeat: Infinity }}
          >
            {blackhole ? (
              <img
                className="overflow-visible z-10"
                src="img/blackhole 1.svg"
                alt="blackhole"
              />
            ) : (
              <></>
            )}
          </motion.div>
        </div>
      </div>
    ) : (
      <div className="lg:m-14 lg:my-20 m-6 flex lg:flex-row flex-col overflow-hidden">
        <div
          data-aos="fade-up"
          className="lg:pr-10 self-center flex lg:flex-row flex-col vw-test new-width-left justify-center"
        >
          {/* {props.data.map((item: any, index: any) => {
            return <img src={item.IMAGE} alt={item.ALT} key={index} />;
          })} */}
          <img className="object-scale-down" src={img} alt={img} />
        </div>
        <div className="flex flex-col">
          {smallHeader ? (
            <h2 className="text-2xl my-5 flex items-center telex">{header}</h2>
          ) : (
            <h2 className="text-3xl my-5 flex items-center telex">{header}</h2>
          )}
          <p className="two-rem flex items-center">{children}</p>
        </div>
      </div>
    )}
  </div>
);

export default ContentBlock;
