import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import TopBanner from "@/components/TopBanner";
import theme from "@/thame";
import { ThemeProvider } from "@emotion/react";
import "simplebar/dist/simplebar.min.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <TopBanner />
        <AboutMe />
        <Skills />
        <Footer />
        {/* </SimpleBar> */}
      </ThemeProvider>
    </>
  );
}

export default App;
