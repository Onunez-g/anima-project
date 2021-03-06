import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useParams } from "react-router";
import Slider from "../../Components/Slider/Slider";
import { useGetAnimeById } from "../../hooks/Query/useGetAnime";
import { useGetEpisodesByID } from "../../hooks/Query/useGetEpisodes";
import BasePage from "../BasePage";
import "./AnimeDetailsPage.scss";

const AnimeDetails = () => {
  let { id } = useParams();
  const { data, isLoading } = useGetAnimeById(id);
  const { data: episodes, isLoading: epiLoad } = useGetEpisodesByID(id);
  let animeDetails = data?.data;
  let attributes = animeDetails?.attributes;
  return (
    <BasePage>
      <div className="details-container">
        {isLoading ? (
          <SkeletonTheme color="#693E37" highlightColor="#CD563F">
            <Skeleton
              style={{ borderRadius: "20px" }}
              height={402}
              width={284}
            />
          </SkeletonTheme>
        ) : (
          <img
            className="animeImage"
            src={attributes?.posterImage["small"]}
            alt={attributes?.slug}
          />
        )}
        <div className="title">
          {attributes?.canonicalTitle || (
            <SkeletonTheme color="#693E37" highlightColor="#CD563F">
              <Skeleton width={200} />
            </SkeletonTheme>
          )}
        </div>
        <div className="description">
          <div className="titles">
            {attributes ? (
              Object.values(attributes?.titles)?.map((x) => <p>{x}</p>)
            ) : (
              <SkeletonContent count={1} />
            )}
          </div>
          {isLoading ? (
            <SkeletonContent count={5} />
          ) : (
            attributes?.description ?? "There's no description yet"
          )}
        </div>
        {attributes?.averageRating ? <div className="score">{attributes?.averageRating}</div> : <></>}
        <button className="addLibrary">Add to Library</button>
        <div className="extra">
          <div className="extraDetails rankings">
            {attributes?.ratingRank ? <p>Ranked #{attributes?.ratingRank}</p> : <p>Not Ranked</p>}
            <p>Popularity #{attributes?.popularityRank}</p>
          </div>
          <div className="extraDetails info">
            <p>Status: {attributes?.status}</p>
            <p>Episodes: {attributes?.episodeCount ?? 0}</p>
            <p>Subtype: {attributes?.subtype}</p>
            <p>Age rating: {attributes?.ageRating}</p>
          </div>
        </div>
        <h2 className="episodeTitle">Episodes</h2>
        <Slider
          className="episodes"
          slides={episodes?.data}
          altImg={attributes?.posterImage["small"]}
        />
      </div>
    </BasePage>
  );
};

const SkeletonContent = (props) => {
  return (
    <SkeletonTheme color="#503835" highlightColor="#693E37">
      <Skeleton count={props.count} />
    </SkeletonTheme>
  );
};

export default AnimeDetails;
