import { ArrowBack } from "@mui/icons-material";
import { styled } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { CustomButton } from "../../../components/CustomButton.jsx";

export { BackToLink };

function BackToLink() {
  const link = useBackLink();
  const type = useType();

  return (
    <StyledButton
      component={Link}
      startIcon={<ArrowBack />}
      to={link}
      variant="text"
      relative="path"
      color="inherit"
    >
      Back to {type} vans
    </StyledButton>
  );
}

const StyledButton = styled(CustomButton)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

function useBackLink() {
  const { state } = useLocation();
  const searchParams = state?.searchParams || "";
  return `..?${searchParams}`;
}

function useType() {
  const { state } = useLocation();
  return state?.type || "all";
}
