import Image from "next/image"
import title from "../art/title.png"

export default function Hero() {
    return(
        <div className="bg-slate-950 flex justify-center">
            <Image
            src={title}
            className="w-full max-w-5xl"
            alt="Icon"
            />
        </div>
    )
}