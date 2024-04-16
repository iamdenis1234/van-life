import { Link } from "react-router-dom";
import { CustomButton } from "../../CustomButton.jsx";
import { VanCard } from "./VanCard.jsx";

export { VansContent };

function VansContent({ result, onClick, search }) {
  const moreThanOneVan = result.totalHits > 1;
  const showAllLink = getShowAllLink(search);
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

function getShowAllLink(search) {
  const searchParams = new URLSearchParams([["search", search]]);
  return `/vans?${searchParams}`;
}
