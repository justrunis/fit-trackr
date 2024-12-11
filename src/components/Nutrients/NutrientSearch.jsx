import React from "react";
import { Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function NutrientSearch({
  inputValue,
  setInputValue,
  setQuery,
  setQuantity,
}) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", marginBottom: 2, gap: 2 }}
    >
      <TextField
        label="Search for a food"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        onClick={() => {
          setQuantity(1);
          setQuery(inputValue);
        }}
      >
        Search
      </Button>
    </Box>
  );
}
