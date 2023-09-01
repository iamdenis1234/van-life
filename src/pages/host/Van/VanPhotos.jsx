import { useOutletContext } from "react-router-dom";

export { VanPhotos };

function VanPhotos() {
  console.log("Render HostVanPhotos");

  const { van } = useOutletContext();

  return <img src={van.imageUrl} className="host-van-detail-image" />;
}
