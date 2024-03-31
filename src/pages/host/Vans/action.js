import { removeFromFavorites } from "../../../api/api.js";

export { action };

async function action({ request }) {
  const formData = await request.formData();
  await removeFromFavorites(formData.get("id"));
  return null;
}
