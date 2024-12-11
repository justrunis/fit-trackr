import ExerciseCard from "./ExerciseCard";
import { getExercises } from "../../api/http";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress, Grid, Box, Typography } from "@mui/material";
import { useEffect } from "react";

export default function ExerciseCardList({
  type,
  muscle,
  difficulty,
  triggerSearch,
}) {
  const {
    data: exercises,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["exercises", type, muscle, difficulty],
    queryFn: () => getExercises({ muscle, type, difficulty }),
    enabled: false,
    staleTime: 5 * 60 * 1000,
  });

  const generateRandomKey = () => {
    return Math.floor(Math.random() * 1000);
  };

  useEffect(() => {
    if (triggerSearch) refetch();
  }, [triggerSearch, refetch]);

  return (
    <Grid container spacing={2}>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <CircularProgress />
        </Box>
      )}

      {exercises?.length === 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Typography variant="h6">No exercises found.</Typography>
        </Box>
      )}

      {exercises?.map((exercise) => (
        <Grid item xs={12} sm={6} md={4} key={generateRandomKey()}>
          <ExerciseCard exercise={exercise} />
        </Grid>
      ))}
    </Grid>
  );
}
