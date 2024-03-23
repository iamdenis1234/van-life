import { VanType } from "../VanType.jsx";
import { useCurrentTypeFilter } from "./useCurrentTypeFilter.js";

export { Filter };

function Filter({ type, ...restProps }) {
  const [currentTypeFilter, setCurrentTypeFilter] = useCurrentTypeFilter();
  const isActive = currentTypeFilter === type;

  return (
    <VanType
      type={type}
      variant={isActive ? "filled" : "outlined"}
      onClick={() => setCurrentTypeFilter(type)}
      {...restProps}
    />
  );
}
