import image from "../../assets/hero.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import PestControlOutlinedIcon from "@mui/icons-material/PestControlOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import Button from "@mui/material/Button";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Features() {
  return (
    <>
      <Container
        fixed
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "160px auto 40px auto",
        }}
      >
        <Box
          className="featuercontainer"
          sx={{ position: "absolute", top: "410px" }}
        >
          <Box
            className="featuerimg"
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              width: "642px",
              height: "330px",
              margin: "auto",
            }}
          ></Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: "#003648",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "20px",
              lineHeight: "1.5",
              fontSize: { sm: "28px", md: "62px" },
            }}
          >
            Get help from vetted software developers
          </Typography>
          {/* 1 */}
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid
              size={{ xs: 12, sm: 7, md: 6 }}
              sx={{
                display: "flex",
                paddingTop: { sm: "0", md: "100px" },
                order: { xs: "2", sm: "2", md: "1" },
              }}
            >
              <Box sx={{ width: { xs: "100%", sm: "100%", md: "75%" } }}>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    color: { xs: "rgb(204 204 204)", sm: "#003648" },
                    fontWeight: "600",
                    marginBottom: "20px",
                    lineHeight: "1.5",
                    fontSize: { xs: "32px", sm: "32px", md: "3rem" },
                  }}
                >
                  One-on-one live <br />
                  mentorship
                </Typography>
                <ul style={{ listStyle: "none", marginBottom: "20px" }}>
                  <li>
                    <span>
                      <PestControlOutlinedIcon />
                    </span>
                    Debug with the help of an expert
                  </li>
                  <li>
                    <span>
                      <PersonOutlineOutlinedIcon />
                    </span>
                    Personalize your learning experience
                  </li>
                  <li>
                    <span>
                      <FeedOutlinedIcon />
                    </span>
                    Get answers to complex problems
                  </li>
                </ul>
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
                  Find A Mentor
                </Button>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 6 }}
              sx={{
                paddingBottom: "20px",
                order: { sx: "1", sm: "1", md: "2" },
              }}
            >
              <img
                src="https://next-cdn.codementor.io/images/landing-page/mentorship@2x.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>

          {/* 2 */}
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginTop: { sm: "50px", md: "0" } }}
          >
            <Grid
              size={{ xs: 12, sm: 12, md: 6 }}
              sx={{ paddingBottom: "20px" }}
            >
              <img
                src="https://next-cdn.codementor.io/images/landing-page/freelance-job@2x.png"
                alt=""
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 7, md: 6 }}
              sx={{ display: "flex", paddingTop: { sm: "0", md: "100px" } }}
            >
              <Box>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    color: { xs: "rgb(204 204 204)", sm: "#003648" },
                    fontWeight: "600",
                    marginBottom: "20px",
                    lineHeight: "1.5",
                    fontSize: { xs: "32px", sm: "32px", md: "3rem" },
                  }}
                >
                  Project-based freelance work
                </Typography>
                <ul style={{ listStyle: "none", marginBottom: "20px" }}>
                  <li>
                    <span>
                      <FindInPageRoundedIcon />
                    </span>
                    Find experts for on-demand code review
                  </li>
                  <li>
                    <span>
                      <PersonIcon />
                    </span>
                    Build features for your existing product
                  </li>
                  <li>
                    <span>
                      <RocketLaunchOutlinedIcon />
                    </span>
                    Turn your idea into an MVP
                  </li>
                </ul>
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
                  Find A Freelancer
                </Button>
              </Box>
            </Grid>
          </Grid>
          {/* 3 */}
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid
              size={{ xs: 12, sm: 12, md: 6 }}
              sx={{ order: { sm: "2", md: "1" } }}
            >
              <img
                src="https://next-cdn.codementor.io/images/landing-page/visit-arc.svg"
                alt=""
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 6 }}
              sx={{
                display: "flex",
                paddingTop: "80px",
                order: { sm: "1", md: "2" },
              }}
            >
              <Box
                sx={{ textAlign: { xs: "center", sm: "center", md: "left" } }}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    color: "black",
                    fontWeight: "500",
                    marginBottom: "20px",
                    lineHeight: "1.5",
                  }}
                >
                  arc( )
                </Typography>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    color: "#003648",
                    fontWeight: "600",
                    marginBottom: "20px",
                    lineHeight: "1.5",
                  }}
                >
                  Hiring for a bigger project?
                </Typography>

                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    color: "rgb(102, 102, 102)",
                    marginBottom: "20px",
                  }}
                >
                  Arc helps you find senior developers for both permanent
                  full-time roles and 40+ hour contract projects.
                </Typography>

                <Button
                  variant="text"
                  sx={{
                    color: "rgb(7, 90, 255)",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Visit Arc to learn more
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
