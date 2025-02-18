"use client";
import NavBar from "../components/navbar"
import PackRip from "../components/packrip"
import Cards from "../components/cards"

export default function PackRips() {
    return (
        <main>
            <div>
                <NavBar/>
                <div>
                    <PackRip/>
                </div>
                <div>
                <Cards/>
                </div>
            </div>
        </main>
    )
}