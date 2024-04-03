import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import { useSearchParams, useSubmit } from "react-router-dom";
import { useOptimisticSearchParams } from "./useOptimisticSearchParams.js";

export { SortOrder };

function SortOrder() {
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const order = useSelectedOrder();

  function handleChange(event) {
    const { value } = event.target;
    value === orderValues[0]
      ? searchParams.delete("order")
      : searchParams.set("order", value);
    submit(searchParams);
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
        <MenuItem value={orderValues[0]}>Default</MenuItem>
        <MenuItem value={orderValues[1]}>Low price first</MenuItem>
        <MenuItem value={orderValues[2]}>High price first</MenuItem>
      </Select>
    </StyledFormControl>
  );
}

const StyledFormControl = styled(FormControl)({
  width: 180,
});

function useSelectedOrder() {
  const searchParams = useOptimisticSearchParams();
  return getOrderFromDefinedValues(searchParams);
}

function getOrderFromDefinedValues(searchParams) {
  let order = searchParams.get("order");
  // User could change order param by hand making the Select empty
  // We're preventing this, making the UI more consistent
  if (!orderValues.includes(order)) {
    order = orderValues[0];
  }
  return order;
}

const orderValues = ["default", "lowPriceFirst", "highPriceFirst"];
