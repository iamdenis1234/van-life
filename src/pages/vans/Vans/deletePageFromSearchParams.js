export { deletePageFromSearchParams };

function deletePageFromSearchParams(previousSearchParams) {
  const newSearchParams = new URLSearchParams(previousSearchParams);
  newSearchParams.delete("page");
  return newSearchParams;
}
