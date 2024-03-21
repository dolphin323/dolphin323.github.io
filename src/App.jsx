import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";

import Yelizaveta_Brus_Resume from "./assets/Yelizaveta_Brus_Resume.pdf";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <About />
          <StarsCanvas />
        </div>
        <Experience />
      </div>
    </BrowserRouter>
  );
};

export default App;
