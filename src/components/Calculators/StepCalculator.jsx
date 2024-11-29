import Input from "../UI/Input";
import Select from "../UI/Select";
import Button from "../UI/Button";
import { useState } from "react";
import "./StepCalculator.css";

export default function StepCalculator() {
  const [formData, setFormData] = useState({
    steps: 0,
    height: 0,
    gender: "male",
    distance: null,
  });

  // Function to handle changes to any input field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle distance calculation
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

  return (
    <div className="step-calculator">
      <h2>Steps to Kilometers Calculator</h2>
      <div className="input-grid">
        <Input
          label="Number of steps"
          type="number"
          name="steps"
          value={formData.steps}
          onChange={handleInputChange}
        />

        <Input
          label="Height (in cm)"
          type="number"
          name="height"
          value={formData.height}
          onChange={handleInputChange}
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
      <div>
        <Button onClick={calculateDistance}>Calculate Distance</Button>
      </div>
      {formData.distance !== null && (
        <div>
          <h3>Total Distance: {formData.distance.toFixed(2)} km</h3>
        </div>
      )}
    </div>
  );
}
