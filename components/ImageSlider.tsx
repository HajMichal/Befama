import React, {useState} from 'react';

const ImageSlider = ({ slides }: any) => {

    const [ currentIndex, setCurrentIndex ] = useState(0);


    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0 ;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

  return (
    <div className='relative h-full'>
        <div className='absolute top-1/3 sm:top-1/2 translate-x-1/2 left-3 sm:left-8  text-xl sm:text-3xl md:text-5xl text-white z-50 cursor-pointer' onClick={goToPrev} > ❮ </div>
        <div className='absolute top-1/3 sm:top-1/2 translate-x-1/2 right-3 sm:right-8 text-xl sm:text-3xl md:text-5xl text-white z-50 cursor-pointer' onClick={goToNext} > ❯ </div>
        <div className='w-full h-full bg-cover bg-center rounded-sm max-h-80 sm:max-h-none' style= { { backgroundImage: `url(${slides[currentIndex].url})` } }></div>
    </div>
  )
}

export default ImageSlider