import { useSearchParams } from "react-router-dom";

export { useCurrentTypeFilter };

function useCurrentTypeFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  // Robert Martin - Clean Code. Chapter 7. Don't return null. Special Case Object
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
