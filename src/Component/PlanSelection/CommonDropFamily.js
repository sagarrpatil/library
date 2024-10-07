import { React, useState, useEffect } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";

export default function CommonDropFamily({
  value, // List of values for the dropdown
  index, // The index for this dropdown
  selectedIndex, // Flag to check if the current dropdown is selected
  selectedFamily, // Selected family category
  disabled, // Disable the dropdown if true
  selectCost, // Callback to update the selected value
}) {
  const [selectedValue, setSelectedValue] = useState("");
  const [list] = useState(value); // Initialize the list from props

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    selectCost(event.target.value, index); // Call parent function with selected value and index
  };

  useEffect(() => {
    if (selectedIndex) {
      setSelectedValue(selectedFamily); // Set the selected family if this is the selected dropdown
    } else if (list.length > 0) {
      setSelectedValue(list[0].category); // Default to the first category if no selected family
    }
  }, [selectedIndex, selectedFamily, list]);

  return (
    <FormControl sx={{ m: 1, width: 200 }} size="small">
      <Select
        value={selectedFamily || selectedValue} // Use selectedFamily if available, otherwise fallback to local state
        style={{ backgroundColor: "#fff", padding: 5, color: "#787885" }}
        disabled={disabled} // Disable if the props.disabled is true
        onChange={handleChange} // Trigger handleChange when selection changes
      >
        {list.map((row, idx) => (
          <MenuItem key={idx} value={row.category}>
            {row.category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
