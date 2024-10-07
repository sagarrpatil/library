import { useState, useEffect } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";

export default function CommonDropDwn({
  value, // List of values to display in the dropdown
  index, // The index for the dropdown
  selectedIndex, // Flag to check if this dropdown is selected
  selectedEnrollFee, // Selected fee for the dropdown
  disabled, // If the dropdown should be disabled
  selectCost, // Callback to update the selected cost
}) {
  const [selectedValue, setSelectedValue] = useState("");
  const [list] = useState(value); // The dropdown values list

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    selectCost(event.target.value, index); // Call the parent callback to pass selected value and index
  };

  useEffect(() => {
    if (list.length > 0) {
      setSelectedValue(list[0].amount); // Set initial value to the first item's amount
    }
  }, [list]);

  return (
    <FormControl sx={{ m: 1, width: 200 }} size="small">
      <Select
        value={selectedIndex ? selectedEnrollFee : selectedValue} // Use selectedEnrollFee if it's selected
        style={{
          backgroundColor: "#fff",
          padding: 5,
          color: "#787885",
          width: 200,
        }}
        disabled={disabled} // Disable if props.disabled is true
        onChange={handleChange} // Trigger the handleChange function on selection
      >
        {list.map((row, idx) => (
          <MenuItem key={idx} value={row.amount}>
            Enrollment Fee - ${row.amount}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
