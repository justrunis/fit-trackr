import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Container,
  TextField,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getNaturalNutrients } from "../api/http";
import ErrorIndicator from "../components/UI/ErrorIndicator";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Nutrients() {
  const [inputValue, setInputValue] = useState("Banana"); // Input controlled state
  const [query, setQuery] = useState(""); // State that triggers query
  const [quantity, setQuantity] = useState(1); // Add quantity state

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["natural-nutrients", query],
    queryFn: () => getNaturalNutrients({ search: query }),
    enabled: !!query, // Only fetch when query is not empty
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });

  const food = data?.foods?.[0]; // Get first food item

  return (
    <Container>
      <TextField
        label="Search for a food"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update input value
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setQuery(inputValue)} // Set query to trigger search
      >
        Search
      </Button>

      {isLoading && <CircularProgress sx={{ mt: 2 }} />}

      {isError && <ErrorIndicator message={error.message} />}

      {food && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              width: "80%",
              maxWidth: 600,
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={food?.photo?.thumb} alt={food?.food_name} />
            <Typography variant="h4" gutterBottom>
              {food?.food_name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {food?.nf_calories} Calories
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1" gutterBottom>
                {quantity}
              </Typography>
              <IconButton onClick={() => setQuantity(quantity + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Card>
        </Box>
      )}
    </Container>
  );
}
