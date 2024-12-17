import { Container, Box, Card, Typography, Grid, Fade } from "@mui/material";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import FeatureCard from "../components/Home/FeatureCard";
import logo from "../../public/logo.png";

const cardData = [
  {
    title: "Exercises",
    description: "Discover workouts tailored to your fitness level and goals.",
    buttonText: "Explore Exercises",
    buttonColor: "primary",
    icon: <FitnessCenterIcon />,
    bgColor: "primary.main",
    navigateTo: "/exercises",
  },
  {
    title: "Nutrition",
    description:
      "Track your meals and maintain a balanced diet for better performance.",
    buttonText: "Track Meals",
    buttonColor: "secondary",
    icon: <FastfoodIcon />,
    bgColor: "secondary.main",
    navigateTo: "/nutrients",
  },
  {
    title: "Progress Tracking",
    description: "Monitor your progress and celebrate your achievements.",
    buttonText: "View Progress",
    buttonColor: "success",
    icon: <ShowChartIcon />,
    bgColor: "success.main",
    navigateTo: "/calculators",
  },
];

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Fade in={true} timeout={1000}>
          <Card sx={{ p: 4, boxShadow: 3, maxWidth: 600 }}>
            <img
              src={logo}
              alt="Fit Trackr Logo"
              style={{ maxWidth: "20%", height: "auto" }}
            />
            <Typography variant="h4" gutterBottom>
              Welcome to Fit Trackr!
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Your all-in-one fitness app to track workouts, meals, and
              progress. Stay motivated and reach your health goals with ease.
            </Typography>
            <Grid container spacing={4} sx={{ mt: 3 }}>
              {cardData.map((card, index) => (
                <Fade key={index} in={true} timeout={1000 + index * 1000}>
                  <Grid item xs={12} sm={4} key={index}>
                    <FeatureCard
                      title={card.title}
                      description={card.description}
                      buttonText={card.buttonText}
                      buttonColor={card.buttonColor}
                      icon={card.icon}
                      bgColor={card.bgColor}
                      navigateTo={card.navigateTo}
                    />
                  </Grid>
                </Fade>
              ))}
            </Grid>
            <Box sx={{ mt: 4 }}>
              <Typography variant="body2" color="text.secondary">
                Get started today and take control of your fitness journey!
              </Typography>
            </Box>
          </Card>
        </Fade>
      </Box>
    </Container>
  );
}
