import Title from "./components/title"
import About from "./components/about"
import Cards from "./components/cards"

export default function Home() {
  return (
    <main>
        <div>
          <div>
            <Title/>
          </div>
          <div className="relative">
            <About/>
        
            <Cards/>
          </div>
        </div>
    </main>
  );
}
