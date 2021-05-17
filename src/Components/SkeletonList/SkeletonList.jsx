import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./SkeletonList.scss";
const SkeletonList = () => {
  return (
    <div className="skeletonList">
      <SkeletonTheme color="#693E37" highlightColor="#CD563F">
        <Skeleton className="skeleton" height={218} width={154} />
        <Skeleton className="skeleton" height={218} width={154} />
        <Skeleton className="skeleton" height={218} width={154} />
        <Skeleton className="skeleton" height={218} width={154} />
        <Skeleton className="skeleton" height={218} width={154} />
        <Skeleton className="skeleton" height={218} width={154} />
        <Skeleton className="skeleton" height={218} width={154} />
        <Skeleton className="skeleton" height={218} width={154} />
        <Skeleton className="skeleton" height={218} width={154} />
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonList;
