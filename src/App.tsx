import gsap from "gsap";

import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import FirstVideo from "./sections/FirstVideo";

import { ScrollTrigger } from "gsap/all";
import Jason from "./sections/Jason";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
      <Jason />
    </main>
  );
};

export default App;
