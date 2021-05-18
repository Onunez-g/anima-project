import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import './Slider.scss'

const Slider = ({ slides, altImg, className = "",numberSlides = 3 }) => {
  const [current, setCurrent] = useState(0);
  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const renderItems = () => {
    return slides.map((x, i) => (
      <div
        className={
          i < current + numberSlides && i >= current ? "slide active" : "slide"
        }
        key={i}
      >
        {i < current + numberSlides && i >= current && (
          <div className="sliderItem">
            <img src={x.attributes?.thumbnail?.original ?? altImg} alt="" />
            <div className="itemTitle">{x.attributes?.canonicalTitle ?? `Episode ${x.attributes?.number}`}</div>
          </div>
        )}
      </div>
    ));
  };
  return (
    <section className={`scrollableSlider ${className}`}>
      <FaChevronLeft className="backArrow" onClick={prevSlide} />
      <FaChevronRight className="fowardArrow" onClick={nextSlide} />
      {renderItems()}
    </section>
  );
};

export default Slider;
