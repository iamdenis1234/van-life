import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export { VanDetails };

function VanDetails() {
  console.log("Render VanDetails");

  const [van, setVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let ignore = false;

    async function getVan() {
      console.log(`loading van by id: ${id}`);
      const { data } = await axios(`/api/vans/${id}`);
      const van = data.vans;
      if (!ignore) {
        setVan(van);
      } else {
        console.log(`ignoring van ${id}`);
      }
    }

    getVan();

    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
