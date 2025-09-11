import gsap from "gsap";

import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import FirstVideo from "./sections/FirstVideo";

import { ScrollTrigger } from "gsap/all";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";
// import Lucia from "./sections/Lucia";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      {/* <Lucia /> */}
    </main>
  );
};

export default App;
