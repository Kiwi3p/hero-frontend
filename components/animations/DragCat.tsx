import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function DragCat() {
  const { width }: any = useWindowDimensions();
  if (width <= 640) {
    return (
      <>
        <motion.div
          style={{
            width: 557,
            height: 557,
            zIndex: -1,
          }}
          animate={{
            x: [0, 27, 7, -70, 0, -27, -7, 0],
            y: [0, 44, 27, 7, -7, -70, -27, 0],
          }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
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
            x: [0, -27, 7, -70, 0, 27, -7, 0],
            y: [0, -44, 27, 7, -7, 90, 27, 0],
          }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="overflow-show"
        >
          <div className="w-96 h-96 absolute top-0"></div>
          <img src="/img/floating helmet 1.png" alt="cat helmet" />
        </motion.div>
      </>
    );
  } else {
    return (
      <>
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          style={{
            width: 557,
            height: 557,
          }}
          animate={{
            x: [0, 27, 7, -70, 0, -27, -7, 0],
            y: [0, 44, 27, 7, -7, -70, -27, 0],
          }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          <div className="w-96 h-96 absolute top-0"></div>
          <img src="/img/space helmet cat 1.png" alt="helmet cat" />
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          style={{
            width: 216,
            height: 216,
            zIndex: -1,
          }}
          animate={{
            x: [0, -27, 7, -70, 0, 27, -7, 0],
            y: [0, -44, 27, 7, -7, 90, 27, 0],
          }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          <div className="w-96 h-96 absolute top-0"></div>
          <img src="/img/floating helmet 1.png" alt="cat helmet" />
        </motion.div>
      </>
    );
  }
}
