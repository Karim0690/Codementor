import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import DeveloperCard from "../devsCard/DeveloperCard";
import Button from "@mui/material/Button";

export default function Devs() {
  const devsData = [
    {
      name: "Jessamyn Smith",
      avatar:
        "https://next-cdn.codementor.io/images/landing-page/developers/jessamyn-smith.png",
      title: "Experienced Full-Stack Web Developer",
      skills: [
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/python-plain.svg",
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/sql-plain.svg",
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/django-plain.svg",
      ],
    },
    {
      name: "Daniel Hamilton",
      avatar:
        "https://next-cdn.codementor.io/images/landing-page/developers/dan-hamilton.png",
      title: "Senior Software Engineer @ Indeed",
      skills: [
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/javascript-plain.svg",
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/reactjs-plain.svg",
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/ruby-on-rails-plain.svg",
      ],
    },
    {
      name: "Martijn Pieters",
      avatar:
        "https://next-cdn.codementor.io/images/landing-page/developers/martijn-pieters.png",
      title: "#1 Stack Overflow Python Answerer",
      skills: [
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/python-plain.svg",
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/html-css-plain.svg",
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/flask-plain.svg",
      ],
    },
    {
      name: "Ionică Bizău",
      avatar:
        "https://next-cdn.codementor.io/images/landing-page/developers/ionica-bizau.png",
      title: "Full-Stack Developer",
      skills: [
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/javascript-plain.svg",
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/nodejs-plain.svg",
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/html-css-plain.svg",
      ],
    },
    {
      name: "Miroslav Kuťák",
      avatar:
        "https://next-cdn.codementor.io/images/landing-page/developers/miroslav-kutak.png",
      title: "Senior iOS Developer",
      skills: [
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/ios-plain.svg",
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/swift-plain.svg",
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/objective-c-plain.svg",
      ],
    },
    {
      name: "Ben Gottlieb",
      avatar:
        "https://next-cdn.codementor.io/images/landing-page/developers/ben-gottlieb.png",
      title: "Senior iOS Developer and Consultant",
      skills: [
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/objective-c-plain.svg",
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/swift-plain.svg",
        "https://da2f8uix4p8om.cloudfront.net/20231208igj0jiqhzes/categories/ios-plain.svg",
      ],
    },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundImage: "linear-gradient(236deg, #006080, #003648)",
          textAlign: "center",
          padding: "80px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            padding: "20px 0",
            color: "#fff",
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "20px",
              lineHeight: "1.5",
              fontSize: { xs: "36px", sm: "36px", md: "3rem" },
            }}
          >
            Connect with
            <br />
            12000+ top developers anytime
          </Typography>
        </Box>
        <Box sx={{ margin: "30px auto 0 auto" }}>
          <Grid
            container
            spacing={{ xs: 0, md: 0 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ justifyContent: "center", margin: "auto" }}
          >
            {devsData.map((dev, index) => (
              <DeveloperCard
                key={index}
                name={dev.name}
                avatar={dev.avatar}
                title={dev.title}
                skills={dev.skills}
                className={`dev-${index}`}
              />
            ))}
          </Grid>
        </Box>
        <Typography
          variant="h5"
          component="h4"
          sx={{
            margin: { xs: "40px 0 20px", sm: "40px 0 20px", md: "40px 0 0" },
            textAlign: "center",
            fontWeight: "bold",
            lineHeight: "1.5",
            color: "white",
          }}
        >
          Start working with our developers
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
          Get Started
        </Button>
      </Box>
    </>
  );
}
