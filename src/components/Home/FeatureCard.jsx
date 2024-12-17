import { useNavigate } from "react-router-dom";
import { Button, Typography, Avatar, CardActions, Card } from "@mui/material";

export default function FeatureCard({
  title,
  description,
  buttonText,
  buttonColor,
  icon,
  bgColor,
  navigateTo,
}) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Avatar sx={{ bgcolor: bgColor, mb: 2 }}>{icon}</Avatar>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        {description}
      </Typography>
      <CardActions>
        <Button
          variant="contained"
          color={buttonColor}
          size="small"
          onClick={() => navigate(navigateTo)}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}
