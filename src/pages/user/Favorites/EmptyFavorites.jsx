import { CustomInfoAlert } from "../../../components/CustomAlert.jsx";

export { EmptyFavorites };

function EmptyFavorites() {
  return (
    <CustomInfoAlert
      title="List is empty"
      linkText="Find your Van"
      linkTo="/vans"
    />
  );
}
