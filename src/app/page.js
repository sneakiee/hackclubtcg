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
          <div className="bg-slate-900 place-items-center py-4">
            <div>
                <p>
                    created with love and fangirling... wait fanboying? by mikael ❤
                </p>
            </div>
            <div>
                <p>
                    thanks acon and artists (refer to cards) for the card designs 🙂
                </p>
            </div>
          </div>
        </div>
    </main>
  );
}
