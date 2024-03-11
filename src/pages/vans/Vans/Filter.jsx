import { VanType } from "../VanType.jsx";
import { useCurrentTypeFilter } from "./useCurrentTypeFilter.js";

export { Filter };

// TODO: think about default prop values. Do you really need them?
//  Or it is better to define these default values on the level where
//  this component is used
function Filter({ type = "", ...restProps }) {
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
