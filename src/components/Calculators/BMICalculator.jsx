import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

export default function BMICalculator() {
  const [formData, setFormData] = useState({
    weight: 0,
    height: 0,
    gender: "male",
    bmi: null,
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetCalculator = () => {
    setFormData({
      weight: "",
      height: "",
      gender: "male",
      bmi: null,
      category: "",
    });
  };

  const calculateBMI = () => {
    const { weight, height } = formData;

    if (weight && height) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      let calculatedBmi = weight / (heightInMeters * heightInMeters);
      setFormData((prevData) => ({
        ...prevData,
        bmi: calculatedBmi.toFixed(1),
      }));

      // Determine BMI category
      let category = "";
      if (calculatedBmi < 18.5) {
        category = "Underweight";
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        category = "Normal weight";
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        category = "Overweight";
      } else {
        category = "Obese";
      }
      setFormData((prevData) => ({
        ...prevData,
        category,
      }));
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          BMI Calculator
        </Typography>

        <Grid container spacing={2}>
          {/* Weight Input */}
          <Grid item xs={12}>
            <TextField
              label="Weight (kg)"
              type="number"
              fullWidth
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="Enter your weight (kg)"
            />
          </Grid>

          {/* Height Input */}
          <Grid item xs={12}>
            <TextField
              label="Height (cm)"
              type="number"
              fullWidth
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              placeholder="Enter your height (cm)"
            />
          </Grid>

          {/* Gender Select */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                label="Gender"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={calculateBMI}
              >
                Calculate BMI
              </Button>
              {formData.bmi && (
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={resetCalculator}
                >
                  Reset
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>

        {formData.bmi && (
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6">Your BMI: {formData.bmi}</Typography>
            <Typography variant="body1">
              Category: {formData.category}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
