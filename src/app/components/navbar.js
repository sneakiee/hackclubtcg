"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Title from "../art/title.png"

export default function NavBar(){
    return(
        <div className="bg-slate-900 flex fixed justify-between items-center top-0 w-full">
            <Link href="/">
            <Image
            src={Title}
            className="object-cover h-24 w-64"
            alt="NavBar Logo"
            />
            </Link>

            <nav className="px-10">
                <Link href="/packrips">Open Packs</Link>
            </nav>
        </div>
    )
}