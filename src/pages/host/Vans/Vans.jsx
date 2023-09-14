import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

export { Vans };

function Vans() {
  console.log("Render HostVans");

  const { vansPromise } = useLoaderData();

  function renderVanElements(vans) {
    console.log("host renderVans function");

    const vansElements = vans.map((van) => (
      <Link to={van.id} key={van.id} className="host-van-link-wrapper">
        <div className="host-van-single" key={van.id}>
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ));

    return (
      <div className="host-vans-list">
        <section>{vansElements}</section>
      </div>
    );
  }

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={vansPromise}>{renderVanElements}</Await>
      </Suspense>
    </section>
  );
}
