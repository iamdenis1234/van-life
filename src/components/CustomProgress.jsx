import { styled } from "@mui/material";

export { CustomProgress };

function CustomProgress({ size = 60, title = "loading" }) {
  return (
    <Container>
      <img
        src="/assets/images/Ellipsis-1s-200px.svg"
        alt={title}
        width={size}
        height={size}
      />
    </Container>
  );
}

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
