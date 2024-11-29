import React, { useState } from "react";
import Input from "../UI/Input"; // Importing custom Input component
import Select from "../UI/Select"; // Importing custom Select component
import Button from "../UI/Button"; // Importing custom Button component
import "./BMICalculator.css";

export default function BMICalculator() {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
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

  const resetCalculator = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      weight: "",
      height: "",
      gender: "male",
      bmi: null,
      category: "",
    }));
  };

  const calculateBMI = () => {
    const { weight, height, gender } = formData;

    if (weight && height) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      let calculatedBmi = weight / (heightInMeters * heightInMeters);
      setFormData((prevData) => ({
        ...prevData,
        bmi: calculatedBmi.toFixed(1),
      }));

      // Determine BMI category
      if (calculatedBmi < 18.5) {
        setFormData((prevData) => ({
          ...prevData,
          category: "Underweight",
        }));
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setFormData((prevData) => ({
          ...prevData,
          category: "Normal weight",
        }));
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        setFormData((prevData) => ({
          ...prevData,
          category: "Overweight",
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          category: "Obese",
        }));
      }
    }
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>
      <div className="input-grid">
        <Input
          label="Weight (kg)"
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
          placeholder="Enter your weight (kg)"
        />
        <Input
          label="Height (cm)"
          type="number"
          name="height"
          value={formData.height}
          onChange={handleInputChange}
          placeholder="Enter your height (cm)"
        />
      </div>
      <Select
        label="Gender"
        name="gender"
        value={formData.gender}
        onChange={handleInputChange}
        options={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]}
      />
      <div className="flex-container">
        <Button onClick={calculateBMI}>Calculate BMI</Button>
        {formData.bmi && <Button onClick={resetCalculator}>Reset</Button>}
      </div>
      {formData.bmi && (
        <div className="bmi-result">
          <h3>Your BMI: {formData.bmi}</h3>
          <p>Category: {formData.category}</p>
        </div>
      )}
    </div>
  );
}
