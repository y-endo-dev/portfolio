import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import "simplebar/dist/simplebar.min.css";

function App() {
  return (
    <>
      {/* <SimpleBar style={{ maxHeight: "100vh" }}> */}
      <Header />
      <TopBanner />
      <AboutMe />
      {/* <Skills /> */}
      <Footer />
      {/* </SimpleBar> */}
    </>
  );
}

export default App;
