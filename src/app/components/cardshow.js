"use client";
import { useState } from "react";
import Image from "next/image"
import cardBack from "../art/cards/apocalypse/0_cardback.png"
import pack from "../art/pack1.png"
import "./cardshow.css"
import {
    hackyHacker, infectedOrpheus, survivorOrpheus, watcherOrpheus, skullpup, bats,
    trashPanda, hackoon, angryGoose, dragon, opossum, trojanVirus, murderOfCrows,
    otter, catHorde, ratHorde, cat, rat
} from "./apocalypsecards"
import { artist, musician, coder } from "./counterspellcards"

export default function CardShow({gCaps, removeCaps}) {
    const [openPack, setOpenPack] = useState(false);
    const [canOpen, setCanOpen] = useState(false);
    const [flippedCards, setFlippedCards] = useState([false, false, false]);
    const [cardFront, setCardFront] = useState([]);

    const possibleFronts = [
        <Image
            src={hackyHacker}
            alt="Hacky Hacker"
        />,
        <Image
            src={infectedOrpheus}
            alt="Infected Orpheus"
        />,
        <Image
            src={survivorOrpheus}
            alt="Survivor Orpheus"
        />,
        <Image
            src={watcherOrpheus}
            alt="Watcher Orpheus"
        />,
        <Image
            src={skullpup}
            alt="Skullpup"
        />,
        <Image
            src={bats}
            alt="Bats"
        />,
        <Image
            src={trashPanda}
            alt="Trash Panda"
        />,
        <Image
            src={hackoon}
            alt="Hackoon"
        />,
        <Image
            src={angryGoose}
            alt="Angry Goose"
        />,
        <Image
            src={dragon}
            alt="Dragon"
        />,
        <Image
            src={opossum}
            alt="Opossum"
        />,
        <Image
            src={trojanVirus}
            alt="Trojan Virus"
        />,
        <Image
            src={murderOfCrows}
            alt="Murder of Crows"
        />,
        <Image
            src={otter}  
            alt="Otter"
        />,
        <Image
            src={catHorde}
            alt="Cat Horde"
        />,
        <Image
            src={ratHorde}
            alt="Rat Horde"
        />,
        <Image
            src={cat}
            alt="cat"
        />,
        <Image
            src={rat}
            alt="rat"
        />,
        <Image
            src={artist} 
            alt="Artist"
        />,
        <Image
            src={musician}
            alt="Musician"
        />,
        <Image
            src={coder}
            alt="Coder"
        />
    ];

    const toggleCards = () => {
        
        if (gCaps >= 5) {
            if(!openPack){
                removeCaps(5);

                const randomCards = Array(3) 
                    .fill(null)
                    .map(() => possibleFronts[Math.floor(Math.random() * possibleFronts.length)]);
                setCardFront(randomCards);
                setFlippedCards([false, false, false]);
                setOpenPack(true);
            } else {
                setOpenPack(prevState => !prevState);
                setFlippedCards([false, false, false]);
            }
        } else {
            if(openPack){
                setOpenPack(prevState => !prevState);
                setOpenPack(false);
            }

            setCanOpen(false);
        }
    };

    const flipCard = (index) => {
        const newFlippedCards = [...flippedCards];
        newFlippedCards[index] = !newFlippedCards[index];
        setFlippedCards(newFlippedCards);
    };

    return (
        <div>
            <div className="flex relative justify-center items-center">
                <button onClick={toggleCards}>
                    {openPack ? 'Next Pack' : (<Image src={pack} className="pack-float max-h-auto max-w-lg" alt="pack"/>)}
                </button>
            </div>
            {openPack && (
                <div className="cards-container">
                    {flippedCards.map((isFlipped, index) => (
                        <div className={`card-container card-${index + 1}`} key={index} onClick={() => flipCard(index)}>
                            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <div className="card-wrapper">
                                            {cardFront[index]}
                                        </div>
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card-wrapper">
                                        <Image
                                        src={cardBack}
                                        alt="Back of the card"
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}