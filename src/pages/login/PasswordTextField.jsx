import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { CustomTextField } from "../../components/CustomTextField.jsx";

export { PasswordTextField };

function PasswordTextField(props) {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((show) => !show);
  }

  function handleMouseDownPassword(event) {
    event.preventDefault();
  }

  const showHidePasswordAdornment = (
    <InputAdornment position="end">
      <IconButton
        onClick={handleShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <CustomTextField
      InputProps={{
        endAdornment: showHidePasswordAdornment,
      }}
      type={showPassword ? "text" : "password"}
      {...props}
    />
  );
}
