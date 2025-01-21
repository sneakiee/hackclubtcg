import artist from "../art/cards/counterspell/1_artist.png"
import musician from "../art/cards/counterspell/2_musician.png"
import coder from "../art/cards/counterspell/3_coder.png"

export default function CounterspellCards() {
    <div className="flex flex-wrap justify-center xl:justify-between max-w-8x1 gap-8 py-10 w=full">
        <div>
            <img 
            src={artist}
            className="rounded-lg h-auto max-w-full"  
            alt="Artist"/>
        </div>
        <div>
            <img 
            src={musician}
            className="rounded-lg h-auto max-w-full"  
            alt="Musician"/>
        </div>
        <div>
            <img 
            src={coder}
            className="rounded-lg h-auto max-w-full"  
            alt="Coder"/>
        </div>
    </div>
}