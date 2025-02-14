import Image from "next/image"
import artist from "../art/cards/counterspell/1_artist.png"
import musician from "../art/cards/counterspell/2_musician.png"
import coder from "../art/cards/counterspell/3_coder.png"

export default function CounterspellCards() {
    return(
        <div className="flex flex-col justify-center items-center text-center py-10">
            <div className="flex flex-wrap justify-center xl:justify-between max-w-8x1 gap-4 py-2">
                <div>
                    <Image 
                    src={artist}
                    className="rounded-lg h-auto w-72"  
                    alt="Artist"/>
                </div>
                <div>
                    <Image 
                    src={musician}
                    className="rounded-lg h-auto w-72"  
                    alt="Musician"/>
                </div>
                <div>
                    <Image 
                    src={coder}
                    className="rounded-lg h-auto w-72"  
                    alt="Coder"/>
                </div>
            </div>
        </div>
    )
}