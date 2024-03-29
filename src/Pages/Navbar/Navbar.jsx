import React, { useState, useEffect, useRef } from "react";

import {  Link,Button,Container,Typography,Box,Toolbar } from "@mui/material";

import "../Navbar/Navbar.css";

import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";


const Navbar = () => {
  const pages = [
    { name: "services", image: "nav-services.svg" },
    { name: "blogs", image: "nav-blog.svg" },
    { name: "login", image: "nav-login.svg" },
  ];

  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <Box>
      <Box
        bgcolor={"#FF914D"}
        color={"#fff !important"}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        padding={"0.8rem"}
      >
        <Box
          pr={"1.5rem"}
          alignSelf={"center"}
          textAlign={"center"}
          borderRight={"1px solid #dee2e6 !important"}
        >
          <Typography fontSize={"14px"} fontWeight={700}>
            VERIFIED EXPERTS
          </Typography>
        </Box>

        <Box textAlign={"center"} padding={"0 30px"}>
          <Rating
            name="text-feedback"
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon
                style={{ color: "white", fontSize: "14px", fontWeight: "100" }}
                fontSize="inherit"
              />
            }
          />
          <Typography fontSize={"14px"} fontWeight={700}>
            REVIEWED BY MILLIONS
          </Typography>
        </Box>

        <Box
          pl={"1.5rem"}
          alignSelf={"center"}
          textAlign={"center"}
          borderLeft={"1px solid #dee2e6 !important"}
        >
          <Typography fontSize={"14px"} fontWeight={700}>
            FREE QUOTES
          </Typography>
        </Box>
      </Box>

      <Box
        className={navRef.current}
        sx={{ color: "#343f52" }}
        py={{ md: "5px" }}
        display={"flex"}
        justifyContent={"center"}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              display={"flex"}
              width={"100%"}
              justifyContent={"space-between"}
              px={{ md: "70px", xs: "10px" }}
            >
              <Link href="/">
                <img
                  src="/Assets/Images/Logo2.png"
                  width={"110px"}
                  height={"75px"}
                  alt="logo"
                />
              </Link>

              <Box sx={{ display: { md: "flex", xs: "none" } }}>
                {pages.map((page) => (
                  <Link href={`/${page.name}`} color="inherit" underline="none">
                    {" "}
                    <Button
                      key={page.name}
                      
                      sx={{
                        my: 2,
                        display: "block",
                        color: "inherit",
                        textTransform: "capitalize",
                        fontSize: "18px",
                        fontWeight: "500",
                        textDecoration: "bold",
                        ":hover": { color: "#ff914d" },
                      }}
                    >
                      {page.name}
                    </Button>{" "}
                  </Link>
                ))}
              </Box>

              <Box sx={{ display: { md: "none", xs: "flex" } }}>
                <Link href="/" color="inherit" underline="none">
                  {" "}
                  <Button
                    sx={{
                      my: 2,
                      display: "block",
                      color: "inherit",
                      border: "1px solid",
                      px: "15px",
                      textTransform: "capitalize",
                      fontSize: "18px",
                      fontWeight: "500",
                      textDecoration: "bold",
                      ":hover": { color: "#ff914d" },
                    }}
                  >
                    Use App
                  </Button>{" "}
                </Link>
              </Box>

              <Box
                position={"fixed"}
                boxShadow={"rgba(0, 0, 0, 0.25) 0rem 0.25rem 0.25rem"}
                justifyContent={"space-between"}
                bottom={0}
                left={0}
                right={0}
                pt={"15px"}
                px={"15px"}
                zIndex={1000}
                borderTop={"1px solid #dee2e6 !important"}
                bgcolor={"#fff"}
                sx={{ display: { md: "none", xs: "flex" } }}
              >
                <Link href="/ " color="inherit" underline="none">
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <img
                      src="/Assets/Images/nav-home.svg"
                      width={"20px"}
                      height={"20px"}
                      alt="nav-home-icon"
                    />
                    <Button
                      sx={{
                        display: "block",
                        color: "inherit",
                        textTransform: "capitalize",
                        fontSize: "16px",
                        fontWeight: "500",
                        textDecoration: "bold",
                        ":hover": { color: "#ff914d" },
                      }}
                    >
                      Home
                    </Button>
                  </Box>
                </Link>
                {pages.map((page) => (
                  <Link href={`/${page.name}`} color="inherit" underline="none">
                    {" "}
                    <Box
                      key={page.name}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                    >
                      <img
                        src={`/Assets/Images/${page.image}`}
                        width={"20px"}
                        height={"20px"}
                        alt="nav-icon"
                      />
                      <Button
                        key={page.name}
                        sx={{
                          display: "block",
                          color: "inherit",
                          textTransform: "capitalize",
                          fontSize: "18px",
                          fontWeight: "500",
                          textDecoration: "bold",
                          ":hover": { color: "#ff914d" },
                        }}
                      >
                        {page.name}
                      </Button>
                    </Box>{" "}
                  </Link>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
