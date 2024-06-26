import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import { useSearchParams, useSubmit } from "react-router-dom";
import { deletePageFromSearchParams } from "./deletePageFromSearchParams.js";

export { SortOrder };

function SortOrder() {
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const order = useSelectedOrder();

  function handleChange(event) {
    const { value } = event.target;
    const newSearchParams = new URLSearchParams(searchParams);
    value === ORDER_VALUES[0]
      ? newSearchParams.delete("order")
      : newSearchParams.set("order", value);
    newSearchParams.sort();
    submit(deletePageFromSearchParams(newSearchParams));
  }

  return (
    <StyledFormControl>
      <InputLabel id="orderLabel">Order</InputLabel>
      <Select
        labelId="orderLabel"
        id="order"
        label="Order"
        name="order"
        value={order}
        onChange={handleChange}
      >
        <MenuItem value={ORDER_VALUES[0]}>Default</MenuItem>
        <MenuItem value={ORDER_VALUES[1]}>Low price first</MenuItem>
        <MenuItem value={ORDER_VALUES[2]}>High price first</MenuItem>
      </Select>
    </StyledFormControl>
  );
}

const StyledFormControl = styled(FormControl)({
  width: 180,
});

function useSelectedOrder() {
  const [searchParams] = useSearchParams();
  return getOrderFromDefinedValues(searchParams.get("order"));
}

function getOrderFromDefinedValues(order) {
  // User could change order param by hand making the Select empty
  // We're preventing this, making the UI more consistent
  if (!ORDER_VALUES.includes(order)) {
    order = ORDER_VALUES[0];
  }
  return order;
}

const ORDER_VALUES = ["default", "lowPriceFirst", "highPriceFirst"];
