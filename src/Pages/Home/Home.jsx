import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.scss";
import { useQuery } from "react-query";
import CarouselItem from "../../Components/CarouselItem/CarouselItem";
import Carousel from "../../Components/Carousel/Carousel";

const path = "https://kitsu.io/api/edge";

const Home = () => {
  const { isLoading, data } = useQuery("trendingData", () =>
    fetch(`${path}/trending/anime`).then((res) => res.json())
  );
  const { data: updated } = useQuery("recentlyUpdated", () =>
    fetch(
      "https://kitsu.io/api/edge/anime?sort=-updatedAt&filter[status]=current&filter[subtype]=TV"
    ).then((res) => res.json())
  );
  return (
    <>
      <div className="home">
        <Navbar />
        <Carousel slides={data?.data} />
        <h2 className="recently">Recently updated</h2>
        <div className="list">
          {updated?.data.slice(0, 8).map((x) => (
            <CarouselItem attributes={x.attributes} />
          ))}
          <div className="viewMore">
            <h2>View More</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
