import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div
      style={{ backgroundColor: "black", color: "white", paddingTop: "2.3rem" }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            padding: "1em 0px 2.8em",
            justifyContent: { sm: "center", md: "left" },
            textAlign: { sm: "center", xs: "center" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid
            size={{ xs: 12, sm: 12, md: 5 }}
            sx={{
              marginRight: "1em",
              textAlign: { sm: "center", md: "left" },
            }}
          >
            <Box sx={{ marginBottom: "2.4em" }}>
              <Typography variant="h6" component="div" gutterBottom>
                Products
              </Typography>
              <div
                className="sect"
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  marginBottom: "10px",
                }}
              >
                <h4>Codementor</h4>
                <p style={{ fontSize: "14px" }}>
                  Find a mentor to help you in real time
                </p>
              </div>
              <div
                className="sect"
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  marginBottom: "10px",
                }}
              >
                <h4>Codementor Events</h4>
                <p style={{ fontSize: "14px" }}>
                  Attend and host virtual events for developers
                </p>
              </div>
              <div
                className="sect"
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  marginBottom: "10px",
                }}
              >
                <h4>DevProjects</h4>
                <p style={{ fontSize: "14px" }}>
                  Learn programming by building projects
                </p>
              </div>
              <div
                className="sect"
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  marginBottom: "10px",
                }}
              >
                <h4>Arc</h4>
                <p style={{ fontSize: "14px" }}>
                  Helping employers find talent for remote jobs
                </p>
              </div>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{ textAlign: { sm: "center", md: "left" } }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                <Typography variant="h6" component="div" gutterBottom>
                  Pages
                </Typography>
              </Box>
              <Box
                className="pagesBox"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  maxHeight: { sm: "300px", md: "200px" },
                  margin: { sm: "0 auto" },
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Become a Codementor
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  How It Works
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Find Mentors
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Find Freelancers
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Find a Tutor
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Community
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Blog
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Codementor For Students
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Codementor For Teams
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Code Review
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Pair Programming
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Best Web Design Software
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Coding Starter Kit
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Codementor Reviews
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "16px",
                  }}
                >
                  Best Language to Learn
                </p>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            padding: "1.5em 0px 1.8em",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              order: { xs: "2", sm: "1" },
              marginTop: { xs: "24px", sm: "0" },
            }}
          >
            <Typography variant="body2" sx={{ color: "white" }}>
              Copyright © {new Date().getFullYear()} Codementor.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "row" },
              order: { xs: "1", sm: "2" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                order: { xs: "2", sm: "1" },
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  marginRight: { xs: "0", sm: "16px" },
                  color: "rgb(204, 204, 204)",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Cookie Policy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginRight: { xs: "0", sm: "16px" },
                  color: "rgb(204, 204, 204)",
                  marginLeft: { xs: "16px", sm: "0" },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginRight: { xs: "0", sm: "16px" },
                  color: "rgb(204, 204, 204)",
                  marginLeft: { xs: "16px", sm: "0" },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Terms of Service
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginRight: { xs: "0", sm: "16px" },
                  color: "rgb(204, 204, 204)",
                  marginLeft: { xs: "16px", sm: "0" },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Careers
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginRight: { xs: "0", sm: "16px" },
                  color: "rgb(204, 204, 204)",
                  marginLeft: { xs: "16px", sm: "0" },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Help Center
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                order: { xs: "1", sm: "2" },
                marginBottom: { xs: "20px", sm: "0" },
              }}
            >
              <span className="icon-wrapper">
                <FontAwesomeIcon icon={faFacebook} className="icon-style" />
              </span>
              <span className="icon-wrapper">
                <FontAwesomeIcon icon={faTwitter} className="icon-style" />
              </span>
              <span className="icon-wrapper">
                <FontAwesomeIcon icon={faLinkedin} className="icon-style" />
              </span>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

/*<Grid container spacing={1}>
  <Grid size={4}>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Become a Codementor
    </p>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      How It Works
    </p>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Find Mentors
    </p>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Find Freelancers
    </p>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Find a Tutor
    </p>
  </Grid>
  <Grid size={4}>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Community
    </p>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Blog
    </p>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Codementor For Students
    </p>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Codementor For Teams
    </p>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Code Review
    </p>
  </Grid>
  <Grid size={4}>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Pair Programming
    </p>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Best Web Design Software
    </p>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Coding Starter Kit
    </p>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Codementor Reviews
    </p>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "16px",
      }}
    >
      Best Language to Learn
    </p>
  </Grid>
</Grid>;
*/
