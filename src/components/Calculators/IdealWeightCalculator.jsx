import { useState } from "react";
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

export default function IdealWeightCalculator() {
  const [formData, setFormData] = useState({
    height: 0,
    age: 0,
    gender: "male",
  });

  const [idealWeight, setIdealWeight] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetCalculator = () => {
    setFormData({
      height: 0,
      age: 0,
      gender: "male",
    });
    setIdealWeight(0);
  };

  /**
   * Calculate ideal weight based on height and age.
   *
   * @param {Object} formData - Form data containing height, age and gender.
   *
   * @returns {void} - Sets the ideal weight in the state.
   *
   * The ideal weight is calculated using the formula:
   * idealWeight = idealBMI * (heightInMeters)^2
   *
   * The idealBMI is set to 22 for women and 22.5 for men. For people
   * above the age of 50, the idealBMI is set to 23.
   */
  const calculateIdealWeight = () => {
    const { height, age, gender } = formData;

    const heightInMeters = height / 100;
    let idealBMI = 22;

    if (age > 50) {
      idealBMI = 23;
    }

    if (gender === "male") {
      idealBMI = 22.5;
    }

    const idealWeight = idealBMI * heightInMeters * heightInMeters;

    setIdealWeight(idealWeight.toFixed(2));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Ideal Weight Calculator
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 2 }} gutterBottom>
          Calculate your ideal weight based on your height and age.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Height (cm)"
              variant="outlined"
              fullWidth
              name="height"
              value={formData.height}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
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
                onClick={calculateIdealWeight}
              >
                Calculate
              </Button>
              {idealWeight > 0 && (
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

        {idealWeight > 0 && (
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Your ideal weight is: {idealWeight} kg
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
