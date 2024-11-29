import React, { useState } from "react";
import "./Dashboard.css";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Select from "../components/UI/Select";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const activityLevelOptions = [
  { value: "sedentary", label: "Sedentary" },
  { value: "lightly_active", label: "Lightly Active" },
  { value: "moderately_active", label: "Moderately Active" },
  { value: "very_active", label: "Very Active" },
  { value: "extra_active", label: "Extra Active" },
];

const Dashboard = () => {
  const [userData, setUserData] = useState({
    weight: 0,
    height: 0,
    age: 0,
    gender: "male",
    activityLevel: "sedentary",
  });
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const calculateCalories = () => {
    // calculating based on this formula
    // https://mohap.gov.ae/en/more/awareness-center/calories-calculation
    const { weight, height, age, gender, activityLevel } = userData;

    if (!weight || !height || !age) return;

    // Calculate BMR based on gender
    let bmr = 0;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Apply activity factor
    let activityFactor = 1.2; // Default sedentary
    switch (activityLevel) {
      case "sedentary":
        activityFactor = 1.2;
        break;
      case "lightly_active":
        activityFactor = 1.375;
        break;
      case "moderately_active":
        activityFactor = 1.55;
        break;
      case "very_active":
        activityFactor = 1.725;
        break;
      case "extra_active":
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1.2;
    }

    const totalCalories = bmr * activityFactor;
    setCaloriesBurned(totalCalories);
  };

  return (
    <div className="dashboard">
      <h1>Calorie Calculator</h1>
      <div className="input-grid">
        <Input
          label="Weight (kg):"
          type="number"
          value={userData.weight}
          onChange={handleInputChange}
          placeholder="e.g., 70"
          name="weight"
        />
        <Input
          label="Height (cm):"
          type="number"
          value={userData.height}
          onChange={handleInputChange}
          placeholder="e.g., 175"
          name="height"
        />
        <Input
          label="Age (years):"
          type="number"
          value={userData.age}
          onChange={handleInputChange}
          placeholder="e.g., 25"
          name="age"
        />
      </div>

      <div className="input-grid">
        <Select
          label="Gender"
          name="gender"
          value={userData.gender}
          options={genderOptions}
          onChange={handleInputChange}
        />
        <Select
          label="Activity Level"
          name="activityLevel"
          value={userData.activityLevel}
          options={activityLevelOptions}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Button onClick={calculateCalories}>Calculate Total Calories</Button>
      </div>
      <div className="result">
        <h2>Total Daily Calories Needed: {caloriesBurned.toFixed(2)} kcal</h2>
      </div>
    </div>
  );
};

export default Dashboard;
