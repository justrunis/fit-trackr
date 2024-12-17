import React from "react";
import { Grid, Card, Button, Typography, Paper } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function FoodList({ foods, handleDelete }) {
  return (
    <>
      {foods.length > 0 && (
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "start", marginTop: 2 }}
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
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    fontWeight: 600,
                  }}
                >
                  {food?.food_name} ({food?.quantity})
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
                  {(food?.nf_calories * food?.quantity).toFixed(2)} Cal
                </Typography>
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
      )}

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
          Total:{" "}
          {foods
            .reduce((acc, food) => acc + food.nf_calories * food.quantity, 0)
            .toFixed(2)}{" "}
          Cal
        </Typography>
      </Paper>
    </>
  );
}
