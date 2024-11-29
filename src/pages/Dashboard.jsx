import React, { useState } from "react";
import "./Dashboard.css";

import CalorieCalculator from "../components/Calculators/CalorieCalculator";
import StepCalculator from "../components/Calculators/StepCalculator";
import BMICalculator from "../components/Calculators/BMICalculator";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <CalorieCalculator />
      <StepCalculator />
      <BMICalculator />
    </div>
  );
}
