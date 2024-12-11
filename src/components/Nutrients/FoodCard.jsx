import React from "react";
import { Box, Card, Typography, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { makeFirstLetterUpperCase } from "../../utils/formatting";

export default function FoodCard({ food, quantity, setQuantity, handleAdd }) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 600,
        padding: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        boxShadow: 3,
      }}
    >
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
          sx={{ mx: 1, fontSize: { xs: "1rem", md: "1.25rem" } }}
        >
          {quantity}
        </Typography>
        <IconButton onClick={() => setQuantity(quantity + 1)} size="small">
          <AddIcon />
        </IconButton>
      </Box>

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        sx={{ width: { xs: "100%", md: "auto" }, mt: { xs: 2, md: 0 } }}
        onClick={() => handleAdd({ ...food, quantity })}
      >
        Add
      </Button>
    </Card>
  );
}
