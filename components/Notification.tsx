import React, { useState } from "react";
import Image from "next/image";
import { TbBellRinging } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

export default function Notification() {
  const [view, setView] = useState(true);
  return (
    <div>
      <AnimatePresence>
        {view && (
          <motion.div
            className="w-full bg-white p-1 rounded-lg "
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0, y: -50 }}
            transition={{ type: "spring" }}
          >
            <Link href="https://itma.com" target="_blank">
              <Image
                className="rounded-lg "
                height={150}
                width={600}
                src="/mainPage/itma2.webp"
                priority={true}
                alt="Global"
              />
            </Link>
            <div
              className="w-5 h-5 sm:w-9 sm:h-9 rounded-full absolute right-2 sm:right-2 top-1 flex justify-center items-center cursor-pointer"
              onClick={() => setView(!view)}
            >
              <RxCross2 className="text-2xl" />
            </div>
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white absolute right-8 sm:right-14 top-1 sm:top-2 flex justify-center items-center animate-pulse">
              <TbBellRinging />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
