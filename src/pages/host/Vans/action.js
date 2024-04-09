import { removeFromFavorites } from "../../../api/api.js";

export { action };

function action(queryClient) {
  return async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    await removeFromFavorites(id);
    await invalidateQueries(queryClient);
    return null;
  };
}

async function invalidateQueries(queryClient) {
  await queryClient.invalidateQueries(
    { queryKey: ["favorites"] },
    // To be consistent with new react router data api, so that we can build
    // proper optimistic UI with useFetcher
    { cancelRefetch: false },
  );
}
