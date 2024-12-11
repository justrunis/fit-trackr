import React, { useState } from "react";
import {
  Container,
  Box,
  CircularProgress,
  Card,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getNaturalNutrients } from "../api/http";
import NutrientSearch from "../components/Nutrients/NutrientSearch";
import FoodCard from "../components/Nutrients/FoodCard";
import FoodList from "../components/Nutrients/FoodList";
import ErrorIndicator from "../components/UI/ErrorIndicator";

export default function Nutrients() {
  const [inputValue, setInputValue] = useState(""); // Input controlled state
  const [query, setQuery] = useState(""); // State that triggers query
  const [quantity, setQuantity] = useState(1); // Add quantity state
  const [foods, setFoods] = useState([]); // List of added foods

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["natural-nutrients", query],
    queryFn: () => getNaturalNutrients({ search: query }),
    enabled: !!query,
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });

  const food = data?.foods?.[0];

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
      <Box>
        <Typography variant="h4" gutterBottom>
          Calory calculator
        </Typography>
      </Box>
      <NutrientSearch
        inputValue={inputValue}
        setInputValue={setInputValue}
        setQuery={setQuery}
        setQuantity={setQuantity}
      />

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
        <FoodCard
          food={food}
          quantity={quantity}
          setQuantity={setQuantity}
          handleAdd={handleAdd}
        />
      )}

      <FoodList foods={foods} handleDelete={handleDelete} />
    </Container>
  );
}
