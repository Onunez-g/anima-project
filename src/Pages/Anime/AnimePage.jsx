import Skeleton from "react-loading-skeleton";
import List from "../../Components/List/List";
import SkeletonList from "../../Components/SkeletonList/SkeletonList";
import useGetAnime from "../../hooks/Query/useGetAnime";
import BasePage from "../BasePage";
import "./AnimePage.scss";

const Anime = () => {
  const { data: mostPopular, isLoading: popLoading } = useGetAnime({}, [
    "popularityRank",
  ]);
  const { data: animeSeason, isLoading: seasonLoading } = useGetAnime(
    { seasonYear: "2021", season: "spring" },
    ["popularityRank"],
    1
  );
  const { data: upcomingSeason, isLoading: upcomingLoading } = useGetAnime(
    { seasonYear: "2021", season: "summer" },
    ["popularityRank"],
    2
  );
  const { data: top100, isLoading: topLoading } = useGetAnime({}, ["-averageRating"], 3);
  const { data: unreleased, isLoading: unreleasedLoading } = useGetAnime(
    { status: "unreleased" },
    ["popularityRank"],
    4
  );
  return (
    <BasePage>
      <h2 className="title">Most popular</h2>
      {popLoading ? <SkeletonList /> : (
        <List data={mostPopular?.data} />
      )}
      <h2 className="title">This anime season</h2>
      {seasonLoading ? <SkeletonList /> : <List data={animeSeason?.data} />}
      <h2 className="title">Upcoming season</h2>
      {upcomingLoading ? <SkeletonList/> : <List data={upcomingSeason?.data} />}
      <h2 className="title">Top 100 anime</h2>
      {topLoading ? <SkeletonList /> : <List data={top100?.data} />}
      <h2 className="title">Yet to release</h2>
      { unreleasedLoading ? <SkeletonList/> : <List data={unreleased?.data} />}
    </BasePage>
  );
};
export default Anime;
