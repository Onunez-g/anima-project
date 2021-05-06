import { React, useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselItem from "../../Components/CarouselItem/CarouselItem";
import "./Carousel.scss";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef();

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 8000);
    return () => clearInterval(interval);
  }, []);

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }
  const length = slides.length;
  const renderItems = () => {
    return slides.map((x, i) => {
      return (
        <div className={i === current ? "slide active" : "slide"} key={i}>
          {i === current && <CarouselItem attributes={x.attributes} isCover />}
        </div>
      );
    });
  };
  return (
    <section className="slider">
      <FaChevronLeft className="backArrow" onClick={prevSlide} />
      <FaChevronRight className="fowardArrow" onClick={nextSlide} />
      {renderItems()}
    </section>
  );
};

export default Carousel;
