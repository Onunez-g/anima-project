import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.scss";
import CarouselItem from "../../Components/CarouselItem/CarouselItem";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={5000} showStatus={false}>
          <CarouselItem
            src="https://media.kitsu.io/anime/cover_images/41370/large.jpg?1597701689"
            alt="Kimetsu"
            name="Kimetsu no Yaiba"
          />
          <CarouselItem
            src="https://media.kitsu.io/anime/cover_images/7442/large.jpg?1597701549"
            alt="Shingeki"
            name="Shingeki no Kyojin"
          />
        </Carousel>
      </div>
    </>
  );
};

export default Home;
