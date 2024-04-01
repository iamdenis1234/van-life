import { ArrowBack } from "@mui/icons-material";
import { styled } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { CustomButton } from "../../../components/CustomButton.jsx";

export { BackToLink };

function BackToLink() {
  const { state } = useLocation();
  const searchParams = state?.searchParams || "";

  return (
    <StyledButton
      component={Link}
      startIcon={<ArrowBack />}
      to={`..?${searchParams}`}
      variant="text"
      relative="path"
      color="inherit"
    >
      Show {searchParams ? "selected" : "all"} vans
    </StyledButton>
  );
}

const StyledButton = styled(CustomButton)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));
