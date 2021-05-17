import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.scss";
import { useQuery } from "react-query";
import CarouselItem from "../../Components/CarouselItem/CarouselItem";
import Carousel from "../../Components/Carousel/Carousel";
import BasePage from "../BasePage";
import {
  useGetRecentlyUpdated,
  useGetTrendingAnime,
} from "../../hooks/Query/useGetAnime";
import List from "../../Components/List/List";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SkeletonList from "../../Components/SkeletonList/SkeletonList";

const Home = () => {
  const { isLoading, data } = useGetTrendingAnime();
  const { data: updated, isLoading: updatedLoading } = useGetRecentlyUpdated();
  return (
    <BasePage>
      {isLoading ? (
        <SkeletonTheme color="#693E37" highlightColor="#CD563F">
          <Skeleton className="skeletonCarousel" height={400} width={1680} />
        </SkeletonTheme>
      ) : (
        <Carousel slides={data?.data} />
      )}
      <h2 className="recently">Recently updated</h2>
      {updatedLoading ? <SkeletonList /> : <List data={updated?.data} />}
    </BasePage>
  );
};

export default Home;
