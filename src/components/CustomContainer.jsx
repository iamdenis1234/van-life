import { Container as MuiContainer } from "@mui/material";

export { CustomContainer };

function CustomContainer(props) {
  return <MuiContainer maxWidth="lg" {...props} />;
}
