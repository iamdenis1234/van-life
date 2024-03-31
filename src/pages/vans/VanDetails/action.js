import { addToFavorites, removeFromFavorites } from "../../../api/api.js";

export { action };

async function action({ request, params }) {
  console.log("start favorite action");
  let formData = await request.formData();
  if (formData.get("favorite") === "true") {
    await addToFavorites(params.id);
  } else {
    await removeFromFavorites(params.id);
  }
  console.log("end favorite action");
  return null;
}
