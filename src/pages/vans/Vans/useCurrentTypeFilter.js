import { useSearchParams } from "react-router-dom";

export { useCurrentTypeFilter };

function useCurrentTypeFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  let currentTypeFilter = searchParams.get("type") ?? "";

  function setCurrentTypeFilter(newType) {
    setSearchParams((sp) => {
      const newParams = new URLSearchParams(sp);
      if (newType) {
        newParams.set("type", newType);
      } else {
        newParams.delete("type");
      }
      return newParams;
    });
  }

  return [currentTypeFilter, setCurrentTypeFilter];
}
