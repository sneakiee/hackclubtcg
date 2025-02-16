import Hero from "./components/hero";
import About from "./components/about";
import Cards from "./components/cards";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main>
        <div>
          <NavBar/>
          <div>
            <Hero/>
          </div>
          <div>
            <About/>
        
            <Cards/>
          </div>
        </div>
    </main>
  );
}
