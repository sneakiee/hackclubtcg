import Image from "next/image"
import counterspellTitle from "../art/cards/counterspell/counterspelltitle.png"
import artist from "../art/cards/counterspell/1_artist.png"
import musician from "../art/cards/counterspell/2_musician.png"
import coder from "../art/cards/counterspell/3_coder.png"

export default function CounterspellCards() {
    return(
        <div className="place-items-center py-16">
            <div className="align-middle">
                <Image
                src={counterspellTitle}
                className="w-72"
                alt="Counterspell Title"
                />
            </div>
            <div className="flex flex-wrap justify-center max-w-4xl gap-4 py-2">
                <div>
                    <Image 
                    src={artist}
                    className="rounded-lg h-auto w-32"  
                    alt="Artist"/>
                </div>
                <div>
                    <Image 
                    src={musician}
                    className="rounded-lg h-auto w-32"  
                    alt="Musician"/>
                </div>
                <div>
                    <Image 
                    src={coder}
                    className="rounded-lg h-auto w-32"  
                    alt="Coder"/>
                </div>
            </div>
        </div>
    )
}

export{
    artist, musician, coder
}