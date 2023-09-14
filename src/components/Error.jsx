import { useRouteError } from "react-router-dom";

export { Error };

function Error() {
  console.log("Render Error");

  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>An error occurred</h1>
      <p>{error.message}</p>
    </>
  );
}
