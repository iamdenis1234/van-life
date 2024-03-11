import { Button as MuiButton, styled } from "@mui/material";

export { CustomButton };

function CustomButton(props) {
  // Explicitly setting type="" to preserve the button's default behavior when
  // no type is specified, otherwise mui sets it to type="button"
  // TODO: maybe delete type="" and specify type="submit" explicitly where needed
  return <Button variant="contained" type="" {...props} />;
}

const Button = styled(MuiButton)(({ theme }) => ({
  // color: theme.palette.text.white,
  textTransform: "none",
  // fontWeight: 700,
  borderRadius: 10,
  // padding: "1rem 2rem",
}));