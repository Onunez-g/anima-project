import CarouselItem from "../../Components/CarouselItem/CarouselItem";
import "./List.scss";

const List = ({ data }) => {
  const renderData = () => {
    return data
      ?.slice(0, 8)
      .map((x) => <CarouselItem key={x.id} id={x.id} attributes={x.attributes} />);
  };
  return (
    <>
      <div className="list">
        {renderData()}
        <div className="viewMore">
          <h2>View More</h2>
        </div>
      </div>
    </>
  );
};

export default List;
