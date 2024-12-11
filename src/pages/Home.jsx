import {
  Container,
  Box,
  CircularProgress,
  Card,
  Typography,
  Button,
  Grid,
  Avatar,
  CardContent,
  CardActions,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Card sx={{ p: 4, boxShadow: 3, maxWidth: 600 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Fitness Trackr!
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Your all-in-one fitness app to track workouts, meals, and progress.
            Stay motivated and reach your health goals with ease.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 3 }}>
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Avatar sx={{ bgcolor: "primary.main", mb: 2 }}>
                  <FitnessCenterIcon />
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  Exercises
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Discover workouts tailored to your fitness level and goals.
                </Typography>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => navigate("/exercises")}
                  >
                    Explore Exercises
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Avatar sx={{ bgcolor: "secondary.main", mb: 2 }}>
                  <FastfoodIcon />
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  Nutrition
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Track your meals and maintain a balanced diet for better
                  performance.
                </Typography>
                <CardActions>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => navigate("/nutrients")}
                  >
                    Track Meals
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Avatar sx={{ bgcolor: "success.main", mb: 2 }}>
                  <ShowChartIcon />
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  Progress Tracking
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Monitor your progress and celebrate your achievements.
                </Typography>
                <CardActions>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={() => navigate("/calculators")}
                  >
                    View Progress
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
            <Typography variant="body2" color="text.secondary">
              Get started today and take control of your fitness journey!
            </Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
