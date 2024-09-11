import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ComputerIcon from "@mui/icons-material/Computer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function Header() {
  const pages = ["Mentorship", "Expert help", "Freelancing", "More"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ComputerIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "black",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "black",
                textDecoration: "none",
              }}
            >
              Codementor
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                color: "black",
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ color: "black" }}
                  >
                    <Typography sx={{ textAlign: "center", color: "black" }}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "black",
                        borderColor: "black",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      Log in
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "black", width: "100%" }}
                    >
                      Sign Up
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button sx={{ textAlign: "center", color: "black" }}>
                      Become a Mentor
                    </Button>
                  </MenuItem>
                </Box>
              </Menu>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Codementor
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "flex" }}
                  endIcon={<ArrowDropDownIcon />}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex" },
                color: "black",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button
                className="headerbtns"
                sx={{
                  my: 2,
                  color: "black",
                  display: { md: "block" },
                }}
              >
                Become a Mentor
              </Button>
              <Button
                className="headerbtns"
                sx={{
                  my: 2,
                  color: "black",
                  display: { md: "block" },
                }}
              >
                Log in
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "black" }}>
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
