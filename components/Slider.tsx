import React, { useState, useRef } from "react";
import Image from 'next/image'

const featuredProducts = [
  "/Relokacja.webp",
  "/wilk.webp",
  "/falowniki.webp"
];

let count = 0;
let slideInterval: number;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef<HTMLDivElement>(null);



  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    if (slideRef.current) {
    slideRef.current.classList.add("fade-anim");
    }
    pauseSlider()
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    if (slideRef.current) {
    slideRef.current.classList.add("fade-anim");
    }
    pauseSlider()
  };

  return (
    <div ref={slideRef} className="w-full select-none relative sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
      <div className="carousel-item relative w-full ">
        <Image src={featuredProducts[currentIndex]} className="w-full h-auto" height={512} width={768} alt="machine" />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-slate-600 text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition md:w-12 md:h-12 md:text-xl md:font-semibold"
          onClick={handleOnPrevClick}
        >
          ❮
        </button>
        <button
          className="bg-slate-600 text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition md:w-12 md:h-12 md:text-xl md:font-semibold"
          onClick={handleOnNextClick}
        >
          ❯
        </button>
      </div>
    </div>
  );
} 