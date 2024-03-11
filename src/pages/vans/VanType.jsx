import { Chip } from "@mui/material";

export { VanType };

function VanType({ type, ...restProps }) {
  return <Chip label={type} {...restProps} color={type} />;
}
