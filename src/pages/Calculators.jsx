import { Container, Grid, Typography } from "@mui/material";

import CalorieCalculator from "../components/Calculators/CalorieCalculator";
import StepCalculator from "../components/Calculators/StepCalculator";
import BMICalculator from "../components/Calculators/BMICalculator";
import IdealWeightCalculator from "../components/Calculators/IdealWeightCalculator";

export default function Calculators() {
  const gridItemProps = {
    md: 6,
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Fitness Calculators
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item {...gridItemProps}>
          <CalorieCalculator />
        </Grid>
        <Grid item {...gridItemProps}>
          <StepCalculator />
        </Grid>
        <Grid item {...gridItemProps}>
          <BMICalculator />
        </Grid>
        <Grid item {...gridItemProps}>
          <IdealWeightCalculator />
        </Grid>
      </Grid>
    </Container>
  );
}
