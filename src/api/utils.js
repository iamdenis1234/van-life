import { createElement } from "react";

export { getParsedVan };

function getParsedVan(vanHit) {
  const { description, id, imageUrl, name, price, type, _highlightResult } =
    vanHit;

  const highlightedReactElements = {
    name: parseHighlight(_highlightResult.name.value),
    price: parseHighlight(_highlightResult.price.value),
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

function parseHighlight(string) {
  const parts = string.split(/(<em>.*?<\/em>)/);
  return parts.map((part, index) => {
    if (part.startsWith("<em>")) {
      const highlighted = part.replace(/<\/?em>/g, "");
      return createElement("em", { key: index }, highlighted);
    }
    return part;
  });
}
