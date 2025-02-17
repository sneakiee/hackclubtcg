import ApocalypseCards from "./apocalypsecards";
import CounterspellCards from "./counterspellcards";

export default function Cards() {
    return(
        <div className="bg-slate-950 py-10 place-items-center">
            <div>
                <h1 className="uppercase text-5xl font-bold py-10">
                    collect them all!
                </h1>
            </div>
            
            <ApocalypseCards/>
            <CounterspellCards/>
        </div>
    )
}