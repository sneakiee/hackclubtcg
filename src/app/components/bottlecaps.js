"use client";
import Image from "next/image"
import React, { useState } from "react"
import blueCaps from "../art/bluecaps.png"
import greenCaps from "../art/greencaps.png"

export default function BottleCaps({bCaps, gCaps, handleBCClick}) {
    return (
        <div className="flex flex-wrap justify-center items-center py-10">
            <div className="px-5">
                <button className="bg-slate-500 text-sm rounded-lg p-2" onClick={handleBCClick}>
                    get bottlecaps
                </button>
            </div>
            <div className="flex flex-wrap items-center px-5">
                <Image
                    src={blueCaps}
                    className="w-16"
                    alt="Blue Bottle Caps"
                />
                <p>
                    {bCaps}
                </p>
            </div>
            <div className="flex flex-wrap items-center px-5">
                <Image
                    src={greenCaps}
                    className="w-16"
                    alt="Green Bottle Caps"
                />
                <p>
                    {gCaps}
                </p>
            </div>
        </div>
    )
}