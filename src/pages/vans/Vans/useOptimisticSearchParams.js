import { useLocation, useNavigation } from "react-router-dom";

export { useOptimisticSearchParams };

function useOptimisticSearchParams() {
  const { location } = useNavigation();
  const currentLocation = useLocation();

  return new URLSearchParams(
    location ? location.search : currentLocation.search,
  );
}
