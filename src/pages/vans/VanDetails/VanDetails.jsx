import { Suspense } from "react";
import { Await, Link, useLoaderData, useLocation } from "react-router-dom";

export { VanDetails };

function VanDetails() {
  console.log("Render VanDetails");

  const { vanPromise } = useLoaderData();
  const { state } = useLocation();
  const search = state?.search || "";
  const type = state?.type || "all";

  function renderVan(van) {
    console.log("renderVan function");

    return (
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
    );
  }

  return (
    <div className="van-detail-container">
      <Link to={`..?${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={vanPromise}>{renderVan}</Await>
      </Suspense>
    </div>
  );
}
