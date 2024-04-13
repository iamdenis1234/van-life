import { Button as MuiButton, styled } from "@mui/material";

export { CustomButton };

function CustomButton(props) {
  return <Button variant="contained" {...props} />;
}

const Button = styled(MuiButton)(({ theme }) => ({
  textTransform: "none",
  textAlign: "center",
}));
