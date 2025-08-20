import { Box } from "@mui/material";
import AboutUs from "./components/AboutUs";
import Categories from "./components/Categories";
import Diferentials from "./components/Diferentials";
import FirstCTA from "./components/FirstCTA";
import Hero from "./components/Hero";
import LastCTA from "./components/LastCTA";
import Partners from "./components/Partners";
import ServicesDetails from "./components/ServicesDetails";

export default function Home() {

  return (
    <Box>
      <Hero />
      <Categories />
      <Diferentials />
      <Partners />
      <FirstCTA />
      <ServicesDetails />
      <AboutUs />
      <LastCTA />
    </Box>
  );
};