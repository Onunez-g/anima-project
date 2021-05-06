import React from "react";
import "./CarouselItem.scss";
const CarouselItem = ({ attributes, isCover }) => {
  let image = isCover ? attributes.coverImage : attributes.posterImage;
  let dimensions = image?.meta?.dimensions;
  let divStyle = isCover
    ? { width: dimensions["small"].width }
    : { width: "154px", height: "218px" };
  let imgStyle = isCover ? {} : { width: 154, height: 218 };
  const coverCard = () => {
    return (
      <div style={divStyle} className="item">
        <img src={image["small"]} alt={attributes.slug} />
        <button className="showMore">View Now</button>
        <div className={"cover"}>
          <h2>{attributes.canonicalTitle}</h2>
        </div>
      </div>
    );
  };
  const posterCard = () => {
    return (
      <div style={divStyle} className="item">
        <div className="flipCardInner">
          <div className="flipCardFront">
            <img style={imgStyle} src={image["small"]} alt={attributes.slug} />
            <div className={"poster"}>
              <h2>{attributes.canonicalTitle}</h2>
            </div>
          </div>
          <div className="flipCardBack">
            <h2>{attributes.canonicalTitle}</h2>
            <h3>{attributes.ratingRank ? `Ranked #${attributes.ratingRank}` : "Not ranked"}</h3>
            <h3>Popularity #{attributes.popularityRank}</h3>
          </div>
        </div>
      </div>
    );
  };
  return isCover ? coverCard() : posterCard();
};

export default CarouselItem;
