import { useOutletContext } from "react-router-dom";

export { VanPricing };

function VanPricing() {
  console.log("Render HostVanPricing");

  const { van } = useOutletContext();

  return (
    <h3 className="host-van-price">
      ${van.price}
      <span>/day</span>
    </h3>
  );
}
