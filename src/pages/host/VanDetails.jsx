import { useParams } from "react-router-dom";

export { VanDetails };

function VanDetails() {
  console.log("Render HostVanDetails");

  const { id } = useParams();

  return <p>Van {id} details goes here</p>;
}
