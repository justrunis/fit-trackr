import { Box, Typography } from "@mui/material";

const ErrorIndicator = ({ title, message }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        backgroundColor: "#f44336",
        color: "#fff",
        borderRadius: 1,
        margin: 2,
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{message}</Typography>
    </Box>
  );
};

export default ErrorIndicator;
