import { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";

export default function StepCalculator() {
  const [formData, setFormData] = useState({
    steps: 0,
    height: 0,
    gender: "male",
    distance: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateDistance = () => {
    const { steps, height, gender } = formData;

    const heightInMeters = height / 100;

    let stepLength;
    if (gender === "male") {
      stepLength = 0.415 * heightInMeters; // male step length formula
    } else {
      stepLength = 0.413 * heightInMeters; // female step length formula
    }

    const totalDistanceInMeters = stepLength * steps; // distance in meters
    const totalDistanceInKilometers = totalDistanceInMeters / 1000; // convert meters to kilometers

    setFormData((prevData) => ({
      ...prevData,
      distance: totalDistanceInKilometers,
    }));
  };

  const resetCalculator = () => {
    setFormData({
      steps: "",
      height: "",
      gender: "male",
      distance: null,
    });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Steps to Kilometers Calculator
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Number of steps"
              type="number"
              fullWidth
              name="steps"
              value={formData.steps}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Height (in cm)"
              type="number"
              fullWidth
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>

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
                onClick={calculateDistance}
              >
                Calculate
              </Button>
              {formData.distance !== null && formData.distance > 0 && (
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

        {formData.distance !== null && formData.distance > 0 && (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="h6">
              Total Distance: {formData.distance.toFixed(2)} km
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
