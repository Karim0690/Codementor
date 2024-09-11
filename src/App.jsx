import "./App.css";
import Devs from "./component/devs/Devs";
import Features from "./component/features/Features";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Devs />
      <Footer />
    </>
  );
}

export default App;
