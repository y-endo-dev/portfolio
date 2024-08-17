import Logo from "@/logo.png";
import { AppBarCategories } from "@/types";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";

const pages: AppBarCategories[] = [
  {
    id: "top",
    title: "top",
  },
  {
    id: "profile",
    title: "Profile",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "contact",
    title: "English",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar id="header" position="fixed" sx={{ background: "#282c37" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* アイコン（Avatar） */}
          <Tooltip title="Top Page">
            <Avatar
              src={Logo}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </Tooltip>

          {/* スマホ表示用のメニューアイコン */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Scroll
                  key={page.title + "_scroll"}
                  to={page.id}
                  smooth={true}
                  duration={800}
                >
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Scroll>
              ))}
            </Menu>
          </Box>

          {/* スマホ表示用のタイトル */}
          <Avatar
            src={Logo}
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
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
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            U-MAP
          </Typography>

          {/* デスクトップ表示用のナビゲーションボタン */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
              letterSpacing: ".2rem",
            }}
          >
            {pages.map((page) => (
              <Scroll
                key={page.title + "_scroll"}
                to={page.id}
                smooth={true}
                duration={500}
                spy={true}
              >
                <Button
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  {page.title}
                </Button>
              </Scroll>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
