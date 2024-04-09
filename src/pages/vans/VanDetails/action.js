import { addToFavorites, removeFromFavorites } from "../../../api/api.js";

export { action };

function action(queryClient) {
  return async ({ request, params }) => {
    console.log("start favorite action");
    const id = params.id;
    const formData = await request.formData();
    const isFavorite = formData.get("favorite") === "true";
    isFavorite ? await addToFavorites(id) : await removeFromFavorites(id);
    await invalidateQueries({ queryClient, id });
    console.log("end favorite action");
    return null;
  };
}

async function invalidateQueries({ queryClient, id }) {
  queryClient.invalidateQueries({
    queryKey: ["favorites"],
    refetchType: "inactive",
  });
  await queryClient.invalidateQueries(
    { queryKey: ["van", { id }] },
    { cancelRefetch: false },
  );
  await queryClient.invalidateQueries(
    { queryKey: ["vans"] },
    { cancelRefetch: false },
  );
}
