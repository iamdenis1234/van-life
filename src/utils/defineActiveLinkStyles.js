export { defineActiveLinkStyles };

function defineActiveLinkStyles({ isActive }) {
  return isActive ? activeStyles : null;
}

const activeStyles = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
};
