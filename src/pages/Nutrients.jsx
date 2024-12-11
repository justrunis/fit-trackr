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
  Grid,
  Paper,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getNaturalNutrients } from "../api/http";
import ErrorIndicator from "../components/UI/ErrorIndicator";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SearchIcon from "@mui/icons-material/Search";
import { makeFirstLetterUpperCase } from "../utils/formatting";

export default function Nutrients() {
  const [inputValue, setInputValue] = useState(""); // Input controlled state
  const [query, setQuery] = useState(""); // State that triggers query
  const [quantity, setQuantity] = useState(1); // Add quantity state

  const [foods, setFoods] = useState([]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["natural-nutrients", query],
    queryFn: () => getNaturalNutrients({ search: query }),
    enabled: !!query, // Only fetch when query is not empty
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });

  const food = data?.foods?.[0]; // Get first food item

  const handleAdd = (currentFood) => {
    setFoods((prevFoods) => [...prevFoods, { ...currentFood, quantity }]);
  };

  const handleDelete = (index) => {
    setFoods((prevFoods) => {
      const newFoods = [...prevFoods];
      newFoods.splice(index, 1);
      return newFoods;
    });
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 2,
          gap: 2,
        }}
      >
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
          startIcon={<SearchIcon />}
          onClick={() => (setQuantity(1), setQuery(inputValue))} // Set query to trigger search
        >
          Search
        </Button>
      </Box>

      {isLoading && <CircularProgress sx={{ mt: 2 }} />}

      {isError && <ErrorIndicator message={error.message} />}

      {!food && !isLoading && !isError && (
        <Card sx={{ padding: 2 }}>
          <Typography variant="body1" gutterBottom>
            No food found
          </Typography>
        </Card>
      )}

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
              width: "100%",
              maxWidth: 600,
              padding: 2,
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2, // Space between elements
              boxShadow: 3, // Adds a subtle shadow for better visibility
            }}
          >
            {/* Image Section */}
            <img
              src={food?.photo?.thumb}
              alt={food?.food_name}
              style={{
                width: "100%",
                maxWidth: "150px",
                height: "150px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />

            {/* Food Info Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 600,
                }}
                gutterBottom
              >
                {makeFirstLetterUpperCase(food?.food_name)}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  color: "text.secondary",
                }}
                gutterBottom
              >
                {food?.nf_calories} Calories
              </Typography>
            </Box>

            {/* Quantity Controls */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: { xs: 2, md: 0 },
              }}
            >
              <IconButton
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                size="small"
              >
                <RemoveIcon />
              </IconButton>
              <Typography
                variant="body1"
                sx={{
                  mx: 1,
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                {quantity}
              </Typography>
              <IconButton
                onClick={() => setQuantity(quantity + 1)}
                size="small"
              >
                <AddIcon />
              </IconButton>
            </Box>

            {/* Add Button */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: { xs: "100%", md: "auto" },
                mt: { xs: 2, md: 0 },
              }}
              onClick={() => handleAdd({ ...food, quantity })}
            >
              Add
            </Button>
          </Card>
        </Box>
      )}

      {foods.length > 0 && (
        <Box sx={{ p: 2 }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            {foods.map((food, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    p: 2,
                    gap: 1,
                  }}
                >
                  <img
                    src={food?.photo?.thumb}
                    alt={food?.food_name}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      ml: { xs: 0, md: 2 },
                      mt: { xs: 2, md: 0 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "1rem", md: "1.25rem" },
                        fontWeight: 600,
                      }}
                    >
                      {makeFirstLetterUpperCase(food?.food_name)} (
                      {food?.quantity})
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: "0.875rem", md: "1rem" },
                      }}
                    >
                      {food?.nf_calories * food?.quantity} Total Calories
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteForeverIcon />
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 2,
              mt: 2,
              gap: 2,
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                fontWeight: 600,
                mt: 2,
              }}
            >
              Total Calories:{" "}
              {foods.reduce(
                (acc, food) => acc + food.nf_calories * food.quantity,
                0
              )}
            </Typography>
          </Paper>
        </Box>
      )}
    </Container>
  );
}
