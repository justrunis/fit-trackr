import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Box,
} from "@mui/material";
import { useState } from "react";
import ExerciseCardList from "../components/Exercises/ExerciseCardList";
import {
  exerciseDifficulty as difficulty,
  exerciseMuscles as muscles,
  exerciseTypes as types,
} from "../utils/constants";
import SearchIcon from "@mui/icons-material/Search";

export default function Exercises() {
  const [inputs, setInputs] = useState({
    type: "",
    muscle: "",
    difficulty: "",
  });

  const [triggerSearch, setTriggerSearch] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    setTriggerSearch((prev) => prev + 1);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Exercise Finder
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  name="type"
                  value={inputs.type}
                  onChange={handleInputChange}
                >
                  {types.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Muscle</InputLabel>
                <Select
                  name="muscle"
                  value={inputs.muscle}
                  onChange={handleInputChange}
                >
                  {muscles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Difficulty</InputLabel>
                <Select
                  name="difficulty"
                  value={inputs.difficulty}
                  onChange={handleInputChange}
                >
                  {difficulty.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<SearchIcon />}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <ExerciseCardList
          type={inputs.type}
          muscle={inputs.muscle}
          difficulty={inputs.difficulty}
          triggerSearch={triggerSearch}
        />
      </Box>
    </>
  );
}
