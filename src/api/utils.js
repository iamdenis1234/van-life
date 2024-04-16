import parse from "html-react-parser";

export { getParsedVan };

function getParsedVan(vanHit) {
  const { description, id, imageUrl, name, price, type, _highlightResult } =
    vanHit;

  const highlightedReactElements = {
    name: parse(_highlightResult.name.value),
    price: parse(_highlightResult.price.value),
  };

  return {
    name,
    id,
    type,
    price,
    imageUrl,
    description,
    highlightedReactElements,
  };
}
