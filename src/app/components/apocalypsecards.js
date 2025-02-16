import Image from "next/image"
import apoTitle from "../art/cards/apocalypse/apotitle.png"
import hackyHacker from "../art/cards/apocalypse/1_hackyhacker.png"
import infectedOrpheus from "../art/cards/apocalypse/2_infectedorpheus.png"
import survivorOrpheus from "../art/cards/apocalypse/3_survivororpheus.png"
import watcherOrpheus from "../art/cards/apocalypse/4_watcherorpheus.png"
import skullpup from "../art/cards/apocalypse/5_skullpup.png"
import bats from "../art/cards/apocalypse/6_bats.png"
import trashPanda from "../art/cards/apocalypse/7_trashpanda.png"
import hackoon from "../art/cards/apocalypse/8_hackoon.png"
import angryGoose from "../art/cards/apocalypse/9_angrygoose.png"
import dragon from "../art/cards/apocalypse/10_dragon.png"
import opossum from "../art/cards/apocalypse/11_opossum.png"
import trojanVirus from "../art/cards/apocalypse/12_trojanvirus.png"
import murderOfCrows from "../art/cards/apocalypse/13_murderofcrows.png"
import otter from "../art/cards/apocalypse/14_otter.png"
import catHorde from "../art/cards/apocalypse/15_cathorde.png"
import ratHorde from "../art/cards/apocalypse/16_rathorde.png"
import cat from "../art/cards/apocalypse/17_cat.png"
import rat from "../art/cards/apocalypse/18_rat.png"

export default function ApocalypseCards() {
    return(
        <div className="flex flex-col justify-center items-center text-center py-6">
            <div className="align-middle">
                <Image
                src={apoTitle}
                className="w-72"
                alt="Apocalypse Title"/>
            </div>
            <div className="flex flex-wrap justify-center xl:justify-between max-w-8x1 gap-4 py-2">
                <div>
                    <Image
                    src={hackyHacker}
                    className="rounded-lg h-auto w-32"  
                    alt="Hacky Hacker"/>
                </div>
                <div>
                    <Image 
                    src={infectedOrpheus}
                    className="rounded-lg h-auto w-32"  
                    alt="Infected Orpheus"/>
                </div>
                <div>
                    <Image 
                    src={survivorOrpheus}
                    className="rounded-lg h-auto w-32"  
                    alt="Survivor Orpheus"/>
                </div>
                <div>
                    <Image 
                    src={watcherOrpheus}
                    className="rounded-lg h-auto w-32"  
                    alt="Watcher Orpheus"/>
                </div>
                <div>
                    <Image 
                    src={skullpup}
                    className="rounded-lg h-auto w-32"  
                    alt="Skullpup"/>
                </div>
                <div>
                    <Image 
                    src={bats}
                    className="rounded-lg h-auto w-32"  
                    alt="Bats"/>
                </div>
                <div>
                    <Image 
                    src={trashPanda}
                    className="rounded-lg h-auto w-32"  
                    alt="Trash Panda"/>
                </div>
                <div>
                    <Image 
                    src={hackoon}
                    className="rounded-lg h-auto w-32"  
                    alt="Hackoon"/>
                </div>
                <div>
                    <Image 
                    src={angryGoose}
                    className="rounded-lg h-auto w-32"  
                    alt="Angry Goose"/>
                </div>
                <div>
                    <Image 
                    src={dragon}
                    className="rounded-lg h-auto w-32"  
                    alt="Dragon"/>
                </div>
                <div>
                    <Image 
                    src={opossum}
                    className="rounded-lg h-auto w-32"  
                    alt="Opossum"/>
                </div>
                <div>
                    <Image 
                    src={trojanVirus}
                    className="rounded-lg h-auto w-32"  
                    alt="Trojan Virus"/>
                </div>
                <div>
                    <Image 
                    src={murderOfCrows}
                    className="rounded-lg h-auto w-32"  
                    alt="Murder Of Crows"/>
                </div>
                <div>
                    <Image 
                    src={otter}
                    className="rounded-lg h-auto w-32"  
                    alt="Otter"/>
                </div>
                <div>
                    <Image 
                    src={catHorde}
                    className="rounded-lg h-auto w-32"  
                    alt="Cat Horde"/>
                </div>
                <div>
                    <Image 
                    src={ratHorde}
                    className="rounded-lg h-auto w-32"  
                    alt="Rat Horde"/>
                </div>
                <div>
                    <Image 
                    src={cat}
                    className="rounded-lg h-auto w-32"  
                    alt="Cat"/>
                </div>
                <div>
                    <Image 
                    src={rat}
                    className="rounded-lg h-auto w-32"  
                    alt="Rat"/>
                </div>
            </div>
        </div>
    )
}