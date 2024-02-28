import { TextField } from "@mui/material";

export { CustomTextField };

function CustomTextField(props) {
  return <TextField size="small" /*color="primaryDark"*/ {...props} />;
}
