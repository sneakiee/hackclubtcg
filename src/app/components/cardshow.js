"use client";
import Image from "next/image";
import "./cardshow.css"
import {hackyHacker, infectedOrpheus, survivorOrpheus, watcherOrpheus, skullpup, bats,
        trashPanda, hackoon, angryGoose, dragon, opossum, trojanVirus, murderOfCrows, 
        otter, catHorde, ratHorde, cat, rat} from "./apocalypsecards"
import {artist, musician, coder} from "./counterspellcards"

const CardShow = ({id, frontSrc, frontAlt, backText}) => {
    return(
        <div className="card" id={id}>
            <div className="card-wrapper">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <Image
                        src={frontSrc}
                        width={1344}
                        height={1876}
                        alt={frontAlt}
                        />
                    </div>
                    <div className="flip-card-back">
                        <p>{backText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardShow