import ApocalypseCards from "./apocalypsecards";
import CounterspellCards from "./counterspellcards";

export default function Cards() {
    return(
        <div className="bg-slate-950 py-10">
            <ApocalypseCards/>
            <CounterspellCards/>
        </div>
    )
}