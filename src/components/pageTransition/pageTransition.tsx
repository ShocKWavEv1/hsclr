import { AnimatePresence, motion } from "framer-motion";
import { PageTransitionProps } from "./model";

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  router,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // Left curtain is fully closed
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Both curtains are open
          },
          exitState: {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // Left curtain is fully closed
          },
        }}
        className="base-page-size"
      >
        <motion.div
          style={{
            backgroundColor: "#BC162A", // Change the background color to red
            height: "100%",
            width: "50%", // Set the width of the curtain
          }}
          initial={{ x: "-100%" }} // Start the left curtain off-screen to the left
          animate={{
            x: "0%", // Animate the left curtain to the center
          }}
          exit={{
            x: "-100%", // Animate the left curtain off-screen to the left on exit
          }}
          transition={{
            duration: 0.75,
          }}
        />
        <motion.div
          style={{
            backgroundColor: "#BC162A", // Change the background color to red
            height: "100%",
            width: "50%", // Set the width of the curtain
          }}
          initial={{ x: "100%" }} // Start the right curtain off-screen to the right
          animate={{
            x: "0%", // Animate the right curtain to the center
          }}
          exit={{
            x: "100%", // Animate the right curtain off-screen to the right on exit
          }}
          transition={{
            duration: 1.45,
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
