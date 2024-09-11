import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <div className="hero">
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "auto",
            paddingTop: "105px",
            paddingBottom: "235px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Find a developer for <br />
            live mentorship & freelance projects{" "}
          </Typography>
          <Button
            className="herobtn"
            variant="contained"
            sx={{
              backgroundColor: "#FF6B54",
              fontWeight: "700",
              marginTop: "30px",
              padding: "0 32px",
            }}
          >
            Get Help Now
          </Button>
        </Box>
      </Container>
    </div>
  );
}
