import Image from "next/image";
import ApocalypseCards from "./components/apocalypsecards";
import CounterspellCards from "./components/counterspellcards"

export default function Home() {
  return (
    <main>
      <ApocalypseCards/>
      <CounterspellCards/>
    </main>
  );
}
