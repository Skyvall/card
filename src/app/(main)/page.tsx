import Hero from "./sections/hero";
import About from "./sections/about";
import Portfolio from "./sections/portfolio";
import Kontakt from "./sections/kontakt";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Kontakt />
    </main>
  );
}
