import { AnimatePresence, motion } from "framer-motion";
import { PageTransitionProps } from "./model";

const Curtain: React.FC<PageTransitionProps> = ({ children, router }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Curtain;
