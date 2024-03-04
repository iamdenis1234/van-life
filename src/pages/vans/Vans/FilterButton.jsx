import { CustomButton } from "../../../components/CustomButton.jsx";
import { useCurrentTypeFilter } from "./useCurrentTypeFilter.js";

export { FilterButton };

function FilterButton({ type = "", ...restProps }) {
  const [currentTypeFilter, setCurrentTypeFilter] = useCurrentTypeFilter();
  const isActive = currentTypeFilter === type;

  return (
    <CustomButton
      disableElevation
      size="small"
      variant={isActive ? "contained" : "outlined"}
      onClick={() => setCurrentTypeFilter(type)}
      {...restProps}
    />
  );
}
