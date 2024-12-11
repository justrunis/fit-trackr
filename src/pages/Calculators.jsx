import { Container, Grid, Typography } from "@mui/material";

import CalorieCalculator from "../components/Calculators/CalorieCalculator";
import StepCalculator from "../components/Calculators/StepCalculator";
import BMICalculator from "../components/Calculators/BMICalculator";

export default function Calculators() {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Fitness Calculators
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <CalorieCalculator />
        </Grid>

        <Grid item xs={12} sm={4}>
          <StepCalculator />
        </Grid>

        <Grid item xs={12} sm={4}>
          <BMICalculator />
        </Grid>
      </Grid>
    </Container>
  );
}
