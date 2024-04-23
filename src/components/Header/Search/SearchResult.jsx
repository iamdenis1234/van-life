import { styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomButton } from "../../CustomButton.jsx";
import { VanCard } from "./VanCard.jsx";

export { SearchResult };

function SearchResult({ result, onClick, search }) {
  const moreThanOneVan = result.totalHits > 1;
  const showAllLink = getShowAllLink(search);
  const empty = result.vans.length === 0;

  function renderContent() {
    if (empty) {
      return <NotFound>No vans found</NotFound>;
    }

    const vanCards = result.vans.map((van) => (
      <VanCard key={van.id} van={van} onClick={onClick} />
    ));

    return (
      <>
        {vanCards}
        {moreThanOneVan && (
          <CustomButton
            color="inherit"
            variant="text"
            component={Link}
            to={showAllLink}
            onClick={onClick}
          >
            Show all {result.totalHits} vans
          </CustomButton>
        )}
      </>
    );
  }

  return <>{renderContent()}</>;
}

function getShowAllLink(search) {
  const searchParams = new URLSearchParams([["search", search]]);
  return `/vans?${searchParams}`;
}

const NotFound = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
