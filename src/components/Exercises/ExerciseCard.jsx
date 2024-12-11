import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SpeedIcon from "@mui/icons-material/Speed";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ExerciseCard({ exercise }) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 6,
        },
      }}
      item
      key={exercise.instructions}
      xs={12}
      sm={6}
      md={6}
      lg={4}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {exercise.name}
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Paper
              elevation={2}
              sx={{ p: 2, textAlign: "center", alignItems: "stretch" }}
            >
              <SportsMartialArtsIcon color="primary" fontSize="large" />
              <Typography variant="body2" color="text.secondary" mt={1}>
                <strong>Type:</strong> {exercise.type}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper
              elevation={2}
              sx={{ p: 2, textAlign: "center", alignItems: "stretch" }}
            >
              <FitnessCenterIcon color="secondary" fontSize="large" />
              <Typography variant="body2" color="text.secondary" mt={1}>
                <strong>Muscle:</strong> {exercise.muscle}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper
              elevation={2}
              sx={{ p: 2, textAlign: "center", alignItems: "stretch" }}
            >
              <EngineeringIcon color="success" fontSize="large" />
              <Typography variant="body2" color="text.secondary" mt={1}>
                <strong>Equipment:</strong> {exercise.equipment}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper
              elevation={2}
              sx={{ p: 2, textAlign: "center", alignItems: "stretch" }}
            >
              <SpeedIcon color="warning" fontSize="large" />
              <Typography variant="body2" color="text.secondary" mt={1}>
                <strong>Difficulty:</strong> {exercise.difficulty}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 3,
            p: 2,
            borderRadius: 2,
          }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Instructions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{exercise.instructions}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </CardContent>
    </Card>
  );
}
