import { CustomButton } from "../../../components/CustomButton.jsx";

export { FilterButton };

function FilterButton({ isActive = false, ...restProps }) {
  return (
    <CustomButton
      disableElevation
      size="small"
      variant={isActive ? "contained" : "outlined"}
      {...restProps}
    />
  );
}
