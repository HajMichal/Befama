import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const images = [
  "/services/falowniki.webp",
  "/services/relokacja.webp",
  "/services/services_img.jpg",
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 1,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ImageSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="w-screen h-screen object-cover absolute"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "just", stiffness: 100, damping: 30 },
            opacity: { duration: 0.1 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div
        className="z-50 top-[50%] rounded-full shadow-xl right-5 absolute w-[40px] h-[40px] flex justify-center items-center hover:cursor-pointer font-bold text-[18px]"
        onClick={() => paginate(1)}
      >
        <FaChevronRight fill="white" />
      </div>
      <div
        className="z-50 top-[50%] rounded-full shadow-xl rotate-180 left-5 absolute w-[40px] h-[40px] flex justify-center items-center hover:cursor-pointer font-bold text-[18px]"
        onClick={() => paginate(-1)}
      >
        <FaChevronRight fill="white" />
      </div>
    </>
  );
};
