"use client";
import Image from "next/image"
import React, { useState } from "react"
import BottleCaps from "./bottlecaps";
import cardBack from "../art/cards/apocalypse/0_cardback.png"
import CardShow from "./cardshow";
import ApocalypseCards from "./apocalypsecards";
import CounterspellCards from "./counterspellcards";


export default function PackRip() {


    return(
        <div>
            <div className="flex flex-wrap justify-center items-center py-10">
                <BottleCaps/>
            </div>
            <section className="cards">
                {[...Array(3)].map((_, index) => (
                    <CardShow
                        key={index}
                        id={`card-${index + 1}`}
                        frontSrc={cardBack}
                        frontAlt="Card Back"
                        backText="dis a card fr"
                    />
                ))}
            </section>
            <div className="bg-slate-950 py-10 place-items-center">
                <div>
                    <h1 className="uppercase text-5xl font-bold py-10">
                        collect them all!
                    </h1>
                </div>
                        
                <ApocalypseCards/>
                <CounterspellCards/>
            </div>
        </div>
    )
}