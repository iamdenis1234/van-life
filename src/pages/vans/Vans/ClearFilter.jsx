import { CustomButton } from "../../../components/CustomButton.jsx";
import { useCurrentTypeFilter } from "./useCurrentTypeFilter.js";

export { ClearFilter };

function ClearFilter({ className }) {
  const [, setCurrentTypeFilter] = useCurrentTypeFilter();

  return (
    <CustomButton
      className={className}
      color="inherit"
      variant="text"
      onClick={() => setCurrentTypeFilter("")}
    >
      clear
    </CustomButton>
  );
}
