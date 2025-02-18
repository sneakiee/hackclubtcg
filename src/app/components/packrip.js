"use client";
import Image from "next/image"
import React, { useState } from "react"
import CardShow from "./cardshow"
import BottleCaps from "./bottlecaps";


export default function PackRip() {
    const [bCaps, setBCaps] = useState(0)
        const [gCaps, setGCaps] = useState(0)
    
        const handleBCClick = () => {
            if (bCaps == 4) {
                setBCaps(bCaps % 4)
                setGCaps(gCaps + 1)
            } else {
                setBCaps(bCaps + 1)
            }
        }
        
        const removeCaps = () => {
            setGCaps(gCaps - 5);
        };

    return(
        <div>
            <BottleCaps
                bCaps={bCaps}
                gCaps={gCaps}
                handleBCClick={handleBCClick}
            />
            <section>
                <CardShow gCaps={gCaps} removeCaps={removeCaps}/>
            </section>
        </div>
    )
}